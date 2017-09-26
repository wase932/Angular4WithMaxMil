export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed. The new status is : ' + status);
    }

    logServerAdd(name: string) {
        console.log('A new server : ' + name + ' was added at ' + new Date() );
    }
    constructor() {
    }
}
