// var Person = function () {

// }

class Person { 
    constructor(name="Guess",age=10) {
        this.name  = name;
        this.age = age;
        console.log('constructer çalıştı');
    }
    calculateAge(){
        return new Date().getFullYear() - this.age;
    }
    greeting(text){
        return `${text},my name is ${this.name}`;
    }
}
const p1 = new Person("Onur",22);
const p2 = new Person("Emine",28);
const p3 = new Person();

console.log(p1.greeting('Hello'));
console.log(p1.calculateAge());
console.log(p2.calculateAge());
console.log(p2);
console.log(p1);
console.log(p3);