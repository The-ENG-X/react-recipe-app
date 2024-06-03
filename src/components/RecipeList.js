import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";


const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-4">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border p-4">
            <h2 className="text-xl mb-2">{recipe.name}</h2>
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-200 h-200 object-cover mb-2"
            />
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500">
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
