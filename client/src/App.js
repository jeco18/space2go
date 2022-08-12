import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/about/About";
import Help from "./pages/help/Help";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Checkout from "./components/paypal/Checkout";
import ShowMap from "./pages/map/ShowMap";
import Boracay from "./pages/city/Boracay";
import AllHotels from "./pages/accomodation/AllHotels";
// import NewAccount from "./pages/newAccount/NewAccount";





import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/showmap" element={<ShowMap/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/boracay" element={<Boracay/>}/>
        <Route path="/allHotels" element={<AllHotels/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
