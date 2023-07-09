import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
