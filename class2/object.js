const person = new Object();
person.name = "조성연";
person.age = 24;

const person = {
    name : "조성연", 
    age : 24
}

console.log("year : " + person.year);
console.log("color : " + person.color);
console.log("numDoor : " + person.numDoor);
console.log("make : " + person.make);

const textYear = 'year';
console.log("year : " + person[textYear]);
console.log("color : " + person['color']);
console.log("numDoor : " + person['numDoor']);