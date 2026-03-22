import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layouts/Layout";

// Route-based code splitting
const Hero = lazy(() => import("./pages/Hero").then(module => ({ default: module.Hero })));
const Narrative = lazy(() => import("./pages/About").then(module => ({ default: module.Narrative })));
const Void = lazy(() => import("./pages/Works").then(module => ({ default: module.Void })));
const Playground = lazy(() => import("./pages/Lab").then(module => ({ default: module.Playground })));
const Transmission = lazy(() => import("./pages/Contact").then(module => ({ default: module.Transmission })));
const Stack = lazy(() => import("./pages/Tech").then(module => ({ default: module.Stack })));
const Rhythm = lazy(() => import("./pages/Rhythm").then(module => ({ default: module.Rhythm })));
const Chaos = lazy(() => import("./pages/Chaos").then(module => ({ default: module.Chaos })));

// Minimal Loading Fallback (Matches Void theme)
const LoadingPage = () => (
  <div className="w-full h-screen bg-abyss flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-[1px] bg-spark animate-pulse" />
      <div className="font-mono text-[8px] text-white/20 uppercase tracking-[0.5em]">Initializing_View</div>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/narrative" element={<Narrative />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/void" element={<Void />} />
          <Route path="/transmission" element={<Transmission />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/rhythm" element={<Rhythm />} />
          <Route path="/chaos" element={<Chaos />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
