import * as userService from "./services/userService";
import { useEffect, useState } from "react";

import { Footer } from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import "./App.css";
import UserList from "./components/UserList";

function App() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
  });
  const [users, setUsers] = useState([]);

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
  });

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
    // stop automatic form submit
    e.preventDefault();
    // take form data from DOM tree
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    // Send ajax request to server
    const createdUser = await userService.createUser(data);
    //If succesfull add new user to the state
    setUsers((state) => [...state, createdUser]);
  };

  const onUserUpdateSubmit = async (e) => {
    e.preventDefault();
  };

  const onUserDelete = async (userId) => {
    await userService.remove(userId);
    setUsers((state) => state.filter((u) => u._id !== userId));
  };

  const onFormChange = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const validateForm = (e) => {
    const value = e.target.value;
    const errors = {}

    if(e.target.name === "firstName" && (value.length <3 || value.length > 20)){
      errors.firstName = 'First name should be between 3 and 20 characters!';
   }

    if(e.target.name === "lastName" && (value.length <3 || value.length > 20)){
      errors.lastName = 'Last name should be between 3 and 20 characters!'
      }

    setFormErrors(errors)
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
            onUserUpdateSubmit={onUserUpdateSubmit}
            onUserDelete={onUserDelete}
            formValues={formValues}
            onFormChange={onFormChange}
            formErrors={formErrors}
            validateForm = {validateForm}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
