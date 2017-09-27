import { UserModel } from './../shared/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers: UserModel[] = [];

    constructor() {
    }

    ngOnInit() {
      this.inactiveUsers.push( new UserModel('Hemal' , 'Inactive'));
      this.inactiveUsers.push( new UserModel('Rick' , 'Inactive'));
      this.inactiveUsers.push( new UserModel('Nilesh' , 'Inactive'));
    }

    onClick(user: UserModel) {
      const i = this.inactiveUsers.indexOf(user);
      this.inactiveUsers.splice(i, 1);
  }

}
