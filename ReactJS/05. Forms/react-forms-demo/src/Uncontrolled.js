import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("Pesho");

  useEffect(()=>{
    setTimeout(() => {
      setUsername('Gosho')
    }, 2000);
  })

  const onNameChange = (e) =>{
    console.log('change');
  }

  // const onSubmitClick = (e) =>{
  //   e.preventDefault()
  //   console.log(e.target.parentElement.previousSibling.children[1].value);
  // }

  const onSubmit= (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    // const data = Object.fromEntries(formData)
    const username = formData.get('username')

    console.log(username);

  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              defaultValue={username}
              onChange={onNameChange}
            />
          </div>

          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
