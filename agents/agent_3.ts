export class Agent3 {
    private documentsToReview: string[] = [];
    private reviewedDocuments: string[] = [];
    private feedbackGenerated: string[] = [];

    constructor() {
        console.log('Agent 3 (Editor) initialized.');
    }

    addDocumentForReview(documentContent: string): void {
        this.documentsToReview.push(documentContent);
        console.log(`Agent 3 received a new document for review (length: ${documentContent.length}).`);
    }

    reason(): string {
        if (this.documentsToReview.length === 0) {
            return 'Agent 3: No documents awaiting review. Waiting for new content.';
        }

        const currentDoc = this.documentsToReview.shift(); // Get the first document
        if (currentDoc) {
            const reviewOutcome = `Agent 3: Reviewing document (length: ${currentDoc.length}). Checking for grammar, clarity, style, and coherence.`;
            const feedback = `Feedback for doc (first 20 chars: "${currentDoc.substring(0, 20)}..."): Grammar OK, clarity needs work, suggest rephrasing sentence X.`;
            this.reviewedDocuments.push(currentDoc);
            this.feedbackGenerated.push(feedback);
            console.log(reviewOutcome);
            console.log(`Agent 3: Generated feedback: "${feedback}"`);
            return reviewOutcome;
        }
        return 'Agent 3: Unexpected state in reason() - no document found despite queue.';
    }

    communicate(message: string): void {
        console.log(`Agent 3 (Editor) received message: "${message}"`);
        if (message.startsWith('SUBMIT_FOR_REVIEW:')) {
            const documentContent = message.replace('SUBMIT_FOR_REVIEW:', '').trim();
            this.addDocumentForReview(documentContent);
        } else if (message === 'REQUEST_FEEDBACK') {
            if (this.feedbackGenerated.length > 0) {
                const feedbackToShare = this.feedbackGenerated.join('\n');
                console.log(`Agent 3 sharing generated feedback with requesting agent.`);
                // In a real system, this would send feedback to the Content Writer
            } else {
                console.log('Agent 3: No new feedback to share yet.');
            }
        } else {
            console.log('Agent 3: Message not directly relevant to editing tasks. Logging for context.');
        }
    }

    getGeneratedFeedback(): string[] {
        return this.feedbackGenerated;
    }
}
