import { Action, createReducer, on } from '@ngrx/store';
import {initialUsersState} from "./user.state";
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
  // UserGet,
  // UserGetError,
  // UserGetSuccess,
  UsersList,
  UsersListError,
  UsersListSuccess,
  UserUpdate,
  UserUpdateError,
  UserUpdateSuccess
} from "./user.actions";

export const reducer = createReducer(initialUsersState,
  on(UsersList, (state) => ({
    ...state,
    users:[],
    success: '',
    error: ''
  })),
  on(UsersListSuccess, (state, {users}) => ({
    ...state,
    users,
    success: '',
    error: ''
  })),
  on(UsersListError, (state, {error}) => ({
    ...state,
    users: [],
    success: '',
    error
  })),

  on(UserGet, (state) => ({
    ...state,
    user: null,
    success: '',
    error: ''
  })),
  on(UserGetSuccess, (state, {user}) => ({
    ...state,
    user,
    success: '',
    error: ''
  })),
  on(UserGetError, (state, {error}) => ({
    ...state,
    user: null,
    success: '',
    error
  })),

  on(UserAdd, (state) => ({
    ...state,
    success: '',
    error: ''
  })),
  on(UserAddSuccess, (state) => ({
    ...state,
    success: 'User added successfully',
    error: ''
  })),
  on(UserAddError, (state, {error}) => ({
    ...state,
    success: '',
    error
  })),

  on(UserUpdate, (state) => ({
    ...state,
    success: '',
    error: ''
  })),
  on(UserUpdateSuccess, (state) => ({
    ...state,
    success: 'User updated successfully',
    error: ''
  })),
  on(UserUpdateError, (state, {error}) => ({
    ...state,
    success: '',
    error
  })),

  on(UserDelete, (state) => ({
    ...state,
    success: '',
    error: ''
  })),
  on(UserDeleteSuccess, (state) => ({
    ...state,
    success: 'User deleted successfully',
    error: ''
  })),
  on(UserDeleteError, (state, {error}) => ({
    ...state,
    success: '',
    error
  })),

);

export function usersReducer(state = initialUsersState, action: Action) {
  return reducer(state, action);
}

