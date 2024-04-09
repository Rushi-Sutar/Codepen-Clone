import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/editor",
    element: <CodeEditor />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
