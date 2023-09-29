import React from 'react';
import './style.css';

const SaladCard = (props) => {
    const { name, weight, ingredients, sauce, dietType, isSpicy, expired } = props.salad;
    return (
        <article className='card-wrapper'>
            <h1>{name}</h1>
            <p>Weight: {weight}</p>
            <p>Ingredients: </p>
            <ul>
                {ingredients.map((ingredient) => <li key={ingredient._id}>{ingredient.name}</li>)}
            </ul>
            <p>Sauce: {sauce}</p>
            <p>Diet type: {dietType}</p>
            <p>{isSpicy ? 'Spicy' : 'Not spicy'}</p>
            <p>Expired: {expired}</p>
        </article>
    );
}

export default SaladCard;
