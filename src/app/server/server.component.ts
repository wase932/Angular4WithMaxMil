import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    allowToAddServer = false;
    serverCreationStatus = 'No server was created';
    serverName = '';
    serverStatus = 'offline';
    isServerCreated = false;
    buttonStatus = 'Submit';
    username = '';
    buttonIsActive = false;
    sampleVar: String = 'This is from the Server Component';
    constructor() {
    setTimeout(() => {this.allowToAddServer = !this.allowToAddServer; } , 3000);
    this.serverStatus = Math.random() < 0.5 ? 'offline' : 'online';
    }

    ngOnInit() {
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    onCreateServer() {
        this.serverCreationStatus = 'server was created';
    }

    onUpdateServer(event: Event) {
        this.serverName = (<HTMLInputElement> event.target).value;
        // console.log(event);

    }
    onEnterUsername() {
        if (this.username.length < 3) {
            this.buttonStatus = 'Submit';
            this.buttonIsActive = false;
        } else {
            this.buttonStatus = 'Reset';
            this.buttonIsActive = true;
        }
    }

    onClickUsernameButton() {
        this.username = '';
    }
}
