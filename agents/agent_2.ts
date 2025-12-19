export class Agent2 {
    private assignedChapter: string | null = null;
    private draftingProgress: string[] = [];
    private researchData: string[] = [];

    constructor() {
        console.log('Agent 2 (Content Writer) initialized.');
    }

    assignChapter(chapterTitle: string): void {
        this.assignedChapter = chapterTitle;
        this.draftingProgress = []; // Reset for new chapter
        console.log(`Agent 2 assigned to write chapter: "${chapterTitle}"`);
    }

    receiveResearchData(data: string[]): void {
        this.researchData.push(...data);
        console.log(`Agent 2 received ${data.length} new pieces of research data.`);
    }

    reason(): string {
        if (!this.assignedChapter) {
            return 'Agent 2: No chapter assigned. Waiting for writing tasks.';
        }
        if (this.researchData.length === 0) {
            return `Agent 2: Waiting for sufficient research data for chapter "${this.assignedChapter}" before drafting.`;
        }

        const draftContent = `Drafting section for "${this.assignedChapter}" using research: ${this.researchData[0].substring(0, 30)}...`;
        this.draftingProgress.push(draftContent);
        this.researchData.shift(); // Consume one piece of research data per reasoning cycle
        console.log(`Agent 2: ${draftContent}`);
        return `Agent 2: Currently drafting chapter "${this.assignedChapter}". Progress: ${this.draftingProgress.length} sections drafted.`;
    }

    communicate(message: string): void {
        console.log(`Agent 2 (Content Writer) received message: "${message}"`);
        if (message.startsWith('WRITE_CHAPTER:')) {
            const chapterTitle = message.replace('WRITE_CHAPTER:', '').trim();
            this.assignChapter(chapterTitle);
        } else if (message.startsWith('RESEARCH_DATA:')) {
            const data = message.replace('RESEARCH_DATA:', '').trim();
            this.receiveResearchData([data]);
        } else if (message === 'SUBMIT_DRAFT_REQUEST') {
            if (this.draftingProgress.length > 0) {
                console.log(`Agent 2 submitting current draft for chapter "${this.assignedChapter}".`);
                // In a real system, this would send the draft to the Editor agent
            } else {
                console.log('Agent 2: No draft to submit yet.');
            }
        } else {
            console.log('Agent 2: Message not directly relevant to writing tasks. Logging for context.');
        }
    }

    getCurrentDraft(): string[] {
        return this.draftingProgress;
    }
}
