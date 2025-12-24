import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { TechStack } from "./components/TechStack";
import { Route, Routes } from "react-router-dom";
import { Personal } from "./components/Personal";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/personal-space" element={<Personal />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Footer/>}></Route>
        <Route path="/tech" element={<TechStack/>}></Route>
      </Routes>
    </>
  )
}

export default App
