import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Carts from "./pages/Carts";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/WishList";
import WholeSale from "./pages/WholeSale";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/wholesale" element={<WholeSale />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
