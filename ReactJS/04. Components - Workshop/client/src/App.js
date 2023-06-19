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

  const onSubmitCreateUser = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
  
    const createdUser = await userService.createUser(data)
    
    setUsers(state =>  [...state, createdUser])

  }

  const onUserDelete = async (userId) => {
    await userService.remove(userId)
    setUsers(state => state.filter(u => u._id !== userId));
  }

  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <SearchBar />

          <UserList 
          users={users} 
          onSubmitCreateUser={onSubmitCreateUser}
          onUserDelete={onUserDelete}
          />

          
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
