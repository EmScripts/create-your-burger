// src/components/IngredientsList.js
import React from 'react';
import { Draggable } from './Draggable';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ingredients = [
  { name: 'Lettuce', image: '/images/lettuce.png' },
  { name: 'Onion', image: '/images/onion.png' },
  { name: 'Beef', image: '/images/beef.png' },
  { name: 'Cheese', image: '/images/cheese.png' },
  { name: 'Tomato', image: '/images/tomato.png' },
  { name: 'Ketchup', image: '/images/ketchup.png' },
];

function DraggableIngredient({ ingredient }) {
  return (
    <Draggable id={ingredient.name} data={ingredient}>
      <Card variant="outlined" sx={{ cursor: 'pointer' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={ingredient.image} alt={ingredient.name} style={{ height: '80px', width: '80px', objectFit: 'contain' }} />
          <Typography variant="body1" color="textPrimary">
            {ingredient.name}
          </Typography>
        </CardContent>
      </Card>
    </Draggable>
  );
}

export default function IngredientsList() {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 1 }}>
      <Typography variant="h5" component="div" gutterBottom>
        Ingredients
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {ingredients.map((ingredient) => (
          <DraggableIngredient key={ingredient.name} ingredient={ingredient} />
        ))}
      </Box>
    </Box>
  );
}
