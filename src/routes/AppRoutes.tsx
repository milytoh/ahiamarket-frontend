import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import RegistrationPage from "@/pages/auth/Registration";
import LoginPage from "@/pages/auth/Login";
import GoogleAuthCallback from "@/pages/auth/GoogleAuthCallback";



const AppRoutes = () => {
    
    return (
      <Routes>
        {/* app layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auth/callback" element={<GoogleAuthCallback />} />

          <Route element={<ProtectedRoute />}>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* add more protected routes here */}
          </Route>
        </Route>
      </Routes>
    );
}

export default AppRoutes