import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  UserAdd,
  UserAddError,
  UserAddSuccess,
  UserDelete,
  UserDeleteError,
  UserDeleteSuccess,
  UserGet,
  UserGetError,
  UserGetSuccess,
  UsersList,
  UsersListError,
  UsersListSuccess,
  UserUpdate,
  UserUpdateError,
  UserUpdateSuccess
} from "./user.actions";
import {of} from "rxjs";
import {UserService} from "../../services/user.service";

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}

  // get All user
  getUsersList$ = createEffect(() => this.actions$.pipe(
    ofType(UsersList),
    switchMap((action) => {
      return this.userService.getAll(action.params).pipe(
        map((resp: any) => {
          return UsersListSuccess({users: resp});
        }),
        catchError(error => {
          return of(UsersListError({error: error }));
        })
      );
    })
  ));

  //get user by id
  getUserGet$ = createEffect(() => this.actions$.pipe(
    ofType(UserGet),
    switchMap((action)=>{
      return this.userService.getUserId(action.id).pipe(
        map((resp: any) => {
          // console.log('resp',resp);
          return UserGetSuccess({user:resp});
        }), catchError((err) => {
          return of(UserGetError({error:err}));
        })
      )
    })
  ));

  //add User
  addPosts$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(UserAdd),
        switchMap((action)=>{
          // console.log('-----',action);
          return this.userService.addUser(action.user).pipe(
            map((user)=>{
              console.log('--add user data--', user);
              return UserAddSuccess();
            }),
            catchError((err) => {
              return of(UserAddError({error:err}))
            })
          )
        })
      )
    }
  )

  //update user
  userUpdate$ = createEffect(() => this.actions$.pipe(
    ofType(UserUpdate),
    switchMap((action) => {
      console.log('action--', action);
      return this.userService.updateUser(action.id, action.user).pipe(
        map((resp: any) => {
          return UserUpdateSuccess();
        }),
        catchError(error => {
          return of(UserUpdateError({error: error}));
        })
      )
    })
  ))

  //delete user
  userDelete$ = createEffect(() => this.actions$.pipe(
    ofType(UserDelete),
    switchMap((action) => {
      console.log('action--', action);
      return this.userService.deleteUser( action.id ).pipe(
        map((resp: any) => {
          console.log('-----',resp)
          return UserDeleteSuccess();
        }),
        catchError(error => {
          return of(UserDeleteError({error: error}));
        })
      )
    })
  ))

}
