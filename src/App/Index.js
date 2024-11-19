import React from 'react';
import {UiApp } from './UiApp';
import { TodoProvider } from '../TodoContext/Index';



function App() {
  
  
  return (
    <TodoProvider>
      <UiApp/>
    </TodoProvider>
  );
}

export default App;