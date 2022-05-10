import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseApiUrl = environment.apiUrl;

  constructor( private http: HttpClient) { }

  //all user list
  getAll(params?: any) {
    return this.http.get(`${this.baseApiUrl}/api/users/list`, {params});
  }

  //all user list
  getUserId(id: number) {
    return this.http.get(`${this.baseApiUrl}/api/users/list/${id}`);
  }

  //add user
  addUser(user){
    return this.http.post(`${this.baseApiUrl}/api/users/createUser`,user);
  }
  //update user
  updateUser(id,user){
    return this.http.put(`${this.baseApiUrl}/api/users/updateUser/${id}`,user);
  }

  //delete user
  deleteUser(id){
    return this.http.delete(`${this.baseApiUrl}/api/users/deleteUser/${id}`);
  }

}
