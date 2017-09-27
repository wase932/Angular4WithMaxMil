import { UserModel } from './../shared/user.model';
import { Component, OnInit, EventEmitter, Output, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers: UserModel[] = [];

  constructor() {
  }

  ngOnInit() {
    this.activeUsers.push( new UserModel('Hemal' , 'Active'));
    this.activeUsers.push( new UserModel('Rick' , 'Active'));
    this.activeUsers.push( new UserModel('Nilesh' , 'Active'));
  }

  onClick(user: UserModel) {
    const i = this.activeUsers.indexOf(user);
    this.activeUsers.splice(i, 1);
}
}
