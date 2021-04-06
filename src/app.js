import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.jsx";

const App = () => (
  <div>
    <h1>Adopt me!</h1>
    <Pet name="Cactus" animal="dog" breed="lhasa" />
    <Pet name="Frodo" animal="cat" breed="burmese" />
    <Pet name="Piske" animal="rabbit" breed="chinchilla" />
  </div>
);

render(<App />, document.getElementById("root"));
