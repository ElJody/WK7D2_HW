//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFood(person3){
    for(let food in person3){
        if (person3[food][0] instanceof Object){
            console.log(`Favorite ${food}:`)
            for(let rest in person3[food][0]){
                
                console.log(`\t${rest}:\n\t     ${person3[food][0][rest]}`);
            };
        }
        else if (person3[food] instanceof Array){
            console.log(`Favorite ${food}:`);
            for(let dish of person3[food]){
                console.log(`\t${dish}`);
            };
        }
        else{
            console.log(`Favorite ${food}:\n\t ${person3[food]}`);
        };
    };
}
displayFood(person3)

//==========Exercise #2 ===========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
// Create our Person Prototype
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age property of the person object
console.log('===============================================')
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    printInfo=()=>{console.log(`${this.name} is ${this.age} years old`)};
    sumAge=(time)=>{this.age+=time};
    }
    let Phil = new Person('Punxsutawney Phil', 30);
    let Ned = new Person('Ned Reyerson', 50);
    
    Phil.printInfo();
    Ned.printInfo();
    console.log('===============================================')    
    Phil.sumAge(1);
    Phil.printInfo();
    Ned.sumAge(3);
    Ned.printInfo();
    console.log('===============================================')



// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function lengthString(str){
    return new Promise(
        (resolve)=>{
            str.length>10 ? resolve(true) : resolve(false)
            }
            )
        }
async function sentence(str){
    const newCheck = await lengthString(str)
    newCheck ? console.log('Big word') : console.log('Small Number')
}
sentence('hello world')
sentence('hello')

