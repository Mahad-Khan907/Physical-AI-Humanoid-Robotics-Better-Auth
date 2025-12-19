export class Agent5 {
    private documentsToFormat: string[] = [];
    private formattedDocuments: string[] = [];
    private formattingRules: string = "Standard Book Format: Headings, Paragraphs, Citations, and Images.";

    constructor() {
        console.log('Agent 5 (Formatting Specialist) initialized.');
    }

    addDocumentToFormat(documentContent: string): void {
        this.documentsToFormat.push(documentContent);
        console.log(`Agent 5 received a new document for formatting (length: ${documentContent.length}).`);
    }

    reason(): string {
        if (this.documentsToFormat.length === 0) {
            return 'Agent 5: No documents awaiting formatting. Ready for new content.';
        }

        const currentDoc = this.documentsToFormat.shift();
        if (currentDoc) {
            // Simulate formatting process
            const formattedContent = `[FORMATTED] ${currentDoc} - Applied rules: ${this.formattingRules}`;
            this.formattedDocuments.push(formattedContent);
            const outcome = `Agent 5: Formatting document (first 50 chars: "${currentDoc.substring(0, 50)}..."). Applied standard book formatting rules.`;
            console.log(outcome);
            return outcome;
        }
        return 'Agent 5: Unexpected state in reason() - no document found despite queue.';
    }

    communicate(message: string): void {
        console.log(`Agent 5 (Formatting Specialist) received message: "${message}"`);
        if (message.startsWith('FORMAT_DOCUMENT:')) {
            const documentContent = message.replace('FORMAT_DOCUMENT:', '').trim();
            this.addDocumentToFormat(documentContent);
        } else if (message === 'REQUEST_FORMATTED_DOCUMENTS') {
            if (this.formattedDocuments.length > 0) {
                const docsToShare = this.formattedDocuments.map(d => d.substring(0, 100) + '...').join('\n');
                console.log(`Agent 5 sharing formatted documents.`);
                // In a real system, this would send formatted docs to QA or Project Manager
            } else {
                console.log('Agent 5: No new formatted documents to share yet.');
            }
        } else {
            console.log('Agent 5: Message not directly relevant to formatting. Logging for context.');
        }
    }

    getFormattedDocuments(): string[] {
        return this.formattedDocuments;
    }
}
