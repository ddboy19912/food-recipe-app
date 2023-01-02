import React from 'react';

const RecipesCard = ({ recipe }) => {
  return (
    <div className="border w-44 mb-8 flex flex-col items-center gap-3">
      <img src={recipe.strMealThumb} alt="" className="w-48" />
      <div>{recipe.strMeal}</div>
      <button className="bg-red-300 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded mb-4">
        <a
          href={'https://www.themealdb.com/meal/' + recipe.idMeal}
          target="_blank"
        >
          Recipe
        </a>
      </button>
    </div>
  );
};

export default RecipesCard;
