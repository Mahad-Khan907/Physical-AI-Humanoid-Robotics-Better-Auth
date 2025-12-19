export class Agent8 {
    private documentsToQA: string[] = [];
    private qaReports: { document: string, issuesFound: string[], status: string }[] = [];

    constructor() {
        console.log('Agent 8 (Quality Assurance) initialized.');
    }

    addDocumentForQA(documentContent: string): void {
        this.documentsToQA.push(documentContent);
        console.log(`Agent 8 received a new document for QA (length: ${documentContent.length}).`);
    }

    reason(): string {
        if (this.documentsToQA.length === 0) {
            return 'Agent 8: No documents awaiting QA. Ready for final review.';
        }

        const currentDoc = this.documentsToQA.shift();
        if (currentDoc) {
            // Simulate QA process: checking for completeness, consistency, adherence to style guides
            const issues: string[] = [];
            if (currentDoc.length < 100) { // arbitrary rule for demonstration
                issues.push('Document too short for final review, possibly incomplete.');
            }
            if (!currentDoc.includes('conclusion')) { // arbitrary rule
                issues.push('Missing a clear conclusion section.');
            }

            const qaStatus = issues.length > 0 ? 'FAILED_QA' : 'PASSED_QA';
            this.qaReports.push({ document: currentDoc, issuesFound: issues, status: qaStatus });
            const outcome = `Agent 8: Performed QA on document (first 50 chars: "${currentDoc.substring(0, 50)}..."). Status: ${qaStatus}. Issues: ${issues.length > 0 ? issues.join(', ') : 'None'}.`;
            console.log(outcome);
            return outcome;
        }
        return 'Agent 8: Unexpected state in reason() - no document found despite queue.';
    }

    communicate(message: string): void {
        console.log(`Agent 8 (Quality Assurance) received message: "${message}"`);
        if (message.startsWith('SUBMIT_FOR_QA:')) {
            const documentContent = message.replace('SUBMIT_FOR_QA:', '').trim();
            this.addDocumentForQA(documentContent);
        } else if (message === 'REQUEST_QA_REPORTS') {
            if (this.qaReports.length > 0) {
                const reportsToShare = this.qaReports.map(r => `Doc: "${r.document.substring(0, 50)}...", Status: ${r.status}, Issues: ${r.issuesFound.join('; ')}`).join('\n');
                console.log(`Agent 8 sharing QA reports.`);
                // In a real system, this would send reports to Project Manager or Editor
            } else {
                console.log('Agent 8: No new QA reports to share yet.');
            }
        } else {
            console.log('Agent 8: Message not directly relevant to QA tasks. Logging for context.');
        }
    }

    getQaReports(): typeof this.qaReports {
        return this.qaReports;
    }
}
