'use client';

// src/app/page.js
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import IngredientsList from '../components/IngredientsList';
import RecipeForm from '../components/RecipeForm';
import DarkModeToggle from '../components/DarkModeToggle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Define ingredients here
const ingredients = [
  { id: 'lettuce', name: 'Lettuce', image: '/images/lettuce.png' },
  { id: 'onion', name: 'Onion', image: '/images/onion.png' },
  { id: 'beef', name: 'Beef', image: '/images/beef.png' },
  { id: 'cheese', name: 'Cheese', image: '/images/cheese.png' },
  { id: 'tomato', name: 'Tomato', image: '/images/tomato.png' },
  { id: 'ketchup', name: 'Ketchup', image: '/images/ketchup.png' },
];

const MAX_ITEMS = 10;

export default function Page() {
  const [droppedIngredients, setDroppedIngredients] = useState([]);

  const handleDrop = (event) => {
    const droppedId = event.active.id; // Get the ID of the dropped item
    const ingredient = ingredients.find(item => item.id === droppedId);
  
    if (ingredient && droppedIngredients.length < MAX_ITEMS && !droppedIngredients.some(item => item.id === droppedId)) {
      setDroppedIngredients([...droppedIngredients, ingredient]);
    }
  };

  console.log('droppedIngredients', droppedIngredients);

  return (
    <DndContext onDragEnd={handleDrop}>
      <div className="container mx-auto p-4 bg-mcdLightGray dark:bg-mcdDarkBg min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-mcdRed dark:text-mcdYellow">Create Your Burger</h1>
          <DarkModeToggle />
        </div>
        <div className="flex space-x-4">
          <IngredientsList />
          <Box sx={{ flex: 1 }}>
            <RecipeForm droppedIngredients={droppedIngredients} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">Preview</Typography>
            <Box
              sx={{
                border: '1px solid gray',
                borderRadius: 1,
                p: 2,
                minHeight: '400px',
                bgcolor: 'background.paper',
              }}
            >
              <RecipeForm droppedIngredients={droppedIngredients} />
            </Box>
          </Box>
        </div>
      </div>
    </DndContext>
  );
}
