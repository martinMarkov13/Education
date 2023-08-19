import { useParams, useNavigate, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CharacterFilms } from "./CharacterFilms";
import { Navigation, NavItem } from "./Navigation";

const baseUrl = "https://swapi.dev/api/people";

export const Character = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`${baseUrl}/${characterId}`)
    .then((res) =>res.json())
    .then((data) => {
        setCharacter(data);
      });
  }, [characterId]);

  function onBackButtonClick(){
    navigate('/characters')
  }

  return (
    <>
      <h1>Character Page</h1>
      <h2>{character.name}</h2>
      <button onClick={onBackButtonClick}>Back Button</button>

       <Navigation>
        {/* advanced practice */}
            <NavItem to='films'>Films</NavItem>
            <NavItem to='vehicles'>Vehicles</NavItem>
        {/* regular practice */}
            <li><Link to='starships'>Starships</Link></li>
        </Navigation>

      <Routes>
        <Route path="/films" element={<CharacterFilms/>}> </Route>
        <Route path="/vehicles" element={<CharacterFilms/>}> </Route>
        <Route path="/starships" element={<CharacterFilms/>}> </Route>
      </Routes>
    </>
  );
};
