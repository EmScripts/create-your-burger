// src/components/RecipeForm.js
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import Box from '@mui/material/Box';
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
        position: 'relative',
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
          <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={ingredient.image} alt={ingredient.name} style={{ height: 56, width: 56, objectFit: 'contain' }} />
            <Typography variant="body1" sx={{ ml: 2 }}>
              {ingredient.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
