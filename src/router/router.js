import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Favorites from '../views/favorites';
import Home from '../views/home';
import ErrorPage from '../views/404';
import BankDetail from '../views/bankDetail';


const Router = () => {
  return (
    <BrowserRouter baseUrl="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/bank/:id" element={<BankDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router