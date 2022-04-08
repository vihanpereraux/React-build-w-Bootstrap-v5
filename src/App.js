import logo from './logo.svg';
import "./App.css";

// Not in-use because of the new design integration
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"

import Navbar from "./components/inc/Navbar";
import Landing from "./components/partials/Landing";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    // Commented for new design integration
    // <Router>
    //   <div>
    //     <Navbar />
    //     <Switch>
    //       <Route exact path="/">
    //         <Landing />
    //       </Route>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //     </Switch>  
    //   </div>
    // </Router>

    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>  
      </div>
    </Router>

    // New design integration
    // <div>
    //   <Router>
    //     <Navbar />
    //   </Router>
    //   <Landing />
    // </div>
  );
}

export default App;
