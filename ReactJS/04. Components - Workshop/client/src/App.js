import * as userService from "./services/userService";
import { useEffect, useState } from "react";

import { Footer } from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import "./App.css";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService
      .getAll()
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => {
        console.log(`Error` + err);
      });
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <SearchBar />

          <UserList users={users} />

          <button className="btn-add btn">Add new user</button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
