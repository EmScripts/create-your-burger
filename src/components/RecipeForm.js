// src/components/RecipeForm.js
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function RecipeForm({ droppedIngredients }) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'recipe-form',
  });

  return (
    <Box
      ref={setNodeRef}
      sx={{
        border: isOver ? '2px dashed green' : '2px dashed gray',
        p: 2,
        minHeight: '200px',
        bgcolor: isOver ? 'rgba(0, 255, 0, 0.1)' : 'background.paper',
        borderRadius: 1,
      }}
    >
      <Typography variant="h5" component="div" gutterBottom>
        Recipe Form
      </Typography>
      <Typography variant="body1" component="div" gutterBottom>
        Drop ingredients here to add them to your recipe.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {droppedIngredients.map((ingredient, index) => (
          <img
            key={index}
            src={ingredient.image}
            alt={ingredient.name}
            style={{ height: '200px', width: '200px', objectFit: 'contain' }}
          />
        ))}
      </Box>
    </Box>
  );
}
