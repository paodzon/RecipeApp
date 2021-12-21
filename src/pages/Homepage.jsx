import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RecipeCard from '../components/RecipeCard';
import './Homepage.scss';

function Homepage() {
    const recipes = useSelector((state) => state?.recipesData.recipes);

    const renderRecipes = () => {
      if (recipes) {
        return recipes.map((recipe) => {
          return (
            <Link to={`/recipe/${recipe.uuid}`}>
              <RecipeCard
                key={recipe.uuid}
                title={recipe.title}
                img={recipe.images.full}
              />
            </Link>
          );
        });
      }
    };

    return (
        <div className='homepage'>
            <h1>Recipe List</h1>
            <div className='homepage__recipes'>
            {renderRecipes()}
            </div>
            
        </div>
    )
}

export default Homepage
