import { Outlet } from "react-router-dom";

import NavbarBottom from "./NavbarBottom";
import NavbarTop from "./NavbarTop";

const Layout = (props) => {
  return (
    <>
      < NavbarTop/>
      <main>
        <Outlet />
      </main>
      <NavbarBottom />
    </>
  );
};

export default Layout;
