import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from "./components/users/add/add.component";
import {UsersComponent} from "./components/users/users.component";


const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'list', component: UsersComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
