// src/components/IngredientsList.js
import React from 'react';
import { Draggable } from './Draggable';

const ingredients = [
  { id: 'lettuce', name: 'Lettuce', image: '/images/lettuce.png' },
  { id: 'onion', name: 'Onion', image: '/images/onion.png' },
  { id: 'beef', name: 'Beef', image: '/images/beef.png' },
  { id: 'cheese', name: 'Cheese', image: '/images/cheese.png' },
  { id: 'tomato', name: 'Tomato', image: '/images/tomato.png' },
  { id: 'ketchup', name: 'Ketchup', image: '/images/ketchup.png' },
];

function DraggableIngredient({ ingredient }) {
  return (
    <Draggable id={ingredient.id}>
      <li className="bg-mcdLightGray dark:bg-mcdGray rounded shadow cursor-pointer flex flex-col items-center">
        <img src={ingredient.image} alt={ingredient.name} className="h-20 w-20 object-contain" />
        <span className="text-mcdDarkGray dark:text-mcdLightGray">{ingredient.name}</span>
      </li>
    </Draggable>
  );
}

export default function IngredientsList({ onDragStart }) {
  return (
    <div className="w-1/3 bg-mcdLightGray dark:bg-mcdDarkGray p-4 rounded">
      <h2 className="text-xl font-semibold mb-2 text-mcdDarkGray dark:text-mcdLightGray">Ingredients</h2>
      <ul className="space-y-2">
        {ingredients.map((ingredient) => (
          <DraggableIngredient key={ingredient.id} ingredient={ingredient} />
        ))}
      </ul>
    </div>
  );
}
