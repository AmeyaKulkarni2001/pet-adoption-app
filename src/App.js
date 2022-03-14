import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Features from "./Features";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthWrapper from "./context/auth";
import "./App.css";

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBar />
                <Search />
                <Features />
                <Footer />
              </div>
            }
          />

          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />

          <Route
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
