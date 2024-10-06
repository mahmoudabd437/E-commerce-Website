import "./App.css";
import NavbarApp from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Collection from "./components/Collection";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Home from "./components/Home";
import ProductDetails from "./components/Product-details";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Payment from "./components/Payment";

function App() {
  return (
    <>
      <NavbarApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/Cart/Payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
