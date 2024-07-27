// ES6 is launced in 2015

// var and let are same  but const is constant , in const we can not update the value later on

// var = function scope
// let and const are Block scope

// function Tushar(){
//    var myFirstName='tushar'
//    console.log(myFirstName)
//    if(True){
//     var myLastName='kumar'
//     console.log('inner'+myLastName)
//     console.log('inner'+myFirstName)

//    }

//    console.log('inner'+myLastName)
//    //it will give output
// }
// Tushar()



function Tushar(){
    let myFirstName='tushar'
    console.log(myFirstName)
    if(True){
     let myLastName='kumar'
     console.log('inner'+myLastName)
     console.log('inner'+myFirstName)
     // give output till here
 
    }
 
    console.log('inner'+myLastName)
    //will not give output hereof the 32 line code 

    // this is because let and const are the block scope they work in their block , not in the outside
 }
 Tushar()


 //************ Template Literls (Templates Strings)***************8

 for(var num =1 ; num<=10; num++ ){
    var tableof =8
    // console.log(tableof+' * '+ num + ' = ' + tableof*num)  this is the old method
    
    console.log(`${tableof} * ${num} = ${tableof*num}`)
    
}


// default argument

function mult(a,b=5) {
    c=a*b
    print(c)
}
mult(4)




//************************ Fat arrow function ******************88

const sum = () => {
    return `the sum of the two no is ${(a=5)+(b=4)}`// we will get otput 9
}

const sum2 = () => {
    `the sum of the two no is ${(a=5)+(b=4)}`// we will get otput 9
    // fat arrow func says if the codse is of 1 line then on need to write the return keyword
    // this fuction does not work with this argument

}





//****************************Destructuring in ES6*******************************************************

// Array Destructuring

const myBioData = ['tushar','kumar',18]

// let myName = myBioData[0];
// let myLastName = myBioData[1];
// let myAge = myBioData[2];

// console.log(myName);// we will get tushar as a output , but this is not a right way

// let [myName,myLastName ,myAge ] = myBioData;

console.log(myName); // we will get tushar

// we can add values to 

let [myName,myLastName ,myAge, myDegree='Btech' ] = myBioData;
console.log(myBioData);

console.log(myDegree); // Btech




// Object Destructuring

const data = {
    myFname : 'tushar',  // not the right way
    myLname : 'Kumar',
    age : 18

}
// let age = data.age;
// console.log(age);// the result will we 18



let {myFname , myLname , age} = data;
console.log(age);// the output will we 18



/////////////////////////////////// Object Properties ///////////////////////////////////////////////////////////


let Name = 'tushar';

const Data = {
    Name : "hello how are you",
    // 20 + 6 : " is my age"    we can not do this 
}
console.log(Data);// we will get {Name: "hello how are you"}

// now using the dynamic properties


let Namee = 'tushar';

const Dataa = {
   [Namee] : "hello how are you",
    [20 + 6] : " is my age"    
}
console.log(Dataa);//  output is  {26: ' is my age', tushar: 'hello how are you'} 



// let naam = 'tuahar';
// let umar = 18;
// const b = {
//     naam : naam,
//     umar : umar
// }
// console.log(b); // {naam: 'tuahar', umar: 18}






// no need to write key and value if both are same

let naam = 'tuahar';
let umar = 18;
const b = {
    naam ,
    umar
}
console.log(b); // {naam: 'tuahar', umar: 18}




////////////////////////////////////////Spread Operator/////////////////////////////////////////////////////

const colors = ['red','green','blue','white'];


const myFav = [...colors,'yellow','black'];

console.log(myFav); // the output will be ['red', 'green', 'blue', 'white', 'yellow', 'black']





// ECMAScript 2016

// ES7 features

// 1: array include

const color = ['red', 'green', 'blue', 'white', 'yellow', 'black'];

const isPresent = color.includes('red'); 
console.log(isPresent);// it will return true , ye search kare ga ki red h ki nahi 

// 2: Exponentiation operator

console.log(2**3);//8




// ES8 featurs , introduced in 2017

const N = "tu";
console.log(N.padEnd(5))// the output will we "tu   ", total 3 sapaces , if there is 3 char then it will left 2 spaces
console.log(N.padStart(5))



const person ={name:'tushar',age:18}
console.log(Object.values(person)); // ['tushar', 18] // returns the values in  array
console.log(Object.entries(person));//[ ['name','tushar'],['age','18'] ]



// ES9 , intoduced in 2018


const Person ={name:'tushar',age:18}

const sPerson ={...person}//spread operator

console.log(Person);//{name: 'tushar', age: 18}
console.log(sPerson);//{name: 'tushar', age: 18}


// ES2019 / es10


const aRr = [
    ['zone_1 = ','zone_2'],
    ['zone_3 = ','zone_4'],  // these are 2d dimentional array 
    ['zone_5 = ','zone_6'],
    ['zone_7 = ','zone_8',['zone_7 = ','zone_8']],
    
];

console.log(aRr.flat(Infinity));

// the output of this code is  ['zone_1 = ', 'zone_2', 'zone_3 = ', 'zone_4', 'zone_5 = ', 'zone_6', 'zone_7 = ', 'zone_8', 'zone_7 = ', 'zone_8']






const personn ={name:'tushar',age:18}
const arrobj = Object.entries(person);
console.log(Object.fromEntries(arrobj)); // it returns {name: 'tushar', age: 18} , in ES8 we see how to convert object to array and in this we seed that how to convert array to object



























