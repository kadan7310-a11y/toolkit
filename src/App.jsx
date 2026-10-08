import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./reducers/todoslice";
import "./App.css";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    dispatch(addTodo(todo));
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="page">
      <div className="card">
        <h1 className="title">Todo List</h1>

        <form className="todo-form" onSubmit={handleAddTodo}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a todo..."
          />
          <button type="submit" className="btn btn-add">
            Add
          </button>
        </form>

        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty">No todos yet. Add one above!</p>
          ) : (
            todos.map((todoItem) => (
              <div key={todoItem.id} className="todo-item">
                <span>{todoItem.text}</span>
                <button
                  className="btn btn-delete"
                  onClick={() => handleDeleteTodo(todoItem.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;