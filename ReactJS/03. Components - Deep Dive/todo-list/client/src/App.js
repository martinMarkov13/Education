import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingContainer from "./components/LoadingContainer";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
      .then((res) => res.json())
      .then((data) => { 
        setTodos(Object.values(data))
      });
  }, []);

  return (
    <div>
      {/* <!-- Navigation header --> */}
      <Header />

      {/* <!-- Main content --> */}
      <main className="main">
        {/* <!-- Section container --> */}
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">
            {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}
            <LoadingContainer/>

            {/* <!-- Todo list table --> */}
            <TodoList todos={todos} />
          </div>
        </section>
      </main>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default App;
