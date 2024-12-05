function TodoComponent({ todoTitle, todoId, deleteTodo }) {
  return (
    <div className="todo">
      <p className="todo-title">{todoTitle}</p>
      <button onClick={() => deleteTodo(todoId)}>Delete Todo</button>
    </div>
  );
}

export default TodoComponent;
