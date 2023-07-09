import { Injectable } from '@angular/core';
import { User } from './type/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor(private http: HttpClient){
    // setInterval(()=>{
    //   this.users.push({
    //     name:'DemoName',
    //     age: 0
    //   })
    //   console.log("user has been added!");

    // },3000)
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value),
    };
    this.users.push(user);

    inputName.value = '';
    inputAge.value = '';
  }

  getUsers() {
    // PROMISE:
    // return fetch(`https://jsonplaceholder.typicode.com/users`).then((res) =>
    //   res.json()
    // );

    //OBSERVABLE
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
