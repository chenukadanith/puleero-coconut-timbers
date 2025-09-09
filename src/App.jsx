import React from "react";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import About from "./components/About/About";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./components/style.css";
import LocationMap from "./components/Contact/LocationMap";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Products />
      <About />
      <WhyChooseUs />
      <LocationMap />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
