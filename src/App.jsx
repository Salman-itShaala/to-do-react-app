import { useState } from "react";
import "./App.css";
import TodoComponent from "./TodoComponent";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  function addTodo() {
    // [...todos] -> spread operator
    const updateTodoArray = [...todos, { title: todoTitle, id: todos.length }];

    setTodos(updateTodoArray);
  }

  function deleteTodo(id) {
    // delete todo with given id
    let updatedTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== id) {
        updatedTodos.push(todos[i]);
      }
    }
    // re-render
    setTodos(updatedTodos);
  }

  return (
    <>
      <h1 className="todo-heading">To-do Application</h1>

      <div className="todo-input">
        <input
          onChange={(event) => setTodoTitle(event.target.value)}
          type="text"
          id="todo-input"
        />
        <button onClick={() => addTodo()}>Add To do</button>
      </div>
      <div className="todos-container">
        {todos.map((todo) => {
          return (
            <TodoComponent
              key={todo.id}
              todoTitle={todo.title}
              todoId={todo.id}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
