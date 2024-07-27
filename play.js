const name = 'Sakshi';
let age = 22;
const hasHobbies = true;

// function summariseUser( userName, userAge, userHasHobbies)
// {
//     return(
//         'Name is ' + name + 
//         'Age is ' + age +
//         ' user has Hobbies ' + hasHobbies
//     );
// }

var summariseUser = ( userName, userAge, userHasHobbies) =>
{
    return(
        'Name is ' + name + 
        ', Age is ' + age +
        ', user has Hobbies ' + hasHobbies
    );
}
// console.log(summariseUser(name, age, hasHobbies));

//more shorter

// const add = (a,b) => a+b;
// console.log(add(2,3));

// const addOne = (a) => a+1;
// console.log(addOne(1));

// const addRandom = ()=> 2+3;
// console.log(addRandom());

const person = {
    name: 'Sakku',
    age: 22,
    // greet: () => {
    //     console.log('Hi , I am ' + name); /// this will give undefined if i use this.name
        // coz this here refer to the global scope in case of arrow function,as it does not refer to person object.
    // }
    greet: function(){
        console.log('Hi , I am ' + this.name);
    }
    // same as
    //greet(){
        // console.log('Hi , I am ' + this.name);
    // }
}
// console.log(person); //{ name: 'Sakshi', age: 22 }
person.greet(); // Hi , I am Sakku




/*********      SPREAD OPERATOR   ********************/

const copyPerson = {...person}; 
//remember didn't write it as [...person] as objectes are not iterable
console.log(copyPerson); //{ name: 'Sakku', age: 22, greet: [Function: greet] }


const hobbies = ['Reading', 'Walking'];
//console.log(hobbies); //[ 'Reading', 'Walking' ]
const coppiedHobbies = [...hobbies] // for [hobbies] -> o/p -> [ [ 'Reading', 'Walking' ] ]
console.log(coppiedHobbies);  //[ 'Reading', 'Walking' ]

/****************************  REST OPERATOR  ********************************* */
 
// for(let hobby of hobbies){
//     console.log(hobby);
// }

const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,5,4)); // [1,2,5,4]

/****************************** DESTRUCTURING********************************* */

// we have obj person
// const person = {
//     name: 'Sakku',
//     age: 22,
//     greet: function(){
//         console.log('Hi , I am ' + this.name);
//     }
// }
const printName = ({ name,age }) => {
    console.log(name,age);
}
//object destructuring
printName(person); //Sakku 22 

const myHobbies = ['Drawing', 'Playing'];
const [hobby1, hobby2] = myHobbies; //Array destructuring
console.log(hobby1, hobby2); // Drawing Playing





