import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titleFromParent = 'title from Parent - AppComponent'; 

  users = [
    { name: 'Mitko', age: 21 },
    { name: 'Pesho', age: 22 },
    { name: 'Mariya', age: 43 },
    { name: 'Ivan', age: 16 },
  ];

  onOutputFromChild() {
    console.log('on output from child');
  }
}
