import { createAction, props } from '@ngrx/store';
import {User} from "../../models/user.model";

enum EUserActions{
  UserList = '[User] Users List',
  UserListSuccess = '[User] Users List Success',
  UserListError = '[User] Users List Error',

  UserGet = '[User] User Get',
  UserGetSuccess = '[User] User Get Success',
  UserGetError = '[User] User Get Error',

  UserAdd = '[User] Users Add',
  UserAddSuccess = '[User] Users Add Success',
  UserAddError = '[User] User Add Error',

  UserUpdate = '[User] Users Update',
  UserUpdateSuccess = '[User] Users Update Success',
  UserUpdateError = '[User] User Update Error',

  UserDelete = '[User] Users Delete',
  UserDeleteSuccess = '[User] Users Delete Success',
  UserDeleteError = '[User] User Delete Error',

  ResetUserState = '[Post] Reset User State',
}

export const UsersList = createAction(EUserActions.UserList, (params: any = {}) => params);
export const UsersListSuccess = createAction(EUserActions.UserListSuccess, props<{ users: User[] }>());
export const UsersListError = createAction(EUserActions.UserListError, props<{ error: string }>());

export const UserGet = createAction(EUserActions.UserGet, props<{ id: number }>());
export const UserGetSuccess = createAction(EUserActions.UserGetSuccess, props<{ user: User }>());
export const UserGetError = createAction(EUserActions.UserGetError, props<{ error: string }>());

export const UserAdd = createAction(EUserActions.UserAdd, props<{ user: User}>());
export const UserAddSuccess = createAction(EUserActions.UserAddSuccess);
export const UserAddError = createAction(EUserActions.UserAddError, props<{ error:string }>());

export const UserUpdate = createAction(EUserActions.UserUpdate, props<{id:number, user: User }>());
export const UserUpdateSuccess = createAction(EUserActions.UserUpdateSuccess);
export const UserUpdateError = createAction(EUserActions.UserUpdateError, props<{ error:string }>());

export const UserDelete = createAction(EUserActions.UserDelete, props<{id:number}>());
export const UserDeleteSuccess = createAction(EUserActions.UserDeleteSuccess);
export const UserDeleteError = createAction(EUserActions.UserDeleteError, props<{ error:string }>());

export const ResetUserState = createAction(EUserActions.ResetUserState, (params: any = {}) => params);
