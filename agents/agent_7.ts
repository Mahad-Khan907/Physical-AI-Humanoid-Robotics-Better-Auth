export class Agent7 {
    private projectTasks: { id: number, description: string, assignee: string, status: string }[] = [];
    private nextTaskId: number = 1;

    constructor() {
        console.log('Agent 7 (Project Manager) initialized.');
    }

    assignTask(description: string, assignee: string): void {
        const newTask = { id: this.nextTaskId++, description, assignee, status: 'PENDING' };
        this.projectTasks.push(newTask);
        console.log(`Agent 7 assigned new task to ${assignee}: "${description}" (ID: ${newTask.id})`);
    }

    updateTaskStatus(taskId: number, status: string): void {
        const task = this.projectTasks.find(t => t.id === taskId);
        if (task) {
            task.status = status;
            console.log(`Agent 7 updated task ${taskId} status to: ${status}`);
        } else {
            console.log(`Agent 7: Task ID ${taskId} not found.`);
        }
    }

    reason(): string {
        const pendingTasks = this.projectTasks.filter(t => t.status === 'PENDING').length;
        const inProgressTasks = this.projectTasks.filter(t => t.status === 'IN_PROGRESS').length;
        const completedTasks = this.projectTasks.filter(t => t.status === 'COMPLETED').length;

        let statusReport = `Agent 7: Currently managing project. Pending: ${pendingTasks}, In Progress: ${inProgressTasks}, Completed: ${completedTasks}.`;
        console.log(statusReport);

        // Simulate proactive management
        if (pendingTasks > 0 && inProgressTasks === 0) {
            const nextPending = this.projectTasks.find(t => t.status === 'PENDING');
            if (nextPending) {
                console.log(`Agent 7: Reminding ${nextPending.assignee} to start task ID ${nextPending.id}: "${nextPending.description.substring(0, 30)}..."`);
                // In a real system, this would send a reminder to the assignee
                this.updateTaskStatus(nextPending.id, 'IN_PROGRESS'); // Automatically start it
            }
        }

        return statusReport;
    }

    communicate(message: string): void {
        console.log(`Agent 7 (Project Manager) received message: "${message}"`);
        if (message.startsWith('NEW_TASK:')) {
            const parts = message.replace('NEW_TASK:', '').split('|');
            if (parts.length === 2) {
                this.assignTask(parts[0].trim(), parts[1].trim());
            } else {
                console.log('Agent 7: Invalid NEW_TASK format. Expected "description|assignee".');
            }
        } else if (message.startsWith('TASK_UPDATE:')) {
            const parts = message.replace('TASK_UPDATE:', '').split('|');
            if (parts.length === 2) {
                const taskId = parseInt(parts[0].trim());
                const status = parts[1].trim();
                if (!isNaN(taskId)) {
                    this.updateTaskStatus(taskId, status);
                } else {
                    console.log('Agent 7: Invalid TASK_UPDATE taskId. Must be a number.');
                }
            } else {
                console.log('Agent 7: Invalid TASK_UPDATE format. Expected "taskId|status".');
            }
        } else if (message === 'REQUEST_PROJECT_STATUS') {
            console.log(`Agent 7 providing full project status report:`);
            this.projectTasks.forEach(task => console.log(`- ID:${task.id} Desc:"${task.description.substring(0, 40)}..." Assignee:${task.assignee} Status:${task.status}`));
        } else {
            console.log('Agent 7: Message not directly relevant to project management. Logging for context.');
        }
    }

    getProjectStatus(): typeof this.projectTasks {
        return this.projectTasks;
    }
}
