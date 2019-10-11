import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = 'a867a4c8';
  const APP_KEY = 'd8c0d67b627d24e595e02af17d6df4f3';
const exampleReq = 
  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}
  &app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    getRecipes();
  });

  const getRecipes = async () => {
    const responce = await fetch(exampleReq);
    const data = await responce.json();
    setRecipes(data.hits);
    //console.log(data.hits)
  }

  return(
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
        />
      ))}
    </div>
  )
}
 
export default App;
