let isEven: boolean = true;
let num:number = 4;
let text: string = "hello";

type User = {
  name: string;
  age: number;
};

const user = {
  name: "Pesho",
  age: 21,
} as User;

interface AnotherUser {
  firstName: string;
  id: number;

  getUserName: ()=> string
}

class anotherUserClass implements AnotherUser{
    firstName: string;
    id:number

    getUserName(){
        return this.firstName
    }
}

const anotherUserList = [
  { firstName: "Ivan", id: 1 },
  { firstName: "Mitko", id: 2 },
  { firstName: 'Maria', id:3},
] as AnotherUser[]

anotherUserList.forEach( user => {
   console.log(`${user.id}: ${user.firstName}`);
})

class Person{
    private name: string;
    public age: number;

    constructor(name:string, age:number){
        this.name= name; 
        this.age = age;
    }
}

// Generic function 
function getIdentity<T>(id:T){
    console.log(id);
}
getIdentity<string>("asd")
getIdentity<number>(123)

enum PaymentStatus{
    Failed,
    SUccessful,
    Pending
}
