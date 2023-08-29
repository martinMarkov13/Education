import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { ToDoList } from "./components/ToDoList";
import { AddTodoModal } from "./components/AddTodoModal";

const baseUrl = "http://localhost:3030/jsonstore/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [showAddTodo, setShowAddTodo] = useState(false);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((result) => {
        setTodos(Object.values(result));
      });
  }, []);

  const onTodoAdd = async (values) => {
    if(values.text !== ""){
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result = await response.json();
      setShowAddTodo(false);
      setTodos((state) => [...state, result]);
    }
  };

  function onTodoAddClick() {
    setShowAddTodo(true);
  }

  function onTodoAddClose() {
    setShowAddTodo(false);
  }

  async function onTodoDeleteClick(todoId){
    await fetch(`${baseUrl}/${todoId}`, {method: 'DELETE'})
    setTodos( state => state.filter( x => x._id !== todoId))
  }

  return (
    <div>
      <Header />

      <ToDoList todos={todos} onTodoAddClick={onTodoAddClick} onTodoDeleteClick={onTodoDeleteClick}/>
      <AddTodoModal
        show={showAddTodo}
        onTodoAdd={onTodoAdd}
        onTodoAddClose={onTodoAddClose}
      />
    </div>
  );
}

export default App;
