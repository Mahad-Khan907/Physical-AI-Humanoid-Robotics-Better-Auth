import React, { useState, useEffect, useRef, useContext } from 'react';
import styles from './styles.module.css';
import { useHistory } from '@docusaurus/router';
import { AuthContext } from '../../lib/better-auth-client';

const ChatWidget = ({ selectedText, clearSelectedText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const history = useHistory();
  const authClient = useContext(AuthContext);

  // If authClient is not ready, we can't get session. Return null or a disabled state.
  if (!authClient) {
    return null; 
  }

  // Direct session hook for instant updates
  const { data: session } = authClient.useSession();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Open chat automatically when text is selected
  useEffect(() => {
    if (session && selectedText && selectedText.trim().length > 0) {
      if (!isOpen) setIsOpen(true);
    }
  }, [selectedText, session]);

  const toggleChat = () => {
    if (!session) {
      alert("Please login to use AI features.");
      history.push('/login');
      return;
    }
    setIsOpen(!isOpen);
    if (isOpen) clearSelectedText();
  };

  const handleSendMessage = async (textToSend = inputValue) => {
    if (!textToSend.trim()) return;

    const userMsg = { text: textToSend, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    clearSelectedText(); // Clear the "Ask AI" bubble after sending

    setMessages(prev => [...prev, { text: '...', sender: 'bot', isTyping: true }]);

    try {
      const response = await fetch('https://my-backend-ai-book.up.railway.app/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend }),
      });
      const data = await response.json();
      setMessages(prev => prev.filter(m => !m.isTyping).concat({ text: data.reply, sender: 'bot' }));
    } catch (error) {
      setMessages(prev => prev.filter(m => !m.isTyping).concat({ text: 'Error connecting to AI.', sender: 'bot' }));
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatIcon} onClick={toggleChat}>💬</div>
      
      {isOpen && session && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span>AI Assistant</span>
            <button onClick={toggleChat}>×</button>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.message} ${styles[msg.sender]}`}>{msg.text}</div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* SUGGESTED TEXT BOX (The Ask AI Option) */}
          {selectedText && (
            <div className={styles.suggestedBox}>
              <p>"{selectedText.substring(0, 50)}..."</p>
              <div className={styles.suggestedButtons}>
                <button onClick={() => handleSendMessage(selectedText)} className={styles.askBtn}>Ask AI</button>
                <button onClick={clearSelectedText} className={styles.clearBtn}>Clear</button>
              </div>
            </div>
          )}

          <div className={styles.chatInput}>
            <input 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type here..." 
            />
            <button onClick={() => handleSendMessage()}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;