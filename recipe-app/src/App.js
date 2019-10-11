import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = 'a867a4c8';
  const APP_KEY = 'd8c0d67b627d24e595e02af17d6df4f3';


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const exampleReq = 
  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}
  &app_key=${APP_KEY}`;
  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const responce = await fetch(exampleReq);
    const data = await responce.json();
    setRecipes(data.hits);
    console.log(data.hits[0].recipe.ingredients)
  }

  const updateSearch = e => {
    setSearch(e.target.value);

  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe =>(
        <Recipe key={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}
 
export default App;
