import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";


const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl mb-4">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-200 h-200 object-cover mb-4"
      />
      <h3 className="text-xl mb-2">Ingredients</h3>
      <ul className="list-disc pl-5 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="text-xl mb-2">Steps</h3>
      <ol className="list-decimal pl-5">
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
