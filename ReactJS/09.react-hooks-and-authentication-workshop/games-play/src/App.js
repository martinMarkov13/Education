import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import * as gameService from './services/gameService'

import { AuthContext } from "./contexts/AuthContext";
import * as authService from './services/authService';

import { Catalogue } from "./components/Catalogue/Catalogue";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { GameDetails } from "./components/GameDetails/GameDetails";

function App() {
    const navigate = useNavigate()
    const [games, setGames] = useState([]);
    const [auth, setAuth] = useState({})

    useEffect(()=>{
        gameService.getAll()
        .then(result => {
            setGames(result)
        })
    },[])

    const onCreateGameSubmitHandler = async (data) => {
       const newGame = await gameService.create(data)
       setGames(state => [...state, newGame])
        navigate('/catalogue')
       
    }

    const onLoginSubmit = async (data) => {
      try{
        const result = await authService.login(data)
        setAuth(result)
        navigate('/catalogue')

      }catch(error){
        console.log("There is a problem");
      }
    }

  return (
    <AuthContext.Provider value={{onLoginSubmit}}>
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createGame" element={<CreateGame  onCreateGameSubmitHandler={onCreateGameSubmitHandler}/>} />
          <Route path="/catalogue" element={<Catalogue games={games}/>} />
          <Route path="/catalogue/:gameId" element={<GameDetails/>} />
        </Routes>
      </main>

      <Footer />
    </div>
    </AuthContext.Provider>
  );
}

export default App;
