'use client'
import About from "./about";
import EasterEgg from "./easteregg";
import Header from "./header";
import Navbar from "./navbar";
import Projects from "./projects";
import Tools from "./tools";
import Work from "./work";

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