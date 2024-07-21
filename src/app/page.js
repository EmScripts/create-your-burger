'use client';

import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import IngredientsList from '../components/IngredientsList';
import RecipeForm from '../components/RecipeForm';
import DarkModeToggle from '../components/DarkModeToggle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'

export default function Page() {
  const [droppedIngredients, setDroppedIngredients] = useState([]);

  function handleDragEnd(event) {
    const { over, active } = event;
    if (over && over.id === 'recipe-form') {
      setDroppedIngredients((prevIngredients) => [
        ...prevIngredients,
        { id: active.id, name: active.data.current.name, image: active.data.current.image },
      ]);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box sx={{ p: 4, bgcolor: 'background.default', minHeight: '100vh' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
            Create Your Burger
          </Typography>
          <DarkModeToggle />
        </Box>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Grid container>
            <Grid item xs={6}>
            <IngredientsList />
            </Grid>
            <Grid item xs={6}>
            <RecipeForm droppedIngredients={droppedIngredients} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </DndContext>
  );
}
