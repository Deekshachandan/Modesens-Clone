import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Designers from "../Designers/Designer";
import Product from "../Product/Product";
import Community from "../community/community";
import Kids from "../Kids/Kids";
import Women from "../Women/women";
import Mens from "../Mens/Mens";
import FinalWhyModesens from "../WhyModesens/FinalWhyMod";
import Login from "../Login/LoginIn"
import SinglePage from "../../SinglePage/SinglePage";
import Cart from "../../Cart/cart";

import PrivateRoute from "../PrivateFolder/Private";
import Payment from "../Payment/Payment";
import FinalPAyment from "../../LAST-PART/debit";


export default function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      ></Route>

      <Route
        path="/women"
        element={
          <PrivateRoute>
            <Women />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/kids"
        element={
          <PrivateRoute>
            <Kids />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/men"
        element={
          <PrivateRoute>
            <Mens />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/designer"
        element={
          <PrivateRoute>
            {" "}
            <Designers />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/product"
        element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/product/:id"
        element={
          <PrivateRoute>
            {" "}
            <SinglePage />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/com"
        element={
          <PrivateRoute>
            <Community />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/why"
        element={
          <PrivateRoute>
            {" "}
            <FinalWhyModesens />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
   
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            {" "}
            <Cart />
          </PrivateRoute>
        }
      ></Route>

      <Route
        path="/pay"
        element={
          <PrivateRoute>
            {" "}
            <Payment />
          </PrivateRoute>
        }
      ></Route>

      <Route
        path="/final"
        element={
          <PrivateRoute>
            {" "}
            <FinalPAyment />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
}
