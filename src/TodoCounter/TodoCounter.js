import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/Index';

function TodoCounter() {
  const{
      completedTodos,
      totalTodos,
  } =React.useContext(TodoContext)
  
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };