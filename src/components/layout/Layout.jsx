import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
