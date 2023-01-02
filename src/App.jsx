import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import RecipesCard from './components/RecipesCard';
import SearchBar from './components/SearchBar';

const searchApi = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState();

  const fetchRecipes = async () => {
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div className="">
      <NavBar />
      <Hero handleSubmit={handleSubmit} query={query} setQuery={setQuery} />
      <div className="flex-wrap flex mt-24 gap-7 items-center justify-center">
        {recipes
          ? recipes.map((recipe) => (
              <RecipesCard recipe={recipe} key={recipe.idMeal} />
            ))
          : 'Nothing Here bro'}
      </div>
    </div>
  );
};

export default App;
