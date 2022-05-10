import { Component, OnInit } from '@angular/core';
import {UserDelete, UsersList} from "../../stores/user/user.actions";
import {User} from "../../models/user.model";
import {Subject, takeUntil} from "rxjs";
import {select, Store} from "@ngrx/store";
import {IUsersState} from "../../stores/user/user.state";
import {getUserError, getUsers, getUserSuccess} from "../../stores/user/user.selectors";
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  unSubscriber = new Subject();
  dtOptions: DataTables.Settings = {};
  deleteAction = false;

  constructor(
    private userStore:Store<IUsersState>
  ) {
    this.subscribeStores();
  }

  subscribeStores() {
    this.userStore.pipe(select(getUsers))
      .pipe(takeUntil(this.unSubscriber))
      .subscribe(users => {
        if (users && users.length > 0) {
          this.users = users;
          console.log(this.users);
        }
      });

    this.userStore.pipe(select(getUserSuccess))
      .pipe(takeUntil(this.unSubscriber))
      .subscribe(success => {
        if (success) {
          if (this.deleteAction) {
            this.deleteAction = false;
            this.loadAllUsers();
          }
        }
      });

    this.userStore.pipe(select(getUserError))
      .pipe(takeUntil(this.unSubscriber))
      .subscribe(error => {
        if (error) {
          console.log(error);
        }
      });
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
      paging: true,
      processing: true,
      searching: true,
      ordering: false,
    };
    this.loadAllUsers();
    // this.getUserList();
    // //using ngrx
    // this.users = this.store.select(getUsers); //using in subscribe

  }

  private loadAllUsers() {
    this.userStore.dispatch(UsersList());
  }

  deleteUser(id){
    console.log('----',id);
    // this.userStore.dispatch(UserDelete({id}));
    Swal.fire({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(result => {
      if (result.value) {
        this.deleteAction = true;
        this.userStore.dispatch(UserDelete({id}));
      }
    });
  }

}
