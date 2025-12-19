export class Agent1 {
    private researchTopics: string[] = [];
    private gatheredInformation: string[] = [];

    constructor() {
        console.log('Agent 1 (Research Assistant) initialized.');
    }

    addResearchTopic(topic: string): void {
        this.researchTopics.push(topic);
        console.log(`Agent 1 added new research topic: ${topic}`);
    }

    reason(): string {
        if (this.researchTopics.length === 0) {
            return 'Agent 1: No active research topics. Awaiting new assignments.';
        }
        const currentTopic = this.researchTopics[0];
        const researchOutcome = `Agent 1: Actively researching '${currentTopic}'. Gathering relevant data from various sources (databases, web articles, academic papers).`;
        // Simulate research data gathering
        this.gatheredInformation.push(`Information on: ${currentTopic} - [Simulated Data]`);
        console.log(researchOutcome);
        return researchOutcome;
    }

    communicate(message: string): void {
        console.log(`Agent 1 (Research Assistant) received message: "${message}"`);
        if (message.startsWith('RESEARCH_REQUEST:')) {
            const topic = message.replace('RESEARCH_REQUEST:', '').trim();
            this.addResearchTopic(topic);
            console.log(`Agent 1 acknowledged research request for: ${topic}`);
        } else if (message.startsWith('SHARE_INFO_WITH:')) {
            const targetAgent = message.split(':')[1].trim();
            const infoToShare = this.gatheredInformation.join('; ');
            if (infoToShare) {
                console.log(`Agent 1 sharing gathered information (${infoToShare.substring(0, 50)}...) with ${targetAgent}`);
                // In a real system, this would trigger a message to the targetAgent
            } else {
                console.log('Agent 1 has no information to share yet.');
            }
        } else {
            console.log('Agent 1: Message not directly relevant to research tasks. Logging for context.');
        }
    }

    getGatheredInformation(): string[] {
        return this.gatheredInformation;
    }
}
