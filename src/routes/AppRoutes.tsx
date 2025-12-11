import {  Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";



const AppRoutes = () => {
    
    return (
      <Routes>
        {/* app layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/detail/:id" element={<ProductDetail /> } />
        </Route>
       
      </Routes>
    );
}

export default AppRoutes