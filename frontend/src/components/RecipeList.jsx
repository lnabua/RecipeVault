import React, { useEffect, useState } from 'react'
import { getRecipes } from '../api/recipeApi';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await getRecipes();
                setRecipes(response.data);
            } catch (error) {
                setError("Error in fetching recipes");
            }
        };
        fetchRecipes();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

  return (
    <div>
        <h1>Recipe List</h1>
        <ul>
            {recipes.map((recipe) => (
                <li key={recipe._id}>{recipe.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default RecipeList