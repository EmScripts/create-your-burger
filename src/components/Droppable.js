// src/components/Droppable.js
import React from 'react';
import { useDroppable } from '@dnd-kit/core';

export function Droppable({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    border: isOver ? '2px dashed green' : '2px dashed gray',
    padding: '16px',
    minHeight: '200px',
    backgroundColor: isOver ? 'rgba(0, 255, 0, 0.1)' : 'white',
    borderRadius: '8px',
    position: 'relative',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
