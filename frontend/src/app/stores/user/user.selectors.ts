import { createFeatureSelector, createSelector } from '@ngrx/store';
import {IUsersState} from "./user.state";

const selectUser = createFeatureSelector<IUsersState>('users');

export const getUser = createSelector(selectUser, (state: IUsersState) => state.user);

export const getUsers = createSelector(selectUser, (state: IUsersState) => state.users);

export const getUserSuccess = createSelector(selectUser, (state: IUsersState) => state.success);

export const getUserError = createSelector(selectUser, (state: IUsersState) => state.error);
