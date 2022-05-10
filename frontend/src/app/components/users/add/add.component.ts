import { Component, OnInit } from '@angular/core';
import {ResetUserState, UserAdd, UserGet, UserUpdate} from "../../../stores/user/user.actions";
import {User} from "../../../models/user.model";
import {Subject, takeUntil} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {select, Store} from "@ngrx/store";
import {getUser, getUserError, getUserSuccess} from "../../../stores/user/user.selectors";
import {IUsersState} from "../../../stores/user/user.state";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  unSubscriber = new Subject();
  public submitted = false;
  public userId: number;
  userForm: FormGroup;
  user:any;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private userStore: Store<IUsersState>,
    private formBuilder: FormBuilder,
  ) {
    this.userStore.dispatch(ResetUserState({params: {}}));
    this.subscribeStores();
  }

  subscribeStores() {
    this.userStore.pipe(select(getUserSuccess))
      .pipe(takeUntil(this.unSubscriber))
      .subscribe(success => {
        if (success) {
          if (this.submitted) {
            this.submitted = false;
            this.router.navigate(['/list']);
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

    this.userStore.pipe(select(getUser))
      .pipe(takeUntil(this.unSubscriber))
      .subscribe(user => {
        if (user) {
          console.log('====one user detail=====', user);
          this.userForm = this.formBuilder.group({
            firstName: user.firstName,
            lastName: user.firstName,
            email: user.email
          });
          // this.userForm.patchValue({...user});
        }
      });

  }

  ngOnInit(): void {
    this.init();
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.userId = +params.get('id');
        console.log('-----user list--',this.userId);
        this.loadUser(this.userId);
      }
    });
  }

  init(){
    this.userForm = this.formBuilder.group({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required])
    });
  }

  get firstNameError(){
    return this.userForm.get('firstName');
  }
  get lastNameError(){
    return this.userForm.get('lastName');
  }
  get emailError(){
    return this.userForm.get('email');
  }

  loadUser(id: number) {
    this.userStore.dispatch(UserGet({id}));
  }

  submit() {
    if (this.userForm.invalid) {
      return;
    }
    this.submitted = true;
    // console.log('Form Submitted..', this.postForm.value);
    if (this.userId) {
      this.userStore.dispatch(UserUpdate({id: this.userId, user: this.userForm.value}));
    } else {
      this.userStore.dispatch(UserAdd({user: this.userForm.value}));
    }
  }

}
