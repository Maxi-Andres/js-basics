// (ES6 feature) that provides a more structured and cleaner way to work with objects compared to traditional
// constructor functions 

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product3.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): ${total.toFixed(2)}`);

// ====================================================================================================================================
// static is a keyword that defines properties or methods that belong to a class itself rather than the
// objects created from that class (class owns anything static, not the objects)

class User{
    static userCount = 0;

    constructor(usename){
        this.usename = usename;
        User.userCount++;
    }

    static howManyUsers(){
        console.log(`There are ${User.userCount} people online.`)
    }

    sayHello(){
        console.log(`Hello my name is ${this.usename}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");

console.log(user1.usename);
console.log(user1.userCount); // esto devuelve undefined porque es solo de la clase

console.log(User.userCount); 

User.howManyUsers();

// ====================================================================================================================================
// inheretance = allows a new class to inherit properties and methods from an existing class (parent -> child)
// helps with code reusability

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit1 = new Rabbit();
const fish1 = new Fish();
const hawk1 = new Hawk();

console.log(rabbit1.alive);
rabbit1.eat();
rabbit1.sleep();
rabbit1.run();

console.log(fish1.alive);
fish1.eat();
fish1.sleep();
fish1.swim();

// ====================================================================================================================================
// super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this = this object
// super = parent

class Animal2{
    constructor(name, age){ //! con el constructor inicializas los valores
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}kmh`);
    }
}

class Rabbit2 extends Animal2 {
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish2 extends Animal2 {
    constructor(name, age, swimSpeed){ 
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can run`);
        super.move(this.swimSpeed);
    }
}

class Hawk2 extends Animal2 {
    constructor(name, age, flySpeed){ 
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can run`);
        super.move(this.flySpeed);
    }
}

const rabbit2 = new Rabbit2("rabbit", 1, 25);
const fish2 = new Rabbit2("fish", 2, 12);
const hawk2 = new Rabbit2("hawk", 3, 50);

console.log(rabbit2.name);
console.log(rabbit2.age);
console.log(rabbit2.runSpeed);
rabbit2.run();