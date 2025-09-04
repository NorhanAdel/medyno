import "./App.css";
import Header from "./Container/Header/Header";
import Footer from "./Container/Footer/Footer";
import Product from "./Pages/Product/Product";
import SpcialOffer from "./Pages/SpcialOffer/SpcialOffer";

import SingleProduct from "./Pages/SingleProduct/SingleProduct";

import Home from "./Pages/Home/Home.jsx";
import Cart from "./Pages/Cart/Cart.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/spcialoffer/:id" element={<SpcialOffer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    
      <Footer />
    </div>
  );
}

export default App;
