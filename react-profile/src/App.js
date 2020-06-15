import React from 'react';
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import Home from "./pages/home/home"


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer /> 
    </div>
  );
}

export default App;
