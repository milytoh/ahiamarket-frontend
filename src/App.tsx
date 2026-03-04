import { useState } from 'react';
import AppRoutes from './routes/AppRoutes';

import useScrollToTop from "@/hooks/useScrollToTop";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAOS } from "@/hooks/useAos";


function App() {
  useAOS();
  useScrollToTop()
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // "light" | "dark" | "colored"
        // transition={Bounce}  // optional fancy transitions
      />
      <AppRoutes />
    </>
  );
}

export default App
