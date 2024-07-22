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
person.greet();
