import React from 'react';
import './RecipeCard.scss'

const RecipeCard = (props) =>{

    return <div className='recipecard'>
        <img src={`http://localhost:3001${props.img}`} className='recipecard__img'/>
        <h3>{props.title}</h3>
    </div>
}

export default RecipeCard;