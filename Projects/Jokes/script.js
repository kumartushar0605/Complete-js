
// PROMISES
// in Promices there is two conditons succ or fail , either hoga ya phir nhi hoga

// fetch("https://restcountries.eu/rest/v2/name/nepal");
// either api ka data mile ga ya phir nhi milega
// karan nhi milne ka ya to internet error ya to server error
// or agar milega to sab kuch sahi hh....


// fetch is a method that js provide  us to call api , whitout using XMLHttp request

// fetch()
// fullfilled
// reject
// (then)is used in PROMISES

const jokes = document.querySelector('#joke');
const jokesBtn = document.querySelector("#jokeBtn");



// const generateJokes = () => {



//     const setHeader =  {
//         headers : {
//             Accept : "application/json"    // to make the html in Json of the api that we get
//         }
//     }

// fetch('https://icanhazdadjoke.com',setHeader)
// .then((res)=> // yaha res html format me milta h to usko json format me badalna hota h, so we res.JSON()
//     res.json() // in fat arrow func no need to write the curly backets or the semicolons
// ) 
// .then((data)=>{
//     jokes.innerHTML=data.joke;
// })
// .catch((error)=>{                // mil gaya to thik nhi mila to catch krwna hoga # error handling
//     console.log(error);
// })
// }









// Now we have seen promises , now its turn of async await.....

// async function GenrateJokes () {

// }

const generateJokes =  async () => {


try{
    
    const setHeader =  {
        headers : {
            Accept : "application/json"    // to make the html in Json of the api that we get
        }
    }

 const res =  await fetch('https://icanhazdadjoke.com',setHeader); //ye return kr rha h promise to hamlog wait kr rhe h... , by using await
 const data = await res.json(); // yaha res html format me milta h to usko json format me badalna hota h, so we res.JSON()
 
  jokes.innerHTML = data.joke;
}catch(error){
console.log(error)
}
}





jokesBtn.addEventListener('click',generateJokes);



