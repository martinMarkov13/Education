import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("Pesho");

  useEffect(() => {
    setTimeout(() => {
      setUsername("Gosho");
    }, 2000);
  }, []);

  const onUsernameChange = (e) => {
    setUsername(e.target.value)
  };

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={onUsernameChange}
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
