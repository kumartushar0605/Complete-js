const searchbtn = document.querySelector('#search-btn');
// const searchbtn =document.getElementById('search-btn')
const mealList = document.getElementById('meal');
const mealDetailsContent= document.querySelector('.meal-details-content');
const recipeCloseBtn = document.querySelector('#recipe-close-btn');





const getMealList = () => {
    let searchInputText = document.getElementById('search-input').value;
    console.log(searchInputText);

    // Now we are going to use promises

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`)
    .then((res)=>
         res.json()
    )
    .then((data)=>{
      console.log(data.meals)  
      let html="";
      if(data.meals){
        data.meals.map(i => {
          html += `
              <div class="meal-item" data-id="${i.idMeal}">
              <div class="meal-img">
                <img src="${i.strMealThumb}" alt="food">
              </div>
              <div class="meal-name">
                 <h3>${i.strMeal}</h3>
                 <a href="#" class="recipe-btn">Get Recipe</a>
              </div>
              </div>`
          
        });
      }else{
        html="No results found";
      }
      mealList.innerHTML=html;
    });
}



searchbtn.addEventListener('click',getMealList);






///////////////////////////////////////////////////////////////////////////////////////////////////////////////


const getMealRecipe = () =>{
  console.log(event.target);// we get the code of the particular item that we clicked
  if(event.target){

    let mealItems = event.target.parentElement.parentElement;
      console.log(mealItems);// we will get the parentElemnt like this <div class="meal-item" dataset.id= here we get the id of the particular meal we get>
      // www.themealdb.com/api/json/v1/1/lookup.php?i=52772  ,ye api kolo vaha dataset-id hoga iska go ki h 52772,,,,,,52773 its for another meal detail

      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItems.dataset.id}`)// meal details api
      .then((res)=>
        res.json()
      ).then((data)=>mealRecipeModal(data.meals)
        // console.log(data.meals)

      
      )
  }
  
}

const mealRecipeModal = (i) =>{
  i = i[0]
  let html= ` <h2 class="recipe-title">${i.strMeal}</h2>
  <p class="recipe-category">${i.strCategory}</p>
  <div class="recipe-instructions">
      <h3>Instruction : </h3>
      <p>${i.strInstructions}</p>
  </div>
  <div class="recipe-meal-img">
      <img src="${i.strMealThumb}" alt="food" >
  </div>
  <div class="recipe-link">
      <a href="${i.strYoutube}" target="_blank">Watch Video</a>
  </div>`
  mealDetailsContent.innerHTML=html;
  
 mealDetailsContent.parentElement.classList.add('showRecipe')// to show the content
 


}
mealList.addEventListener('click',getMealRecipe);





recipeCloseBtn.addEventListener('click',()=>{
  
  mealDetailsContent.parentElement.classList.remove('showRecipe')// to show the content

});






















