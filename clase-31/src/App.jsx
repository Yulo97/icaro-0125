import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Index } from "./components/pages/Index";
import { Contacto } from "./components/pages/Contacto";
import { Navbar } from "./components/templates/Navbar.jsx";
import { ProtectedRoute } from "./services/ProtectedRoute.jsx";
import { Protegido } from "./components/pages/Protegido";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/protegido" element={<Protegido />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
