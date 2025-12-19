export class Agent4 {
    private claimsToVerify: string[] = [];
    private verificationResults: { claim: string, status: string, details: string }[] = [];

    constructor() {
        console.log('Agent 4 (Fact Checker) initialized.');
    }

    addClaimToVerify(claim: string): void {
        this.claimsToVerify.push(claim);
        console.log(`Agent 4 received new claim for verification: "${claim}"`);
    }

    reason(): string {
        if (this.claimsToVerify.length === 0) {
            return 'Agent 4: No claims awaiting verification. Ready for new input.';
        }

        const currentClaim = this.claimsToVerify.shift();
        if (currentClaim) {
            // Simulate verification process
            const verificationStatus = Math.random() > 0.8 ? 'FLAGGED' : 'VERIFIED'; // 20% chance to flag
            const details = verificationStatus === 'FLAGGED' ? 'Source unverified or contradictory information found.' : 'Multiple reliable sources confirm this claim.';
            this.verificationResults.push({ claim: currentClaim, status: verificationStatus, details: details });
            const outcome = `Agent 4: Verified claim "${currentClaim.substring(0, 50)}...". Status: ${verificationStatus}. Details: ${details}`;
            console.log(outcome);
            return outcome;
        }
        return 'Agent 4: Unexpected state in reason() - no claim found despite queue.';
    }

    communicate(message: string): void {
        console.log(`Agent 4 (Fact Checker) received message: "${message}"`);
        if (message.startsWith('VERIFY_CLAIM:')) {
            const claim = message.replace('VERIFY_CLAIM:', '').trim();
            this.addClaimToVerify(claim);
        } else if (message === 'REQUEST_VERIFICATION_RESULTS') {
            if (this.verificationResults.length > 0) {
                const resultsToShare = this.verificationResults.map(r => `${r.claim} [${r.status}]`).join('\n');
                console.log(`Agent 4 sharing verification results.`);
                // In a real system, this would send results to the Editor or Content Writer
            } else {
                console.log('Agent 4: No new verification results to share yet.');
            }
        } else {
            console.log('Agent 4: Message not directly relevant to fact-checking. Logging for context.');
        }
    }

    getVerificationResults(): { claim: string, status: string, details: string }[] {
        return this.verificationResults;
    }
}
