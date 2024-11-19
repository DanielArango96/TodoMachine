import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodosLoading } from '../TodosLoading/Index';
import { TodosError } from '../TodosError/index';
import { EmptyTodos } from '../EmptyTodos/Index';
import { TodoForm } from '../TodoForm/Index';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from '../TodoContext/Index';
import React from 'react';
import { Modal } from '../Modal/Index';


function UiApp({
  
}) {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    }=React.useContext(TodoContext)
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>

  
        {
            <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {error && <TodosError/>} 
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}
    
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
            </TodoList>
        }
    
      
      
    <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { UiApp };