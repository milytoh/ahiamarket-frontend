import {  Routes, Route } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../pages/home";

const AppRoutes = () => {
    
    return (
      <Routes>
        {/* app layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
         
        </Route>
       
      </Routes>
    );
}

export default AppRoutes