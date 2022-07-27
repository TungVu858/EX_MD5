import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./tours/list/list.component";
import {CreateComponent} from "./tours/create/create.component";
import {EditComponent} from "./tours/edit/edit.component";
import {DeleteComponent} from "./tours/delete/delete.component";
import {DetailComponent} from "./tours/detail/detail.component";

const routes: Routes = [
  {
    path : 'list',
    component : ListComponent
  },{
    path : 'create',
    component :CreateComponent
  },
  {
    path : 'edit/:id',
    component :EditComponent
  },
  {
    path : 'delete/:id',
    component :DeleteComponent
  },
  {
    path : 'detail/:id',
    component :DetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
