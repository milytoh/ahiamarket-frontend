const NavbarBottom = () => {
  return (
    <div>
      <div className="flex gap-2 fixed bottom-0 left-0 right-0  border-t border-[#e6f4f1] bg-[#f8fcfb] dark:bg-primary px-4 pb-3 pt-2">
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#0c1d19]"
          href="#"
        >
          <div
            className="text-[#0c1d19] flex h-8 items-center justify-center"
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
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#45a18b]"
          href="#"
        >
          <div
            className="text-[#45a18b] flex h-8 items-center justify-center"
            data-icon="ShoppingCart"
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
              <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
            </svg>
          </div>
          <p className="text-[#45a18b] dark:text-white text-xs font-medium leading-normal tracking-[0.015em]">
            Cart
          </p>
        </a>
        <a
          className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#45a18b]"
          href="#"
        >
          <div
            className="text-[#45a18b] flex h-8 items-center justify-center"
            data-icon="User"
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
              <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
            </svg>
          </div>
          <p className="text-[#45a18b] dark:text-white text-xs font-medium leading-normal tracking-[0.015em]">
            Account
          </p>
        </a>
      </div>
      <div className="h-5 bg-[#f8fcfb]"></div>
    </div>
  );
};

export default NavbarBottom;
