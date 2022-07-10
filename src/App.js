import "./App.css";

import Movie from "./hoc/Movie";
import Counter from "./hooks/Counter";

function App() {
  return (
    <div>
      <Movie id={1} />
      <br />
      <Counter />
    </div>
  );
}

export default App;
