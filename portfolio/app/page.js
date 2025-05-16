'use client'
import About from "./components/About";
import Contact from "./components/Contact";
import EasterEgg from "./components/EasterEgg";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Tools />
    <Work />
    <Projects />
    <Contact/>
    <EasterEgg />
    </>
  );
}
