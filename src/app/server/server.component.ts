import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    allowToAddServer = false;
    serverCreationStatus = 'No server was created';
    serverName = '';
    sampleVar: String = 'This is from the Server Component';
    constructor() {
    setTimeout(() => {this.allowToAddServer = !this.allowToAddServer; } , 3000);
    }

    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
    }

    onCreateServer() {
        this.serverCreationStatus = 'server was created';
    }

    onUpdateServer(event: Event) {
        this.serverName = (<HTMLInputElement> event.target).value;
        // console.log(event);

    }
}


