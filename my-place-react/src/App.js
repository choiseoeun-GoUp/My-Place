import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WriteContainer from "./pages/WirteContainer";
import SearchPlace from "./pages/SearchPlace";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<SearchPlace />} />
        <Route path="/write" element={<WriteContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
