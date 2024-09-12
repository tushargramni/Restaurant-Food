import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Favourites from "./Components/Favourites/Favourites";
import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Favourites />
    </>
  );
};

export default App;
