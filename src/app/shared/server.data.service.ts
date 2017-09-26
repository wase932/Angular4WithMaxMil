import { LoggingService } from './logging.service';
import { OnInit, Injectable } from '@angular/core';

@Injectable()
export class ServerDataService implements OnInit {

    ServerList: {name: string, status: string} [] = [];
    constructor(private loggingService: LoggingService) {
    }

    ngOnInit() {
        this.ServerList = [{name: 'DevServer', status: 'Online'} , {name: 'TestServer', status: 'Offline'}];
        console.log(this.ServerList);
        this.addServer('Production Server' , 'Offline');
        this.removeServer('Production Server' , 'Offline');
    }

    addServer(name: string, status: string) {
        this.ServerList.push({name: name, status: status});
        this.loggingService.logServerAdd(name);
    }

    removeServer(name: string, status: string) {
        console.log(this.ServerList.toString());
        const serverToDelete = this.ServerList.indexOf( {name: name, status: status} );
        this.ServerList.slice(serverToDelete);
        console.log('The ' + name + ' Server Was Removed');
    }

    getServers() {
        return this.ServerList;
    }
}
