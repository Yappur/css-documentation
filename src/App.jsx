import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Tools from "./pages/Tools";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/:slug" element={<Docs />} />
        <Route path="/herramientas" element={<Tools />} />
        <Route
          path="*"
          element={
            <h1 className="text-white text-4xl font-bold flex items-center justify-center h-screen">
              404 - Página no encontrada :(
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
