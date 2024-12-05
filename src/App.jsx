import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    // [...todos] -> spread operator
    const updateTodoArray = [
      ...todos,
      { title: document.getElementById("todo-input").value, id: todos.length },
    ];

    setTodos(updateTodoArray);
  }

  function deleteTodo(id) {
    // from todos array this will delete todo with given id
    // newArray
    // setTodos(newArray);
  }

  return (
    <>
      <h1 className="todo-heading">To-do Application</h1>

      <div className="todo-input">
        <input type="text" id="todo-input" />
        <button onClick={() => addTodo()}>Add To do</button>
      </div>
      <div className="todos-container">
        {todos.map((todo) => {
          return (
            <div className="todo" key={todo.id}>
              <p className="todo-title">{todo.title}</p>
              <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
