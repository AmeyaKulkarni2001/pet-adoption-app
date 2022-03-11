import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Features from "./Features";
import "./App.css";
function App() {
  return (
    <div>
      <NavBar />
      <Search />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
