import { OnInit } from '@angular/core';

export class ServerDataService implements OnInit {
    ServerList: {name: string, status: string} [] = [];
    constructor() {
    }

    ngOnInit() {
        this.ServerList = [{name: 'DevServer', status: 'Online'} , {name: 'TestServer', status: 'Offline'}];
        console.log(this.ServerList);
        this.addServer('Production Server' , 'Offline');
        this.removeServer('Production Server' , 'Offline');
    }

    addServer(name: string, status: string) {
        this.ServerList.push({name: name, status: status});
        console.log('Added New Server: ' + name);
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
