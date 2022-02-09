//import packages
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import css
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";

// import pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import Testimonial from "./pages/Testimonial";
import ContactUs from "./pages/ContactUs";
import Error from "./pages/Error";

// import components
import Navbar from "./components/Navbar";
import ContactDiv from "./components/ContactDiv";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/testimonial">
          <Testimonial />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <ContactDiv></ContactDiv>
    </Router>
  );
}

export default App;
