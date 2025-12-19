export class Agent6 {
    private illustrationRequests: { description: string, chapter: string, status: string }[] = [];
    private completedIllustrations: { description: string, imageUrl: string }[] = [];

    constructor() {
        console.log('Agent 6 (Illustrator Coordinator) initialized.');
    }

    addIllustrationRequest(description: string, chapter: string): void {
        this.illustrationRequests.push({ description, chapter, status: 'PENDING' });
        console.log(`Agent 6 received new illustration request for chapter "${chapter}": "${description}"`);
    }

    reason(): string {
        if (this.illustrationRequests.length === 0) {
            return 'Agent 6: No illustration requests. Awaiting new visual asset needs.';
        }

        const currentRequest = this.illustrationRequests.find(req => req.status === 'PENDING');
        if (currentRequest) {
            // Simulate sending request to an external illustrator and getting it back
            currentRequest.status = 'IN_PROGRESS';
            const outcome = `Agent 6: Coordinating illustration for chapter "${currentRequest.chapter}" (Description: "${currentRequest.description.substring(0, 30)}..."). Simulating external artist work.`;
            console.log(outcome);

            // Simulate completion after some time
            setTimeout(() => {
                currentRequest.status = 'COMPLETED';
                const imageUrl = `http://example.com/illustrations/${currentRequest.chapter}-${Math.random().toString(36).substring(7)}.png`;
                this.completedIllustrations.push({ description: currentRequest.description, imageUrl });
                console.log(`Agent 6: Illustration for "${currentRequest.chapter}" completed and received: ${imageUrl}`);
                this.illustrationRequests = this.illustrationRequests.filter(req => req !== currentRequest); // Remove from pending
            }, 2000); // Simulate 2-second artist work

            return outcome;
        }
        return 'Agent 6: No pending illustration requests to process right now.';
    }

    communicate(message: string): void {
        console.log(`Agent 6 (Illustrator Coordinator) received message: "${message}"`);
        if (message.startsWith('ILLUSTRATION_NEEDED:')) {
            const parts = message.replace('ILLUSTRATION_NEEDED:', '').split('|');
            if (parts.length === 2) {
                this.addIllustrationRequest(parts[0].trim(), parts[1].trim());
            } else {
                console.log('Agent 6: Invalid ILLUSTRATION_NEEDED format. Expected "description|chapter".');
            }
        } else if (message === 'REQUEST_COMPLETED_ILLUSTRATIONS') {
            if (this.completedIllustrations.length > 0) {
                const illustrationsToShare = this.completedIllustrations.map(ill => `${ill.description}: ${ill.imageUrl}`).join('\n');
                console.log(`Agent 6 sharing completed illustrations.`);
                // In a real system, this would send URLs/data to the Content Writer or Formatting Specialist
            } else {
                console.log('Agent 6: No new completed illustrations to share yet.');
            }
        } else {
            console.log('Agent 6: Message not directly relevant to illustration coordination. Logging for context.');
        }
    }

    getCompletedIllustrations(): { description: string, imageUrl: string }[] {
        return this.completedIllustrations;
    }
}
