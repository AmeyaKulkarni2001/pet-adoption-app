import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import "./App.css";
function App() {
  return (
    <div>
      <NavBar />
      <Search />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
