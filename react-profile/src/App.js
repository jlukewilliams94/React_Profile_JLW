import React from 'react';
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import Home from "./pages/home/home"
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact"


function App() {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
