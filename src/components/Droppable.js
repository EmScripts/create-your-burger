// src/components/Droppable.js
import { useDroppable } from '@dnd-kit/core';

export function Droppable({ id, children }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="p-4 bg-mcdYellow dark:bg-mcdDarkGray rounded shadow min-h-[400px] flex flex-col items-center space-y-4">
      {children}
    </div>
  );
}
