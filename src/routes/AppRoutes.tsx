import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Layout from "@/components/layout/Layout";
import ProfileLayout from "@/components/layout/ProfileLayout";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import RegistrationPage from "@/pages/auth/Registration";
import LoginPage from "@/pages/auth/Login";
import GoogleAuthCallback from "@/pages/auth/GoogleAuthCallback";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";
import Profile from "@/pages/profile/Profile";
import Wallet from "@/pages/profile/Wallet";
import PaymentVerify from "@/pages/profile/PaymentVerify";
import TransactionHistory from "@/pages/profile/TransactionHistory";
import VendorApplication from "@/pages/vendor/Application";
import VendorDashboardLayout from "@/components/layout/VendorDashboardLayout";


const AppRoutes = () => {
  return (
    <Routes>
      {/* app layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/detail/:id" element={<ProductDetail />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path="/account/request-password-reset"
          element={<ResetPassword />}
        />
        <Route path="/auth/callback" element={<GoogleAuthCallback />} />
        <Route path="/profile" element={<Profile />} />

        <Route element={<ProtectedRoute />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* add more protected routes here */}
        </Route>
      </Route>

      {/* profile layout */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<Profile />} />
          <Route path="/profile/wallet" element={<Wallet />} />
          <Route
            path="/profile/transaction/history"
            element={<TransactionHistory />}
          />
          <Route
            path="/profile/vendor/application"
            element={<VendorApplication />}
          />
        </Route>
        <Route path="/payment/verify" element={<PaymentVerify />} />
      </Route>

       {/* vendor layout  */}
      <Route element={<ProtectedRoute />}>
        <Route path="/vendor-dashboard" element={< VendorDashboardLayout/>}>
         
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
