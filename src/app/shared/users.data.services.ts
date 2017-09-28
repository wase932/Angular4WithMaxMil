import { UserModel } from './user.model';
import { OnInit, Injectable, DoCheck, Output, EventEmitter } from '@angular/core';

@Injectable()
export class UserDataService implements OnInit {

FireChangeInData = new EventEmitter<UserModel[]>();
AllUsers: UserModel[] = [];

constructor() {
    this.AllUsers.push( new UserModel('Ellen' , 'Inactive'));
    this.AllUsers.push( new UserModel('Leanne' , 'Active'));
    this.AllUsers.push( new UserModel('Bob' , 'Inactive'));
    this.AllUsers.push( new UserModel('Mike' , 'Active'));
}
ngOnInit() {
}

getUsers(filterStatus: string) {
    return this.AllUsers.filter(
        (i) => (i.status === filterStatus)
    );
}

setUser(user: UserModel) {
    if (user.status === 'Active') {
        user.status = 'Inactive';
    } else {
        user.status = 'Active';
    }
    this.FireChangeInData.emit(this.AllUsers);
}

}
