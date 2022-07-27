import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './tours/list/list.component';
import {RouterModule} from "@angular/router";
import { CreateComponent } from './tours/create/create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './tours/edit/edit.component';
import { DeleteComponent } from './tours/delete/delete.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailComponent } from './tours/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
