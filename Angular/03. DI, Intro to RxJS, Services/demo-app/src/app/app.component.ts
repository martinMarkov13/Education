import { Component } from '@angular/core';
import { User } from './type/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-app';

  users: User[] = [
    { name: 'Ivan', age: 12 },
    { name: 'Mitko', age: 2 },
    { name: 'Pesho', age: 33 },
    { name: 'Penka', age: 75 },
  ];

  // constructor(){
  //   setInterval(()=>{
  //     this.users.push({
  //       name:'DemoName',
  //       age: 0
  //     })
  //     console.log("user has been added!");

  //   },3000)
  // }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value),
    };
    this.users.push(user);

    inputName.value = '';
    inputAge.value = '';
  }
}

class Wallet {
  balance = 0;
  name = '';

  constructor(balance: number, name: string) {
    this.balance = balance;
    this.name = name;
  }
}

class Car {
  model = '';

  constructor(model: string) {
    this.model = this.model;
  }
}

class Person {
  wallet: Wallet; 
  car: Car;

  constructor(balance: number, name: string, carModel: string) {
    this.wallet = new Wallet(balance, name);
    this.car = new Car(carModel)
  }
}

const personIvan = new Person(4000, 'Ivan', "Pejo");
personIvan.wallet.balance; //4000

const personMaria = new Person(5000, 'Maria', "Mercedes");
personMaria.wallet.balance; //5000

// BETTER PRACTICE

class PersonBetterPractice{
  wallet: Wallet;
  car: Car;

  constructor(car:Car, wallet: Wallet){
    this.car = car;
    this.wallet = wallet
  }
}

const ivansCar = new Car("BMW")
const ivansWallet = new Wallet(100, "Ivan")

const personIvanBetterPractice = new PersonBetterPractice(ivansCar, ivansWallet)


