import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {AddComponent} from "./add/add.component";
import {UserListComponent} from "./user-list/user-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";


@NgModule({
  declarations: [
    AddComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class UsersModule { }
