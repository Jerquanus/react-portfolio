import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Home from "./Pages/Home";
import Work from "./Pages/Project/Projects";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Work} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/contact" component={Contact}/>
        <Footer />
      </div>
   </Router>
  );
}

export default App;

