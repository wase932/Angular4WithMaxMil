export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed. The new status is : ' + status);
    }
    constructor() {
    }
}