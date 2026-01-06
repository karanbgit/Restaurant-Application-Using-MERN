import React from "react";
import HeroSection from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Qualities from "../../components/Qualities";
import Menu from "../../components/Menu";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
    </>
  );
}

export default Home;
