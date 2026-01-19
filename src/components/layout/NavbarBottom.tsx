import { Link, NavLink } from "react-router-dom";

import { FaUserPlus } from "react-icons/fa6";
import { HiOutlineUserAdd } from "react-icons/hi";
import { HiOutlineLogin } from "react-icons/hi";




const NavbarBottom = () => {
  return (
    <div>
      <div className="flex gap-2  fixed bottom-0 left-0 right-0  border-t border-[#e6f4f1] bg-[#f8fcfb] dark:bg-primary px-4 pb-3 pt-2">
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#0c1d19]"
          href="#"
        >
          <div
            className="text-[hsl(166,41%,8%)] flex h-8 items-center justify-center"
            data-icon="House"
            data-size="24px"
            data-weight="fill"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
            </svg>
          </div>
          <p className="text-[#0c1d19] text-xs font-medium leading-normal tracking-[0.015em]">
            Home
          </p>
        </a>
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
            Shop
          </p>
        </a>

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
      </div>
      <div className="h-5 bg-[#f8fcfb]"></div>
    </div>
  );
};

export default NavbarBottom;
