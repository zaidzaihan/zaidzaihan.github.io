import { NavBar } from "./components/NavBar";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";
import { AboutMe } from "./pages/AboutMe";
import { Contact } from "./pages/Contact";
import { TechStack } from "./pages/TechStack";
import { Route, Routes } from "react-router-dom";
import { Personal } from "./pages/Personal";
import { Layout } from "./layouts/Layout";

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Hero />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/personal-space" element={<Personal />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/tech" element={<TechStack />}></Route>
      </Route>
    </Routes>
  )
}

export default App
