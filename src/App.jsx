import React from "react";
import Header from "./Components/header/Header";
import LoginComponent from "./Components/auth/LoginComponent";
import SignUpComponent from "./Components/auth/SignUpComponent";
import HomePage from "./Components/pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CartPage from "./Components/pages/CartPage";
import ViewSingleProduct from "./Components/products/ViewSingleProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/cartpage" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="/view/:id" element={<ProtectedRoute><ViewSingleProduct /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('mylogintoken');
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default App;
