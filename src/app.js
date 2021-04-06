import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, { name: "Cactus", animal: "dog", breed: "lhasa" }),
    React.createElement(Pet, {
      name: "Frodo",
      animal: "cat",
      breed: "burmese",
    }),
    React.createElement(Pet, {
      name: "Piske",
      animal: "rabbit",
      breed: "chinchilla",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
