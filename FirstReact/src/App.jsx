import Header from "./Components/Header/Header";
import Mid from "./Components/Home/Mid";
import Footer from "./Components/Footer/Footer";
import './App.css';
import Category from "./Components/Shopcategory/Category";
import Productdetails from "./Components/Productdescription/Productdetails";
import Cart from "./Components/Cart/Cart";
import Productcheckout from "./Components/Checkout/Productcheckout";
import { Routes , Route} from "react-router-dom";

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Mid/>}></Route>
      <Route path="Category" element={<Category/>}></Route>
      <Route path="Detail/:id/" element={<Productdetails/>}></Route>
      <Route path="Checkout" element={<Productcheckout/>}></Route>
      <Route path="Cart" element={ <Cart/>}></Route>
     </Routes>
     
     
     
     
    
     <Footer/>
    </>
  )
}

export default App;
