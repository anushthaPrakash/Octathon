import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import BuyItem from "./components/BuyItem/BuyItem";
import FrontPage from "./components/Homepage/FrontPage";
import { UserAuthContextProvider } from "./components/contexts/userAuthContext";
import Protected from "./components/Protected";
import ContactUs from "./components/UserPage/ContactUs";
import BuyDishSelected from "./components/BuyPage/BuyDishSelected";
import UserOptions from "./components/UserPage/UserOptions";
import SellDish from "./components/SellPage/SellDish";
import Sucess from "./components/UserPage/Sucess";

function App() {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <FrontPage />
              </Protected>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/buy"
            element={
              <Protected>
                <BuyItem />
              </Protected>
            }
          />
          <Route path="/sell"  element={<SellDish/>}/>
          <Route
            path="/sell/:item"
            element={
              <Protected>
                <Login />
              </Protected>
            }
          />
          <Route path="/user"  element={<UserOptions/>}/>
          <Route path="/buydish" element={<BuyDishSelected/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route
            path="/success/:message"
            element={
              <Sucess/>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

        // /* <Route path="/login" element={<Login/>}/>
        // <Route path="/buy"  element={<BuyItem/>}/>
        // <Route path="/user"  element={<UserOptions/>}/>
        // <Route path="/sell"  element={<SellDish/>}/>
        // <Route path="/sell/:item" element={<Login/>}/>
        // <Route path="/buydish" element={<BuyDishSelected/>}/>
        // <Route path="/contactus" element={<ContactUs/>}/>
        // <Route path="/success/:message" element={<Sucess/>}/>