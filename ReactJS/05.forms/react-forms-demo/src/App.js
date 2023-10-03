import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const ref = useRef()
  const [hobbies,  setHobbies ] = useState({})
  const [values, setValues] = useState({
    username: 'Pesho',
    creditCard: "",
    occupation: 'engineering',
    gender: 'male',
    bio: "",
    age: "",
  })

  useEffect(()=>{
    ref.current.value = values.username;
  }, [values.username])

  const onChangeHandler = (e) => {
    console.log(ref.current.value);

    setValues(state => ({...state, [e.target.name]: e.target.value}))
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

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
              value={values.username}
              onChange={onChangeHandler}
            />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={values.age}
              onChange={onChangeHandler}
            />
          </div>
          {Number(values.age) >= 18 && (
            <div>
              <label htmlFor="credit-card">Credit Card</label>
              <input
                type="text"
                name="creditCard"
                id="credit-card"
                value={values.creditCard}
                onChange={onChangeHandler}
              />
            </div>
          )}

          <div>
            <label htmlFor="occupation">Occupation</label>
            <select name="occupation" id="occupation" value={values.occupation} onChange={onChangeHandler}>
              <option value="it">IT</option>
              <option value="medicine">Medicine</option>
              <option value="engineering">Engineering</option>
            </select>
          </div>

          <div>
            <label htmlFor="female">Gender</label>
            <input type="radio" name="gender" id="female"  value="female" onChange={onChangeHandler} checked={values.gender === 'female'}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="male"  value="male" onChange={onChangeHandler} checked={values.gender === 'male'}/>
          </div>

          <div>
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" id="bio" cols="30" rows="10" value={values.bio} onChange={onChangeHandler}></textarea>
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
            <label htmlFor="uncontrolled">Uncontrolled</label>
            <input type="text" name="uncontrolled" id="uncontrolled" ref={ref} />
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
