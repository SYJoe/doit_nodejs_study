function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Car(year, color, numDoor, owner) {
    this.year = year;
    this.color = color;
    this.numDoor = numDoor;
    this.owner = owner;
}

const owner = new Person("조성연", 24);
const yourCar = new Car(2022, "red", 2, owner);
const p1 = new Person("조성연", 24);
const p2 = new Person("오동재", 20);

console.log("year : " + yourCar.year);
console.log("color : " + yourCar.color);
console.log("numDoor : " + yourCar.numDoor);
console.log("ownerName : " + yourCar.owner.name);
console.log("ownerAge : " + yourCar.owner.age);