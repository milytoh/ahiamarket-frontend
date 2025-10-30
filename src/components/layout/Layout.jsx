import { Outlet } from "react-router-dom";

import NavbarBottom from "./NavbarBottom";
import NavbarTop from "./NavbarTop";

const Layout = (props) => {
  return (
    <>
      < NavbarTop/>
      <main className="mt-20 ">
        <Outlet />
      </main>
      <NavbarBottom />
    </>
  );
};

export default Layout;
