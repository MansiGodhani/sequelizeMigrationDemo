import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from "./components/users/add/add.component";
import {UserListComponent} from "./components/users/user-list/user-list.component";

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'users', loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
