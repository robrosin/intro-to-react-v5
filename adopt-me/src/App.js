const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Winifred"),
    React.createElement("h2", {}, "dog"),
    React.createElement("h2", {}, "Great Dane"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
