import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { gameServiceFactory } from './services/gameService'
import { AuthProvider } from "./contexts/AuthContext";

import { Catalogue } from "./components/Catalogue/Catalogue";
import { CreateGame } from "./components/CreateGame/CreateGame";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { GameDetails } from "./components/GameDetails/GameDetails";
import { Logout } from "./components/Logout/Logout";
import { EditGame } from "./components/EditGame/EditGame";
// import { withAuth } from "./hoc/withAuth"; HOC method

function App() {
    const navigate = useNavigate()
    const [games, setGames] = useState([]);
    const gameService = gameServiceFactory() // auth.accessToken

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
      
    const onGameEditSubmit = async (values) => {
      const result = await gameService.edit(values._id, values);

      setGames(state => state.map(x => x._id === values._id ? result : x))

      navigate(`/catalogue/${values._id}`);
  }

  // const EnhancedLogin = withAuth(Login) - HOC method

    return (
      <AuthProvider>
        <div id="box">  
          <Header />

            <main id="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/createGame" element={<CreateGame  onCreateGameSubmitHandler={onCreateGameSubmitHandler}/>} />
                <Route path="/catalogue" element={<Catalogue games={games}/>} />
                <Route path="/catalogue/:gameId" element={<GameDetails/>} />
                <Route path='/catalogue/:gameId/edit' element={<EditGame onGameEditSubmit={onGameEditSubmit} />} />
              </Routes>
            </main>

      <Footer />
    </div>
    </AuthProvider>
  );
}

export default App;
