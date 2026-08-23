import { lazy, Suspense } from "react"

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Suspense fallback={
      <p className="flex justify-center items-center h-screen text-gray-500 text-xs">Loading...</p>
    }>
      <Home />
    </Suspense>
  )
}

export default App
