'use client'
import About from "./About";
import EasterEgg from "./EasterEgg";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Tools from "./Tools";
import Work from "./Work";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Tools />
    <Work />
    <Projects />
    <EasterEgg />
    </>
  );
}
