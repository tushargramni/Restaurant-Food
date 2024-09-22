import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Main from "./Components/Main/Main.jsx";
import "./App.css";
import Dishes from "./Components/Dishes/Dishes.jsx";
import Favourites from "./Components/Favourites/Favourites.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Services from "./Components/Services/Services.jsx";
import Footer from "./Components/Footer/Footer.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Favourites />
      <Dishes />
      <Testimonials />
      <Services />
      <Footer />
    </>
  );
};

export default App;
