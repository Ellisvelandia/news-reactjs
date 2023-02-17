import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Categories, Home } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/general" element={<Categories cat="general" />} />
          <Route path="/business" element={<Categories cat="business" />} />
          <Route
            path="/entertainment"
            element={<Categories cat="entertainment" />}
          />
          <Route path="/health" element={<Categories cat="health" />} />
          <Route path="/science" element={<Categories cat="science" />} />
          <Route path="/sports" element={<Categories cat="sports" />} />
          <Route path="/technology" element={<Categories cat="technology" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
