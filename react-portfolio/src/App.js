import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio/index";
// import Contact from "./pages/Contact/index";
// import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Banner />
        {/* <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Portfolio} />
        <Route exact path="/contact" component={Contact} /> */}
        {/* <Footer /> */}
      </div>
   </Router>
  );
}

export default App;

