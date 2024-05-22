// primitive 

// 7 types : Number ,string, boolean, null, undefined ,symbol, Bigint
let g;
console.log(g); //undefine 
console.log(typeof g); // undefine 

const x= null
console.log(typeof x) //object

const a=Symbol('15')
const b=Symbol('15')

console.log(" SYMBOL DATATYPE : "+typeof a) 

console.log(a == b);
console.log(a === b);

const bigNum = 255555555555555555n

console.log(typeof bigNum);

//Reference (Non primitive)

//Array, objects, functions

let heros = ['IRON MAN','THOR','HULK']

console.log(heros[0]);
console.log(heros);
console.log(typeof heros); //object

let myObj ={
    name:'Piyush Dahle',
    age: 24,
    isStudent: true,
    city: 'Bhopal'
}

console.log(myObj);
console.log(typeof myObj);  //object

const myfunction = function() {
    console.log('Hello World');
}

myfunction();
console.log(myfunction);
console.log(typeof myfunction);  //function

function add(c,d) {
    return c+d;
}
console.log(add(5,6));
console.log(typeof add());
