// This agent would ideally need to interact with instances of other agents.
// For this simulation, it will log the intended recipient and message.
export class Agent9 {
    private messageQueue: { recipient: string, message: string }[] = [];

    constructor() {
        console.log('Agent 9 (Communication Hub) initialized.');
    }

    queueMessage(recipient: string, message: string): void {
        this.messageQueue.push({ recipient, message });
        console.log(`Agent 9: Queued message for ${recipient}: "${message.substring(0, 50)}..."`);
    }

    reason(): string {
        if (this.messageQueue.length === 0) {
            return 'Agent 9: Message queue is empty. Awaiting new communication requests.';
        }

        const messageToSend = this.messageQueue.shift(); // Get the first message
        if (messageToSend) {
            // In a real system, this would actually call the communicate method of the recipient agent instance
            const deliveryStatus = `Agent 9: Delivering message to ${messageToSend.recipient}: "${messageToSend.message.substring(0, 50)}..."`;
            console.log(deliveryStatus);
            return deliveryStatus;
        }
        return 'Agent 9: Unexpected state in reason() - no message found despite queue.';
    }

    communicate(message: string): void {
        console.log(`Agent 9 (Communication Hub) received message: "${message}"`);
        if (message.startsWith('ROUTE_MESSAGE:')) {
            const parts = message.replace('ROUTE_MESSAGE:', '').split('|');
            if (parts.length >= 2) {
                const recipient = parts[0].trim();
                const actualMessage = parts.slice(1).join('|').trim();
                this.queueMessage(recipient, actualMessage);
            } else {
                console.log('Agent 9: Invalid ROUTE_MESSAGE format. Expected "recipient|message".');
            }
        } else if (message === 'REQUEST_QUEUE_STATUS') {
            console.log(`Agent 9: Current message queue size: ${this.messageQueue.length}`);
            this.messageQueue.forEach((msg, index) =>
                console.log(`- ${index + 1}: To ${msg.recipient} | "${msg.message.substring(0, 40)}..."`)
            );
        } else {
            console.log('Agent 9: Message not directly relevant to message routing. Logging for context.');
        }
    }

    getQueueStatus(): typeof this.messageQueue {
        return this.messageQueue;
    }
}
