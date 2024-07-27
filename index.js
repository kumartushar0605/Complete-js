console.log("hello world")
var myName = "my name is tushar"
var myAge = 26;
console.log(myAge);
console.log(myName);

// data types in javascript
// total six datatypes are there


//typeof operator
console.log(typeof(myName));  // the result will we string
console.log(typeof(myAge)); // the result will we number which means string

var iAmTushar = true;
console.log(iAmTushar);
console.log(typeof(iAmTushar)); // the result will we boolen



console.log(10+'20');//1020
console.log(9-'5'); // its a bug ,answer will 4
console.log("java"+"script");//javascript
console.log(""+"");//empty
console.log(""+0);//0
console.log("tushar"-"kumar");//not a number , NaN
console.log(true + true);//anwer is 2 , in js 1 represent true and 0 respresent false
console.log(true + false);
console.log(false + true);
console,log(false - true);//-1


// diff b/w null and udefined

var iAmUseless = null;
console.log(iAmUseless);// result will we null
console.log(typeof(iAmUseless));// the result will we object but null is not a object so  , this is the 2 bug in the javascript

var hey;
console.log(hey);// result will undifined
console.log (typeof(hey));// undefined

var myPhoneNo= 1234567890;
var yourName= 'ashish'
console.log(myPhoneNo);
console.log(yourName);
 // used in validatition that the user is written the number or not
 // nan means not a number
console.log(isNaN(myPhoneNo));//false , its a number
console.log(isNaN(yourName));// true , its not a number

if(isNaN(yourName)){
console.log("plz enter a valid phone number")
}

console.log(NaN===NaN)//false
console.log(Number.NaN ===NaN);//false 
console.log(isNaN(NaN));//true
console.log(isNaN(Number.NaN))//true
console.log(Number.isNaN(NaN));//true

// expressions and operators

console.log(5+20)//25 , here 5 and 20 are operand and + is operator
//combination of operand and the operator is called expressions

// arithmetic operators

console.log(3+3)
console.log(4/2)
console.log(5-2)
console.log(4*3)

console.log('the remainder operator'+ 81%8)

// Increment and Decrement operator 

// operator : x++ or ++x or --x or x--
// if used postfix , with operator after operand (for example, x++)
// the increment operator increments and returns the value before incrementing

var num = 15
var newNum= num++;
console.log(num);// 16
console.log(num++); // 15

var int = 19
var myInt = int++ +5;
console.log(int); // 20
console.log(myInt); //24



// if used prefix , with operator before operand (for example ,++X)
// the increment operator increments and returns the value after incrementing

var num = 15
var newNum= ++num;
console.log(num);// 16
console.log(num++); // 16 

var int = 19
var myInt = ++int +5;
console.log(int); // 20
console.log(myInt); //25

// now for decrement

var num = 15
var newNum= num--;
console.log(num);// 14
console.log(newNum); // 15

var int = 19
var myInt = int-- +5;
console.log(int); // 18
console.log(myInt); //24 (19+5)



var num = 15
var newNum= --num;
console.log(num);// 14
console.log(newNum); // 14

var int = 19
var myInt = --int +5;
console.log(int); // 18
console.log(myInt); //23




//comparision operator , returs true or false

var a = 30
var b = 10

console.log(a==b);// returs false
console.log(a!=b)//true
console.log(a>b)//true
console.log(a>=b)//true

//logical operator

var a = 30
 var b = -20

 // logical operator AND (&&)
 // when the values of the operands are same then the its return true otherwise its reture false
 
 console.log(a>b && b>0) // here the a>b which is true and B>0 which is false so, the answer is false , if B>0 will true then its returns true 

 // logical OR(||)
 // if the value any operand is true then its returns true
 // if all the value are false then its false

 console.log(a>b || b>0)// true

 // logical not(!)
  // true ko false    or   false ko true
  console.log(!(a>b || b>0))// false
  console.log(!false)// true



// string concatenation(operators)

console.log("hello world")
console.log("hello "+ "world")
var tushar = "kumar";
console.log(tushar+"tushar")

// diff b/w == and ===

var num1 = 5
var num2 = '5'
console.log(num1 == num2); // returns true , its only checks the value

var num3 = 5
var num4 = '5'
console.log(num3 === num4);// false , its checks the value as well as the datatype





//control statement and loops





var tomr = 'rain';// tommorow

if(tomr == 'rain'){
    console.log("take a raincoart")

}else{
         console.log("no need to take a rain coart")
}


// we have 5 falsy not false , values in js
// 0,"",undefined,null,NaN,false**  is false anyway
// it always returns else value

if(score=0){
    console.log("we loss the mathch")
}else{
    console.log("we won the match")
} //it returns the else part


 // conditional (ternary) operator
 // its the only operator in js which takes three operands

 // its a shorter method of if else statement


// var age = 17
// if(age>=18){
//     console.log("you are eligible to vote")
// }else{
//     console.log("not eligible")
// }


var age = 17
console.log((age >= 18) ? ' you can vote': "not eligible") 

 

// switch statement

var area = "circle";
var PI = 3.12, l=5, b=4 , r=3;

switch(area){
    case 'circle':
        console.log("area of the circle is :" +PI*r**3);
        break;
    case 'traingle':
        console.log("area of the traingle is :" + (l*b)/2);
        break;
    case 'rectangle':
        console.log("area of the rectangle is :"+(l*b));
        break;
    default:
        console.log("please enter the valid data")
}// it retuns the value of area of the circle


// while loop

var num =0
 while(num<=10){
    console.log(num)// infinte loop

 }

 var num =0
 
 while(num<=10){
    console.log(num)
    num++
    // retuns 0 to 10
 }


 var num =20
 
 while(num<=10){
    console.log(num)
    num++
    // retuns nothing
 }




//  Do-while loop

do{
    console.log(num)
    num++
}while(num<=10)// prints 0 to 10

// for loop

for (var num = 0 ; num<=10;num++){
    console.log(num)// priints 0 to 10
}

// js program to write the table of 8

for(var num =1 ; num<=10; num++ ){
    var tableof =8
    console.log(tableof+' * '+ num + ' = ' + tableof*num)
}



// *********************** FUNCTIONS IN JS **************************

function sum (){
    var a = 10
    var b = 20
    var tatol = a+b;
    console.log(tatol)
}

sum();

// parameters and arguments in js 

function add(a,b){
    var num7= a+b;
    console.log(num7)
}
add(5,6);


// return keywoard

function sum(a,b){
    return a+b;
}
sum(9,10)

// function expression

function sum(a,b){

    return total =a+b;
   
}
var funExpress = sum(9,10)
console.log('the sum of the two no is :' + funExpress)



// anomymous function , func without a name is called anomymous function

var funExpress = function(a,b){
    return total = a+b;
}

console.log(funExpress(5,10));

// console.log("the sum of the two no is :" + funExpress);



// ************* ARRAYS IN  JAVA SCRIPT ***********************

// array is used to store multiple values in a single varialble

// var Names = ['tushar','dines',26,,True,'ronaldo']

var names = ['tushar','kumar','messi','ronaldo','dhoni','virat']
console.log(names[0])// tushar will print
// index will start with 0 but length will start with 1
console.log(names.length)// the output will we 6
console.log(names[names -1 ])// virat 

// for in loop and for of loop was indroduced in ES6 js

// for loop

for (var i = 0 ; i<names.length ;i++){

    console.log(names[i]);
    // the output will we
    //tushar 
    //kumar
    // and will print till virat
}

// for in loop  , its a part of es6

for (let i in names){
    console.log(i);// it will gives the index of the elements
    //0
    //1 and so on...

}

// for in names

for (let i of names){
    console.log(i)// tusar
    // kumar
    //messi
    // and so on...
}

  // for each loop ,its a combination of for in or for of loop 

  names.forEach(function(i,index,array){
    console.log(i+" index :" + index + " " + array);

    // the output will tushar index : 0 tusahr,kumar,messi,ronaldo,dhoni,virat
    // and so on like thiss till virat

  });


  // writing the obouve code with fat arrow function

  names.forEach(i=>{
    console.log(i)
    });//tusahr
    //kumar
    //messi and so on

  names.forEach((i,index,array) =>{
  console.log(i+" index :" + index + " " + array);

  // the output will tushar index : 0 tusahr,kumar,messi,ronaldo,dhoni,virat
  // and so on like thiss till virat

});

// Searching and Filter of an Array

console.log(names.indexOf(1));// will return kumar

console.log(names.indexOf('kumar',3));// in this it will start form 3 index means messi then go in forward direction and then gives the index of kumar
// so the output will 5


console.log(names.indexOf('kumarrrr',3));// print -1 when none is found



// Last index of 

var friends =['ram','syham','mohan','rohan','mohan']

console.log(friends.lastIndexOf('mohan'));// gives 4 

console.log(friends.lastIndexOf('mohan',3))// search for last and give the output 2


// includes in js will search and returns the boolean value

console.log(friends.includes('mohan'));// the output will true



// find

const prices =[200,300,350,400,450,500,600]

// prices < 400

const findElem =  prices.find((i) =>{ // fatt orow func
    return i < 400;
});

console.log(findElem());
// gives 200 only , its only gives one data


console.log( prices.find((i)=> i<400)); // 200 
// if the condition not match then the ouput  will undifined


// find index

console.log(prices.findIndex((i)=>i<400)); // gives 0 which is the index no of 200
// if the condition not match then the ouput  will -1


// filter in js

// prices <400

const newPriceTag =prices.filter((i)=>{
   return i<400 // if the condition not matched then it will we return empty array
});
console.log(newPriceTag)// retuns all the values which is smaller than 400 in a new array


// sort in array

const months =['March','Jan','Feb','Dec','Nov']

console.log(months.sort());// it will return an array in asec order of months ,,asc chota se bada
//["Dec", "Feb", "Jan", "March", "Nov"]

// sort method work with strings 



// push method

const animals = ['pigs', 'goats','sheep']
animals.push('chicken','cats','cow')// they will pushed in the aarray at the last
console.log(animals);

//unshift method

animals.unshift('suar')
console.log(animals)// will pushed at 0 index

// 2nd exapmle

const myNumbers = [1,2,3,5]
myNumbers.unshift(4,6)
console.log(myNumbers)//the output will we [4,6,1,2,3,5]


const plants = ['broccoli','cauliflower','kale','tomato','cabbage']

console.log(plants.pop());//cabbage 

console.log(plants);//cabbage will we popped and the remais values will print

// shift method , will pop the first value

console.log(plants.shift());
console.log(plants)// pops the first value and display the remaining ones 

////  splice method

const Months = ['Jan','March','April','June','July'];

// Add Dec at the end of an array , this method will do add , insert ,update , delete

const newMonth = Months.splice(5,0,'Dec')// here 5 is index no , 0 means we not want to delete any string

console.log(Months)// it will push dec at 5 index

// another ex

const newwMonth = Months.splice(Months.length,0,'Dec')// here 5 is index no , 0 means we not want to delete any string

console.log(Months)

// what is the return value of splice method

console.log(Months)//the ouput will we empty array [] , if no value is delted 

// update march to March (update)

const Monthss = ['Jan','march','April','June','July'];

const updateMonth =Monthss.splice(1,1,"March");// here 1 is the index , the another 1 is to delete the string of 1 index , and then Add March at that index

console.log(Monthss) 





/////////////////////////////////////////////////////////

const Monthsss = ['Jan','march','April','June','July'];

const indexOfMonth = Monthsss.indexOf('march'); // if march not in  the array then it will return -1 we know that 

if(indexOfMonth != -1){
// if not true means data mil gaya 
// we got the index value

const updateMonthhh =Monthss.splice(indexOfMonth,1,"March");

}else{

    console.log("no such data found")
}

// delete june from Monthsss

const IndexofMonth = Monthsss.indexOf('June');
 
if(IndexofMonth != -1){
    const delMonth = Monthsss.splice(IndexofMonth,1)
    console.log(Monthsss);
    console.log(delMonth)// print the deleted value
}else{
    console.log(' no such values found')
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// map method 


const array1 = [1,4,9,16,25]


// num > 9

let newArr = array1.map((i,index,arr)=>{
      return i > 9 

})
console.log(array1);//[1,4,9,16,25]
console.log(newArr);//[false, false, false, true, true]


let NewArr = array1.map((i,index,Arr)=>{
     return `Index no = ${index} and the value is ${i} belong to ${Arr}`
    
});
console.log(NewArr)// the output is 
/*
"Index no = 0 and the value is 1 belong to 1,4,9,16,25"
"Index no = 1 and the value is 4 belong to 1,4,9,16,25"
"Index no = 2 and the value is 9 belong to 1,4,9,16,25"
"Index no = 3 and the value is 16 belong to 1,4,9,16,25"
"Index no = 4 and the value is 25 belong to 1,4,9,16,25"*/


// map and foreach is some how same but in map it reaturn the data in new array but in foreach it retuns undifeind

NewArr = array1.forEach((i,index,Arr)=>{
    return `Index no = ${index} and the value is ${i} belong to ${Arr}`
   
});
console.log(NewArr)// the output will we undifined


// Find the square root the given array

 let arr = [25,36,49,64,81];
 
 let arrSqr = arr.map((i)=>{
     return Math.sqrt(i);  // in 1 line of code in fat arrow fuc then no mandatory to the write return
 })

 console.log(arrSqr);//[ squsares of the elements]

//////////////////////////////////////////////////////////////////////////////////////////////////

 // multiply each element by 2 and return only those elements which are greater than 2

//we are using chaining method

let arrr=[2,3,4,6,8]

let arr2 = arrr.map((i)=>{

    return i*2
}).filter((i)=>{
    return i > 9 ;
    
});
console.log(arr2)//[12,16]


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Reduce method
// flatten an array means to convert the 3d or 2d array into a single dimensional array

// the raduce array fucn takes 4 arguments

// Accumualtor 
// Current Value
// Current Index
//Source Array

// reduce in which we want's the sum or avg and many more of an array , means we need a single value


let ARR = [5,6,2]

let sum = ARR((accumualtor,i,index,ARR)=>{
                 // accumualator in simple , in a box or we can say container we store the data

                 return accumualtor += i
});
console.log(sum)// the output will we 13


let ARRR = [2,3,4,6,8]

let arr3= ARRR.map((i)=>{

    return i * 2;

}).filter((i)=>{
       i > 10
}).reduce((accumualator,i,index,ARRR)=>{

    return accumualator +=i

})
console.log(arr3)




let ARRRR = [2,3,4,6,8]

let arr4= ARRRR.map((i)=>{

    return i * 2;

}).filter((i)=>{
       i > 10
}).reduce((accumualator,i,index,ARRR)=>{

    return accumualator *=i// the will mulitply the elemnts of the array

})
console.log(arr4)




let ARRRRR = [1,2]

let summ = ARRRRR.reduce((accumualator,i,index,ARRR)=>{

    return accumualator +=i

},7)// here 7 is already present in the accumualaotr and then 1+2 = 3 +7 = 10
console.log(summ); // the result will we 10




// how to fatter an array

//converting 2d and 3d array into one dimentional array

const aRr = [
    ['zone_1 = ','zone_2'],
    ['zone_3 = ','zone_4'],  // these are 2d dimentional array 
    ['zone_5 = ','zone_6'],
    ['zone_7 = ','zone_8'],
    
] 
let flatArr = arr.reduce((accumualator,i,index,aRr)=>{

    return accumualator.concat(i);       // conct means 'hello ' + ' world ' = 'helloworld'
    
});

console.log(flatArr);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// strings in js


let myName = "Tushar Kumar";
console.log(myName.length);

// Escape Character

let anySentence ="we are the so-called \" Vikings \" from the north "

console.log(anySentence); //we are the so-called " Vikings " from the north


// if you dont want to mess , simply use the alternate quotes


let anySentencee ="we are the so-called ' Vikings'  from the north "

console.log(anySentencee); //we are the so-called ' Vikings ' from the north

// String Searching

const myBioData = " hello my name is tushar "

console.log(myBioData.indexOf('tushar'));// gives the index of tushar and -1 if not found


const myBioDataa = " hello my t name is tushar "

console.log(myBioDataa.indexOf('t',12));// search starts from 6 index  in forward direction and then prints the index of t





const myBioDataA = " hello my name is tushar "

console.log(myBioDataA.lastIndexOf('t',12));// searching starts from backworad direction <---- like this


const MyBioData = "hello my name is tushar"

let sData = MyBioData.search('tushar') // the vill not take the 2nd value like,('tushar',8)

console.log(sData);


// Extracting strings parts

// there are three methods for extracting a part of a string

// 1. slice(start, end)
// 2. substring(start, end)              
// 3. substr(start , length)

// the slice() method

//slice() extracts a part of a string and returns the extracted part in a new string

var str = 'Apple , Banana , Kiwi';

// let res = str.slice(0,4)
let res = str.slice(7,-2)
console.log(res)//Appl will we the output


// Display only 280 characters of a string like the one used in Twitter

let myTweets = "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"

let myActualTweet = myTweets.slice(0,280)
console.log(myActualTweet)// give ony 280 char
console.log(myActualTweet.length)

// substring

let stR = "apple , banana , kiwi"
console.log(str.substring(7,2))// ple ,       // here we get 7 char but the work of 2 is to its starts from then 2 index and go till 7 index
console.log(str.substring(7,-2))// we ge 7 char and the work of -2 is to start from 0 index , every end value with -ve starts from 0 in substring method


// substr


var  STR= "apple , banana , kiwi";

// var ress = STR.substr(0,4)
var ress = STR.substr(4,-2)// no output
var ress = STR.substr(-3) // kiwi 

console.log(ress);// give char from 0 index to 4 index



// Replacing stiring content()

let myBioDataaa = 'hello my name is tushar and tushar'

let replaData  = myBioDataaa.replace('tushar','Tushar')

console.log(replaData)// it change the first tushar not the second one and returns the data in a string


// Extracting String characters

// there are three methods 

// charAt(position)
//charCodeAt(position)
//Property access [ ]

let char = 'yahoo'
console.log(char.charAt(0));// it returns y


// charCodeAt method()  // it returns the unicode of the character at a specified index in a string
// the method returns a UTF-16 code (an interger b/w 0 to 65535)

let Char ='yahoo';
console.log(Char.charCodeAt(1)); //retuns 97


// Property access
//ECMA script 5 (2009) allows property access [ ] on the strings

var sTr = 'HELLO WORLD'
console.log(sTr[1])// retuns E


// other usefull methods 

let myname = 'tusha KUMAR'

console.log(myname.toUpperCase());
console.log(myname.toLowerCase());

// the concat method , join two strings

let Fname = 'tushar'
let Lname = 'kumar'
console.log(Fname.concat(Lname));
console.log(Fname.concat(" ",Lname));

// String.trim()

var ChaR = '                 tushar              '
console.log(ChaR.trim()); // the white spaces on first and the last side trims out


// split method , converts a string into array

var txt = 'a,b,c,d'
console.log(txt.split(",")) // splits in , 





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Date and times in javascript

// js Date objects represent a single moment in time in a platform-independent format . Date objects contain a number
//that represents miliseconds since 1 Januarary 1970 UTC.


// creating Data Objects
// there are 4 ways to create a new date object:


let currDate = new Date();
console.log(currDate); // the output will we , Sun Mar 26 2023 15:44:02 GMT+0530 (India Standard Time)

console.log(new Date().toDateString());//Sun Mar 26 2023
console.log(new Date().toLocaleString())//26/03/2023, 15:54:50
console.log(new Date().toString());//Sun Mar 26 2023 15:54:50 GMT+0530 (India Standard Time)





// Date.now()
// Return the numeric value corresponding to the currnent time-the number of the miliseconds elapsed since January 1, 1970 00:00:00 UTC

console.log(Date.now());//1679826565932 , retuns miliseconds since jan 1 1970


// new Date(year,month,....)

// 7 numbers specify year,month,day,hour,minute,second, and milisecond (in that order)

//Note : js counts month from 0 to 11
// means jan is 0  and dec is 11

var d = new Date(2023,26,2,16,5,30,0) //  7 numbers specify year,month,day,hour,minute,second, and milisecond (in that order)

console.log(d.toLocaleString());// the output is 02/03/2025, 16:05:30 


// Dates method 

const CurrDate = new Date();

// how to get the indivisual date

console.log(CurrDate.toDateString())// we know it gives the both date and time

console.log(CurrDate.getFullYear());// we get the year

console.log(CurrDate.getMonth());

console.log(CurrDate.getDate());

console.log(CurrDate.getDay());


// How to set individual date

console.log(currDate.setFull(2023));//1679826565932
// the setFullYear() method can optionally set month and day

console.log(CurrDate.setFullYear(2023,2,26));//1679826565932

console.log(CurrDate.setMonth(10));//1679826565932

console.log(CurrDate.setDate(5));//1679826565932

console.log(CurrDate.toLocaleString());


// Time Methods 

const curTime = new Date();

// how to get the indiviusal Time

console.log(curTime.getTime());// the getTime() method returns the number of miliseconds since jan 1 , 1970

console.log(curTime.getHours()); // the getHours() method returns the hours of a date as a number (0-23)

console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());


// how to set indivisual Time.

//  same as we see how to set indivisual date and  it retuns milisecond value in date  and time methods


new Date().toLocaleTimeString();// 11:18:48 AM , we get only time
new Date().toLocaleDateString();// we will get only date
new Date().toLocaleString();// we get both date and time
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Math Object in js

console.log(Math.PI)

let num8 = 10.2565;
console.log(Math.round(num));// 10

console.log(Math.round(10.542));//11

console.log(Math.pow(2,3));// 8
console.log(2**3); // 8

console.log(Math.sqrt(4));//2

console.log(Math.abs(-55));// Math.abs(X) returns absolute (positive) value of X , in simple it retuns the positives value of the number

console.log(Math.abs(2-6)); // 2 


//Math.ceil()

console.log(Math.ceil(4.51));//5
console.log(Math.round(4.51));//5
console.log(Math.ceil(99.01));//100 in 99 any value after point gives 100
console.log(Math.round(99.01));//99


// Math.floor()

console.log(Math.floor(4.7));//4
console.log(Math.floor(9.1));//9 
console.log(Math.floor(9.9));//9
console.log(Math.floor(-9.2));//-10
console.log(Math.floor(-100.2));//-101

// min() , max()


console.log(Math.min(100,200,1,2))//1
console.log(Math.max(100,200,1,2))//200


// Math.random()

console.log(Math.random());// gives a value in decimal b/w 0 to 1

console.log(Math.random()*10); // give a value in decimal b/w 0 to 10

console.log(Math.floor(Math.random()*10)); // give a value not in decimal b/w 0 to 9


//Math.trunc()

console.log(Math.trunc(4.6));//4
console.log(Math.trunc(-99.1));//-99



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// window has Dom , Bom and JavaScript 

// Bom in js , bom has Navigator , screen , location , frames , history , XML HttpRequest 

alert(location.href);
if(confirm("want to visit youtube")){
           location.href='https://www.youtube.com';
}

// Dom in js , it has only Doument
// html ke saath agar koi bhi activity perfrom karna h to Document property use krte hh.....
// document has HTML


const Color = document.getElementsByClassName("child-two"); // this is the part of domNavigation.html

// how to search the elements and the references 
// we will see in the new  file , --------------look search.html---------------------


////////////////////// Events in javaScript ////////////////////////////////////////////////////////////////

// Section 1  // the code of this section is on Events/eventsTypes.html
//  There are 4 ways to write events in JavaScript

// 1. using  Inline events alert();
// 2. by calling a fuction (we already seen and most common way of writing)
// 3. using Inline events (HTML onclick="" property and element.onclick)
// 4. using Events Listeners (addEventListner and IE's attachEvent)



// Section 2 // the code of this section is on Events/eventobj.html
// Event object is the parent object of the event object.
// For example
// MouseEvent , focusEvent , KeyboardEvent etc.



// section 3  // MouseEvent in javaScript  / the code is in Mousedownup.html
// The MouseEvent Object , Events that accur when the mouse interacts with the HTML
//document belongs to the MouseEvent object 



// section 4 , KeyboardEvent in js ,the code is in KeyPress.html
//Events that occur when user presses a key on the keyboard
// belongs to the keyboradEvent Object.

// section 5 , InputEvents in js  // the code is in onChange.html
// the onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes , the onchange event occurs when the checked state is changed


////////////////////////////////////////////////////////////////////////////////////////////////////////////






// Timing Based Events in js

// 1. setTimeout() // code is in index.html
// 2. clearTimeout() // code is in clearTimeOut.html
// 3. setInterval()// code is in setInterval.html
// 4. clearInterval() // the code is in clearInterval.html







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// OOP's in JavaScript , object oriented js

// In This we will learn "what is Object Literals".
// and what is "this Objects".

// 1. what is object literals.

// Object literal is simply a key:value pair data structure storing variables and functions together in one container,
// we can refer this as an objects.


// 1st way

let bioData = {
    myName : "Tushar Kumar",// its a variable
    myAge : 18,// variable
    getData : function () {
        console.log(`My Name is ${bioData.myName} and My Age is ${myAge.myAge}`);
    }

}

// console.log(bioData.myName);
bioData.getData();



// 2nd way , no need to write functions as well after es6

let bioDataa = {
    myName : "Tushar Kumar",// its a variable
    myAge : 18,// variable
    getData () {
        console.log(`My Name is ${bioData.myName} and My Age is ${myAge.myAge}`);
    }

}


// what if we want object as a value inside an object


let bioDataaq = {
    myName : {
       realName :"Tushar Kumar Singh",
       age : 20

    },
    myAge : 18,// variable
    getData () {
        console.log(`My Name is ${bioData.myName} and My Age is ${myAge.myAge}`);
    }

}

console.log(bioDataaaq.myName.realName);

// 2 what is this Object

// The defination of "this" object is that it contain the current context

// this object can have different values depending on where it is placed

// For Example 1
// console.log(this)  //window will we the current context
 console .log(this.alert('hello world'));
// it refers to the current context and that is window global object


/* ex 2
 function myname (){
    console.log(this) // window will we the current context
}
myname();
*/


// example 3

var MyNAme = "Tushar" // this is global object

function MyNAMWW(){
    console.log(this.MyNAme) 
}
MyNAMWW();

// ex 4

const obj = {

    MyAge:18,
    myName(){
        // console.log(this); //now this doest no represent window , now the current context is obj
        console.log(this.MyAge)// we will get 18
    }
}

obj.myName();


// Example 5 ,, this object will not work with arrow function

const Obj = {
myAAge:18,
MYname : ()=>{
    console.log(this);// in arrow func , now this represents window
}
}
obj.MYname();



// For Example 6 ,

let BIOdata = {
    myNameee :{
     RealName : "tushar",
     Age :18   
    },

    RealAge : 19,
    getDATA (){// you can understand by that this a BIOdata
        console.log(`My name is ${this.myName.RealName} and my name is ${this.RealAge}`);// we will get the data

    }

}
BIOdata.getDATA();



////////////////////////////////ADVANCED JAVASCRIPT /////////////////////////////////////////////////////////

// 1. The Event propagation   // first read the data given below and then see the source code which is in Avanced js / index.html




// what is Event Bubbbling ?
// ----> with Event Bubbling, the event is first captured and handled by the innermost element
// and then propagated to outer elements .

// Event Bubbling is from buttom to top , if nothing is mentioned then by default its event bubbling





// what is Event Capturing
// ----> with Event Capturing , the event is first captured by the outmost element
// and propagated to the inner elements 




// event captureing --> its from top to buttom


// 2. Higer Order function
// function which takes another function as an argument is called HOF
//wo function go dusre function ko as a argument accept krta hai usse HOF bolte h...

// 3. Callback Function
// funcTion which get passed as an argument to another function is called CBF
// Jis bhi function ko hum kisi or function ke under as an arguments passed krte hai then usko hum Callback function bolte hh



// we need to create a calculator

const add = (a,b)=>{
    return a+b;
}
// console.log(add(5,2)); // not the wright way in callback function 

const sub = (a,b)=>{
    return a-b;

}                                           // in this higher order and callback func is used
const mult = (a,b)=>{
    return a*b;
}

// now see carefully 

const calculator = (num1,num2,operator) =>{ // here in  operator   add , sub , mult is passsed which is a function
    return operator(num1,num2);
}

console.log(calculator(5,2,add)); // here 5 is num1 , 2 is num 2  and add (function) is operator
console.log(calculator(5,2,sub))

// calclutor function is HOF it accets another func as an argument 
// and add , sub ,mult is CBF as its passed in a func as an arugement  , ye dusre func ke under pass hue h





//////////////////////4. How js works and Asynchronous js ///////////////////////////////////////////////

// there are many topic in this,

// 1. Hosting in js
// we have creation and execution phase.
// Hosting in js is a mechanism where variables and fuctions declaration are moved to the top of their scope before the code execute.

// For Example 
console.log(mynamee);// the result will be undifined
var mynamee; 
mynamee ='tushar';

// How it will work in creation phase

// 1: var mynamee = undifeined;
// 2: console.log(mynamee);
// 3: mynamee = "tushar";



// In ES2015 (a.k.a ES6) , hoisting is avoided by using the let keyword instead of var .





// 2. what is scope chain and Lexical Scoping in js..

// The scope chain is used to resolve the value of variable names in JS.

// scope chain is lexically defined , which means that we can see what the scope chain will be by looking at the code, const PI = 3.14

//At the top , we have Global Scope  which is the Window object in the browser.

//Lexical Scoping means Now , the inner function can get access to their parent functions Variables But the vice-versa is not true.




// For example

let a = "Hello Guys"; // Global scope

const first =()=>{
    let b = "how are you";

    const second = () =>{
        let c = "I am Fine"
        console.log(a+b+c)// we will get the output
    }
    second();
    console.log(a+b+c);// we cant use c ..
}
first();

// here we cant can acess the inner func from outer func in lexical scope.



//3. what is Closures in Javascript

// A closure is the combination of a function bundled together (enclosed) with refrences to its surrondings state (the lexical environment)

// In other words , a closure gives you access to an outer functions scope from an inner function.

// In javascript , closures are created every time a function is created , at function creation time.

// For Example ,

const outerFun = (a) => {
    let b= 10;
    const innerFun = () => {
        let sum = a + b; 
        console.log(`the sum of the two numbers is ${sum}`);// we will get the output
    }
    innerFun();
}
outerFun(5);
// it is same as lexical scoping 




// 4. Synchronous JavaScript ...

// see very carefully

// supose we have 2 works 
// work 1 = 10 min 
                                 // in this jab tak pehla kaam ktm nhi ho gata dusra kaam nhi kr skte 
                                        // 1 work at a time 
                               // work1 will execute then its turn for work2 .....
// work 2 = 5sec 



const fun2 = () => {
    console.log("function 2 is callled");
}

const fun1 = () => {
    console.log("function 1 is called");

    fun2();
    console.log("function 1 is called again");
}

fun1();

 /* the output will be
 function 1 is called
 function 2 is callled
 function 1 is called again

*/

// ASynchronous JavaScript ...

//  work1 = 10min
                   // pehle 5sec vala kaam hoga or 10 min vla kaam hote rhe ga side by side
                   // sb kaam ek satth hoga
//  work2 = 5sec 


const Fun2 = () => {
    setTimeout(()=>{
         console.log('function 2 is called');
    },2000);
}
const Fun1 = () =>{
    console.log("function 1 is called");
    Fun2();
    console.log("function 1 is called again");
}

Fun1();

// // The output will be                   
// function 1 is called                     
//  function 1 is called again                    // asyncchronus kisi ke liye nhi ruke ga 
//function 2 is called




/// 5. Curring in js its a part of advanced js

// curring is a technique of evalauting functions with multiplearguments ,sequence of function with single argument

// function sum (num1){
//     //   console.log(num1)// 5
//      return function(num2){ //anonoymus function
//         // console.log(num1,num2);// 5 3
        
//         return function (num3) {
//             console.log(num1,num2,num3)// 5 3 8
//             console.log(num1+num2+num3) // 16
//         }

//      }

// }
// sum(5)(3)(8);

// In  arrow fuc

const sum = (num1) => (num2)=> (num3) => console.log(num1+num2+num3) ;// 16, one line of code , so this is func curring

sum(5)(3)(8);





//////////// 6. Callback Hell

setTimeout(()=>{
     console.log('1 Work is done');
     setTimeout(()=>{
        console.log('2 Work is done');
        setTimeout(()=>{
            console.log('3 Work is done');
            setTimeout(()=>{
                console.log('4 Work is done');               // a Traingle is formed
                setTimeout(()=>{
                    console.log('5 Work is done');
                    setTimeout(()=>{
                        console.log('6 work is done');
                    },1000);
                },1000);
            },1000);
        },1000);
     },1000);
},1000);
/*
1
 1 Work is done
 2 Work is done
 3 Work is done
 4 Work is done
 5 Work is done
 6 work is done
*/


// 7. Ajax call using XMLHttpRequest , the code is apicall.html

// XMlHttpRequest objects are used to interacts with servers . you can retrive data from a URL 
        // without having to do a full page refresh .
        // XMlHttpRequest is used heavily in AJAX prgramming
        
        // Ajax (Asynchronous Javascript And Xml) is a programming practice of building complex , dynamic webpages using a technology known as XML HttpRequest




// 8. JSON (javascript object notaion)

// JSON.Stringify turns a Javascript object into a Json text and stores that json in a string , see the code below

var my_object = {Key1:'some_text' , Key2:true , key3:5};
var object_as_string = JSON.stringify(my_object);
// console.log(object_as_string); // the output is {"Key1":"some_text","Key2":true,"key3":5} , its convert it in json from 


// JSON.parse turns a string of JSON text into a javasript object ,,see the code below

var JSON_as_Object = JSON.parse(object_as_string);
console.log(JSON_as_Object);//{Key1: 'some_text', Key2: true, key3: 5} , we get output in object 



// 9. PROMISES ,Fetch API , Async-await , Error Handling ///// The code is in Projects/jokes






// **********************************THE END*****************************************************










