import React from 'react';

const Recipe = ({tittle, calories, image, ingredients}) => {
    return (
<div className="item">
            <h1>{tittle}</h1>
            <ul> 
                {ingredients.map(ingradient => (
                    <li>{ingradient.text}</li>
                ))}
            </ul>
            <p>{calories}</p>
            <img src={image} />
        </div>
        
    );
};

export default Recipe;