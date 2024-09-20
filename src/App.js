import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Favourites from "./Components/Favourites/Favourites";
import "./App.css";
import Dishes from "./Components/Dishes/Dishes";
const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Favourites />
      <Dishes />
    </>
  );
};

export default App;
