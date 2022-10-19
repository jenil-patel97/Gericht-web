import React from "react";

import AboutUs from "./container/AboutUs";
import Chef from "./container/Chef";
import Contact from "./container/Contact";
import Footer from "./container/Footer";
import Gallery from "./container/Gallery";
import Header from "./container/Header";
import Intro from "./container/Intro";
import SpecialMenu from "./container/SpecialMenu";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Gallery />
    <Contact />
    <Newsletter/>
    <Footer />
  </div>
);

export default App;
