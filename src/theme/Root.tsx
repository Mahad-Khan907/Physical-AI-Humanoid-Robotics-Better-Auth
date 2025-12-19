import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { createAuthClientInstance, AuthContext } from '../lib/better-auth-client';
import ChatWidget from '../components/ChatWidget';

function Root({ children }: PropsWithChildren): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { authBackendURL } = siteConfig.customFields as { authBackendURL: string };

  // Create the auth client instance with the correct backend URL
  const authClient = createAuthClientInstance(authBackendURL);

  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    const handleTextSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().length > 0) {
        setSelectedText(selection.toString());
      }
    };
    document.addEventListener('mouseup', handleTextSelection);
    return () => document.removeEventListener('mouseup', handleTextSelection);
  }, []);

  return (
    <AuthContext.Provider value={authClient}>
      {children}
      <ChatWidget selectedText={selectedText} clearSelectedText={() => setSelectedText('')} />
    </AuthContext.Provider>
  );
}

export default Root;