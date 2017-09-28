import { UserDataService } from './../shared/users.data.services';
import { UserModel } from './../shared/user.model';
import { Component, OnInit, EventEmitter, Output, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
    activeUsers: UserModel[] = [];
    constructor(private userDataSvc: UserDataService) {
    this.activeUsers = this.userDataSvc.getUsers('Active');
  }

  ngOnInit() {
    this.userDataSvc.FireChangeInData.subscribe(
      (i) => {
        this.activeUsers = this.userDataSvc.getUsers('Active');
      }
    );
  }

  onClick(user: UserModel) {
    this.userDataSvc.setUser(user);
    this.activeUsers = this.userDataSvc.getUsers('Active');
  }
}
