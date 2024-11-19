import './TodoList.css'

function TodoList ({children}){
    return(
      <div className="TodoList">
        <ul>
        {children}
    </ul>
      </div>
     
    );
  }
  export {TodoList};