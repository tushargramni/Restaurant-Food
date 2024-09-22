import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Main from "./Components/Main/Main.jsx";
import "./App.css";
import Dishes from "./Components/Dishes/Dishes.jsx";
import Favourites from "./Components/Favourites/Favourites.jsx";
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
