import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input('title') titleFromApp: string = '';
  @Input('activeUsers') activeUsersFromParent: {name:string, age:number}[] = [];
  @Output() onChildOutput= new EventEmitter<boolean>()

  isActive = false;
  inputValue = 'Hello!';

  ngOnInit(): void {
    console.log('navigation init');
  }

  // activeUsers = [
  //   { name: 'Mitko', age: 21 },
  //   { name: 'Pesho', age: 22 },
  //   { name: 'Mariya', age: 43 },
  //   { name: 'Ivan', age: 16 },
  // ];

  handleClick(): void {
    this.isActive = !this.isActive;
    this.onChildOutput.emit(this.isActive)
  }
}
