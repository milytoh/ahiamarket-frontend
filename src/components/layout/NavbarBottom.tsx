import { NavLink, replace } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useAppSelector } from "@/store/hook";
import { useAppDispatch } from "@/store/hook";

import { FaUserPlus } from "react-icons/fa6";
import { HiOutlineUserAdd } from "react-icons/hi";
import { HiOutlineLogin } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";



import { logout } from "@/features/auth/authSlice";

const NavbarBottom = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch()

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const logoutHandler =  () => {

 
    dispatch(logout());

    navigate("/login")
      
      
  };

  return (
    <div>
      <div className="flex gap-2  fixed bottom-0 left-0 right-0  border-t border-[#e6f4f1] bg-[#f8fcfb] dark:bg-primary px-4 pb-3 pt-2">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "just flex flex-1 flex-col items-center justify-end gap-1 text-brand-orange"
              : "just flex flex-1 flex-col items-center justify-end gap-1 text-primary"
          }
        >
          <HiOutlineHome className="text-2xl" />

          <p className="text-primary dark:text-white text-xs font-medium leading-normal tracking-[0.015em]">
            Home
          </p>
        </NavLink>
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#45a18b]"
          href="#"
        >
          <div
            className="text-[#45a18b] flex h-8 items-center justify-center"
            data-icon="MagnifyingGlass"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </div>
          <p className="text-[#45a18b] dark:text-white text-xs font-medium leading-normal tracking-[0.015em]">
            search
          </p>
        </a>

        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            isActive
              ? "just flex flex-1 flex-col items-center justify-end gap-1 text-brand-orange"
              : "just flex flex-1 flex-col items-center justify-end gap-1 text-primary"
          }
        >
          <HiOutlineShoppingCart className="text-2xl" />

          <p className="text-primary dark:text-white text-xs font-medium leading-normal tracking-[0.015em]">
            Cart
          </p>
        </NavLink>

        {!isAuthenticated && (
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "just flex flex-1 flex-col items-center justify-end gap-1 text-brand-orange"
                : "just flex flex-1 flex-col items-center justify-end gap-1 text-primary"
            }
          >
            <HiOutlineLogin className="text-2xl" />

            <p className="text-primary dark:text-white text-xs font-medium leading-normal tracking-[0.015em]">
              Login
            </p>
          </NavLink>
        )}

        {!isAuthenticated && (
          <NavLink
            to={"/signup"}
            className={({ isActive }) =>
              isActive
                ? "just flex flex-1 flex-col items-center justify-end gap-1 text-brand-orange"
                : "just flex flex-1 flex-col items-center justify-end gap-1 text-primary"
            }
          >
            <HiOutlineUserAdd className="text-2xl" />

            <p className="text-primary dark:text-white text-xs font-medium leading-normal tracking-[0.015em]">
              Signup
            </p>
          </NavLink>
        )}

        {isAuthenticated && (
          <div className="just flex flex-1 flex-col items-center justify-end gap-1 text-primary">
            <HiOutlineLogout className="text-2xl" onClick={logoutHandler} />

            <p className="text-primary dark:text-white text-xs font-medium leading-normal tracking-[0.015em]">
              Logout
            </p>
          </div>
        )}
      </div>
      <div className="h-5 bg-[#f8fcfb]"></div>
    </div>
  );
};

export default NavbarBottom;
