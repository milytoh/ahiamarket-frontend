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
import OverviewPage from "@/pages/vendor/Overview";
import Products from "@/pages/vendor/Products";
import AddProduct from "@/pages/vendor/AddProduct";
import EditProduct from "@/pages/vendor/EditProduct";
import ProductDetails from "@/pages/vendor/ProductDetails";
import EditVendorProfile from "@/pages/vendor/EditVendorProfile";
import EditProfile from "@/pages/profile/EditProfile";
import Orders from "@/pages/vendor/Orders";
import OrderDetails from "@/pages/vendor/OrderDetails";

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
          <Route path="/profile/edit" element={<EditProfile />} />
        </Route>
        <Route path="/payment/verify" element={<PaymentVerify />} />
      </Route>

      {/* vendor layout  */}
      <Route element={<ProtectedRoute />}>
        <Route path="/vendor/dashboard" element={<VendorDashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route
            path="/vendor/dashboard/profile/edit/:id"
            element={<EditVendorProfile />}
          />
          <Route path="/vendor/dashboard/products" element={<Products />} />
          <Route
            path="/vendor/dashboard/add-product"
            element={<AddProduct />}
          />
          <Route
            path="/vendor/dashboard/edit-product/:id"
            element={<EditProduct />}
          />
          <Route
            path="/vendor/dashboard/product/details/:id"
            element={<ProductDetails />}
          />

          <Route path="/vendor/dashboard/orders" element={<Orders />} />
          <Route path="/vendor/dashboard/orders/:orderId" element={<OrderDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
