import React, {useEffect, useState} from 'react';
import './App.css';
import { async } from 'q';
import Recipe from './Recipe';
const App = () => {

  const APP_ID = "994d68d2";
  const APP_KEY = "31a808ea399037d30bec968f94a2d823";

  const [recipes, setRecioe] = useState([]);
  const [search, setSearch] = useState("");
  const [quary, setQuary] = useState("chicken")

  useEffect(() => {
    getRecipes();
  }, [quary])

  const getRecipes = async () =>{
    const response = await fetch(
    `https://api.edamam.com/search?q=${quary}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecioe(data.hits);
    
  }

  const upDateSearch = e =>{
    setSearch(e.target.value);    
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuary(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input placeholder="search " type="text" className="search-bar" value={search} onChange={upDateSearch} />
        <button type="submit" className="search-button">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        tittle={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
