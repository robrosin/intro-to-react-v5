const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Winnie",
      animal: "Dog",
      breed: "Great Dane",
    }),
    React.createElement(Pet, {
      name: "Scoot",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Onher",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
