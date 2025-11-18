import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { TechStack } from "./components/TechStack";

function App() {

  return (
    <div className="min-h-screen bg-[#023047] text-white/90 overflow-hidden relative">
      <NavBar/>
      <Hero/>
      <AboutMe/>
      <TechStack/>
      <Footer/>
    </div>
  )
}

export default App
