import "./App.css";
import Counter from "./components/Counter";
import MovieList from "./components/MoviesList";
import Timer from "./components/Timer";

function App() {

    const movies = [
        {title: "Man of steel", year:2000, cast:["Henry Cavil", "Russell Crowe"]},
        {title: "Harry Potter", year:2003, cast: ["Daniel Radcliffe", "Emma Watson"]},
        {title: "Lord of the rings", year:2004, cast: ["Vigo Mortensen", "Orlando Bloom"]},
    ];
  return (
    <div className="App">
        <h1>React Demo</h1>
        <Timer start={5}/>
        <Counter/>
        <MovieList movies={movies} />
    </div>);
}

export default App;
