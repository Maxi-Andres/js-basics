
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pinapple", color: "yellow", calories: 37}];

console.log(fruits[3].name);
fruits.pop();

fruits.push({name: "grapes", color: "purple", calories: 62});

console.log(fruits);

// ------------ forEach() ------------

fruits.forEach(fruit => console.log(fruit.name));

// ------------ map() ------------

const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

// ------------ filter() ------------

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories <= 100);

console.log(yellowFruits);
console.log(lowCalFruits);

// ------------ reduce() ------------

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);

console.log(maxFruit);
