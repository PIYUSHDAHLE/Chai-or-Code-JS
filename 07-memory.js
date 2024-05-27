//STACK MEMORY USE IN PRIMITIVE DATATYPE
//copy

let myid = 1235468

let newid = myid 

console.log(newid)

newid = 55555

console.log(newid)


//HEAP MEMORY USE IN NON PRIMITIVE DATATYPE
//reference

let userOne = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email:"john@gmail.com"
}

let userTwo = userOne
console.log(userTwo)
//userTwo is a reference to userOne
userTwo.firstName = 'Piyush'
userTwo.lastName = 'Dahle'
console.log(userOne);
console.log(userTwo);