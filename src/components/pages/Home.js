import React from "react";
import "./styles/Home.css";
import Carousel from "../inc/Carousel";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Navbar from "../inc/Navbar";

function Home() 
{
  return (

    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>  
      </div>

      <div>
        {/* <div className="container mt-5">
          <Carousel />
        </div> */}

        <div className="container">
          <div className="card shadow mt-5">

            <div className="card-body">
              <h2 id="home-title">Home Page</h2>
              <p id="test-paragaraph">
                Lorem Ipsum has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged
              </p>
            </div>

          </div>
        </div>
        
      </div>
    </Router>
  );
}

export default Home;
