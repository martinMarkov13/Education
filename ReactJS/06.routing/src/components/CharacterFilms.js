import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const baseUrl = "https://swapi.dev/api";

export const CharacterFilms = () => {
  const { characerId } = useParams();
  const [films, setFilms] = useState([]);

  //fetch something like /people/${characterId}/films from SWAPI but there is no such thing :D

  useEffect(() => {
    fetch(`${baseUrl}/films`)
      .then(res => res.json())
      .then(data => {
        setFilms(data.results);
      });
  }, [characerId]);

  return (
    <>
      <h1>Character films</h1>

      {films.map(x => {
        const id = x.url.split('/').filter(x=>x).pop();
      return <li key={id}> <Link to={`/films/${id}`}> {x.title} </Link></li>})}
      
    </>
  );
};
