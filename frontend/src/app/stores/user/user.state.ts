import {User} from "../../models/user.model";

export interface IUsersState {
  user: User;
  users: User[];
  success: string;
  error: string;
}

export const initialUsersState: IUsersState = {
  user: null,
  users: [],
  success: '',
  error: ''
};
