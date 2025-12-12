import {  Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import RegistrationPage from "@/pages/auth/Registration";



const AppRoutes = () => {
    
    return (
      <Routes>
        {/* app layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route path="/signup" element={ <RegistrationPage/>} />
        </Route>
       
      </Routes>
    );
}

export default AppRoutes