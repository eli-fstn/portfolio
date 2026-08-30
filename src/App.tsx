import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react"
import LoadingScreen from "./components/ui/LoadingScreen";
import ChatWidget from "./components/ui/ChatWidget";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const TechStack = lazy(() => import("./pages/TechStack"));
const Projects = lazy(() => import("./pages/Projects"));
const Socials = lazy(() => import("./pages/Socials"));
const Education = lazy(() => import("./pages/Education"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
           <Route path="/" element={<Dashboard />} />
           <Route path="/tech-stack" element={<TechStack />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/socials" element={<Socials />} />
           <Route path="/education" element={<Education />} />
        </Routes>
        <ChatWidget />
      </Suspense>
    </BrowserRouter>
    
  )
}

export default App
