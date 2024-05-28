const name = "Piyush Dahle"
const age = 24

console.log(name + age +" all set ")

//back ticks (string interpotaction)

console.log(`Hello my name is ${name} and my age is ${age}`);

//other way to declear the sting

const gameName = new String('JaiShreeRam')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
//METHODS 
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

let newString = gameName.substring(2,5);
console.log(newString);

let anotherString = gameName.slice(0,8);
let another = gameName.slice(-8,8);
console.log(anotherString);
console.log(another);

let connect = gameName.concat(anotherString);
console.log(connect);

let space = "     rohit      ";

console.log(space);
console.log(space.trim());

const url = 'www.google.com/20%Piyushdahle'

console.log(url.replace('/20%','-'));

console.log(url.includes('Piyush'));
console.log(url.includes('Dahle'));

let naam = 'piyush-dahle-naam-toh-suna-hoga'
console.log(naam.split('-'));
