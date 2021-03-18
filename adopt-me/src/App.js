import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Winnie",
  //     animal: "Dog",
  //     breed: "Great Dane",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Scoot",
  //     animal: "Bird",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" })
  // ]);

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Winnie" animal="Dog" breed="Great Dane" />
      <Pet name="Scoot" animal="Bird" breed="Cockatiel" />
    </div>
  );
};

render(<App />, document.getElementById("root"));