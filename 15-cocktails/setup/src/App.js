import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Home exact path="/" />
        <About exact path="/about" />
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Error path="*" />
      </Switch>
    </Router>
  );
}

export default App;
