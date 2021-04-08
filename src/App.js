import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <ul className='navbar-nav mr-auto'>
            <li>
              <Link to={"/"} className='nav-link'>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className='nav-link'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
