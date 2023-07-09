// SOLID TESTS

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
  
  // const ivansCar = new Car("BMW")
  // const ivansWallet = new Wallet(100, "Ivan")
  
  const personIvanBetterPractice = new PersonBetterPractice(new Car("BMW"), new Wallet(100, "Ivan"))
  