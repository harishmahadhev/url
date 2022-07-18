import "./styles.css";
import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Routes>
                <Route path="/" component={Contact} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
