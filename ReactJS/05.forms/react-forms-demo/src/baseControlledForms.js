import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("Pesho");
  const [creditCard, setCreditCard] = useState("");
  const [occupation, setOccupation] = useState("engineering")
  const [gender, setGender] = useState('male')
  const [bio, setBio] = useState("")

  const [age, setAge] = useState();
  const [hobbies,  setHobbies ] = useState({})

  
  useEffect(() => {
    setTimeout(() => {
      setUsername("Gosho");
    }, 2000);
  }, []);

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onAgeChange = (e) => {
    setAge(Number(e.target.value));
  };

  const onCreditCardChange = (e) => {
    setCreditCard(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(username);
    console.log(age);
    console.log(creditCard);
  };
  
  const onOccupationChange = (e) => {
    setOccupation(e.target.value)
    console.log(e.target.value);
  }

  const onGenderChange = (e) => {
    setGender(e.target.value)
  }

  const onBioChange = (e) => {
    setBio(e.target.value)
  }

  const onHobbiesChange = (e) => {
    console.log(e.target.value);

    setHobbies( state => ({...state, [e.target.value]:e.target.checked}))    
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmitHandler}>
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
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={age ?? ""}
              onChange={onAgeChange}
            />
          </div>
          {age >= 18 && (
            <div>
              <label htmlFor="credit-card">Credit Card</label>
              <input
                type="text"
                name="creditCard"
                id="credit-card"
                value={creditCard}
                onChange={onCreditCardChange}
              />
            </div>
          )}

          <div>
            <label htmlFor="occupation">Occupation</label>
            <select name="occupation" id="occupation" value={occupation} onChange={onOccupationChange}>
              <option value="it">IT</option>
              <option value="medicine">Medicine</option>
              <option value="engineering">Engineering</option>
            </select>
          </div>

          <div>
            <label htmlFor="female">Gender</label>
            <input type="radio" name="gender" id="female"  value="female" onChange={onGenderChange} checked={gender === 'female'}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="male"  value="male" onChange={onGenderChange} checked={gender === 'male'}/>
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" id="bio" cols="30" rows="10" value={bio} onChange={onBioChange}></textarea>
          </div>

          <div>
            <label>Hobbies</label>
            <br />
            <label htmlFor="hiking">Hiking</label>
            <input type="checkbox" name="hobbies"  value="hiking" id="hiking" onChange={onHobbiesChange} checked={hobbies["hiking"] || false}/>
            <label htmlFor="reading">Reading</label>
            <input type="checkbox" name="hobbies"  value="reading" id="reading"  onChange={onHobbiesChange} checked={hobbies["reading"]  || false}/>
            <label htmlFor="sports">Sports</label>
            <input type="checkbox" name="hobbies"  value="sports" id="sports" onChange={onHobbiesChange} checked={hobbies["sports"] || false}/>
            <label htmlFor="gaming">Gaming</label>
            <input type="checkbox" name="hobbies"  value="gaming" id="gaming" onChange={onHobbiesChange} checked={hobbies["gaming"] || false}/>
            <label htmlFor="coding">Coding</label>
            <input type="checkbox" name="hobbies"  value="coding" id="coding" onChange={onHobbiesChange} checked={hobbies["coding"] || false} />
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
