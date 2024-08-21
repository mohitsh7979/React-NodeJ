import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Mid from "./Components/Home/Mid";
import "./App.css";
import Description from "./Components/Description/Description";
import ShopCategory from "./Components/ShopCategory/ShopCategory";
import Checkout from "./Components/Checkout/Checkout";
import Cart from "./Components/Cart/Cart";
import { Routes, Route , BrowserRouter} from "react-router-dom";

function App() {
  console.log("Hello World");
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Mid />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/detail" element={<Description />}></Route>
          <Route path="/category" element={<ShopCategory />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
