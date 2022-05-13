import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "../views/Favorites";
import Home from "../views/Home";
import ErrorPage from "../views/404";
import BankDetail from "../views/BankDetail";
import AllBank from "../views/AllBanks";

const Router = () => {
  return (
    <>
      <BrowserRouter baseUrl="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-banks" element={<AllBank />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/bank-details/:ifscCode" element={<BankDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
