import React from "react";
import FAQ from './components/FAQ'
import Rehome from './components/Rehome';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Features from "./Features";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthWrapper from "./context/auth";
import "./App.css";
import ForgotPassword from "./components/ForgotPassword";
import Adopt from "./components/Adopt";

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

          <Route
            path="/forgotpassword"
            element={
              <>
                <ForgotPassword />
              </>
            }
          />
          <Route
            path="/rehome"
            element={
              <>
                <Rehome />
              </>
            }
          />
          <Route
            path="/adopt"
            element={
              <>
                <Adopt />
              </>
            }
          />
          <Route
            path="/faq"
            element={
              <>
                <FAQ />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
