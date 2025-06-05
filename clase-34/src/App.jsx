import { Route, Routes } from "react-router-dom";
import { Products } from "./components/pages/Products";
import { Home } from "./components/pages/Home";
import { Product } from "./components/pages/Product";
import { Navbar } from "./components/ui/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ height: "64px" }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
