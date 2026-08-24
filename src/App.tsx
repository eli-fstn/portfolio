import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react"

const Home = lazy(() => import("./pages/Home"));
const TechStack = lazy(() => import("./pages/TechStack"));
const Projects = lazy(() => import("./pages/Projects"));
const Socials = lazy(() => import("./pages/Socials"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <p className="flex justify-center items-center h-screen text-gray-500 text-xs">Loading...</p>
      }>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/tech-stack" element={<TechStack />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/socials" element={<Socials />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    
  )
}

export default App
