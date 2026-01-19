import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/orders/OrdersPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("/api/cart-items?expand=product")
      .then((response) => setCart(response.data));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
    </Routes>
  );
}

export default App;
