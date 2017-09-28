import { UserDataService } from './../shared/users.data.services';
import { UserModel } from './../shared/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers: UserModel[] = [];

    constructor(private userDataSvc: UserDataService) {
      this.inactiveUsers = this.userDataSvc.getUsers('Inactive');
    }

    ngOnInit() {
      this.userDataSvc.FireChangeInData.subscribe(
        (i) => { this.inactiveUsers = this.userDataSvc.getUsers('Inactive' ); }
      );
    }

    onClick(user: UserModel) {
      this.userDataSvc.setUser(user);
      this.inactiveUsers = this.userDataSvc.getUsers('Inactive');
    }

}
