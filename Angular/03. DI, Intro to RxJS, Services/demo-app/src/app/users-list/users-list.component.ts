import { Component, Input } from '@angular/core';
import { User } from '../type/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  @Input() users: User[] = [];

  ngOnChanges(){
    console.log('Invoked from ngOnChanges');
    
  }
}
