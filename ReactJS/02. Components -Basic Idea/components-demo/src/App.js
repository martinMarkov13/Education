import "./App.css";
import MovieList from "./components/MoviesList";

function App() {

    const movies = [
        {title: "Man of steel", year:2000, cast:["Henry Cavil", "Russell Crowe"]},
        {title: "Harry Potter", year:2003, cast: ["Daniel Radcliffe", "Emma Watson"]},
        {title: "Lord of the rings", year:2004, cast: ["Vigo Mortensen", "Orlando Bloom"]},
    ];
  return (
    <div className="App">
        <MovieList movies={movies} />
        <div>AAAAAAAAAAA</div>
    </div>);
}

export default App;
