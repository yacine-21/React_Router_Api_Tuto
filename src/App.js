import React from "react";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import About from "./components/About";
import ItemDetail from "./components/ItemDetail";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Shop" exact component={Shop} />
          <Route path="/Shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
