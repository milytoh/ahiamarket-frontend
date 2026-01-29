import React from "react";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-100 bg-white px-4 md:px-8 py-4 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-4 lg:gap-12">
        <div className="flex items-center gap-3 text-primary">
          <button
            className="lg:hidden p-2 -ml-2 text-charcoal hover:text-primary"
            onClick={onMenuClick}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          <div className="size-9 shrink-0">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-charcoal text-xl font-extrabold leading-tight tracking-tight hidden sm:block">
            AhiaMarket
          </h2>
        </div>

        <div className="hidden md:flex items-center w-full max-w-md h-11">
          <div className="flex w-full items-stretch rounded-xl h-full bg-slate-100 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <div className="text-slate-400 flex items-center justify-center pl-4">
              <span className="material-symbols-outlined text-[20px]">
                search
              </span>
            </div>
            <input
              className="form-input w-full border-none bg-transparent h-full placeholder:text-slate-400 px-4 pl-2 text-sm font-normal focus:ring-0"
              placeholder="Search products, orders or help..."
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-6">
        <nav className="hidden xl:flex items-center gap-6">
          <a
            className="text-charcoal/70 text-sm font-semibold hover:text-primary transition-colors"
            href="#"
          >
            Marketplace
          </a>
          <a
            className="text-charcoal/70 text-sm font-semibold hover:text-primary transition-colors"
            href="#"
          >
            Help
          </a>
          <a
            className="text-charcoal/70 text-sm font-semibold hover:text-primary transition-colors"
            href="#"
          >
            Support
          </a>
        </nav>

        <div className="flex gap-2 sm:gap-3 md:border-l border-slate-100 md:pl-6">
          <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-50 text-charcoal/60 hover:text-primary hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined text-[22px]">
              notifications
            </span>
          </button>
          <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-50 text-charcoal/60 hover:text-primary hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined text-[22px]">
              shopping_cart
            </span>
          </button>
        </div>

        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-100 ring-2 ring-transparent hover:ring-primary/20 transition-all cursor-pointer shrink-0"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAA75XtgQyy1AjVDomsbV8c-kBlcX8h4GnZZcvfGGTL5_qnFa4_x8eZ4v0oDPH_HTE9W6WzJVkzx6OL5bFVGvuPGhC3AzdK5DSxJNTVLKrhe7wqP1guu2KN0cCQikp9RH3sQ4wDbDP8pd9yZstnT34evOosHpyVUFR5AYEReteFrg7PawdC8o_ptKjjGjeQxhZLs8qx9YPSuJ0CAS4YpelZy8s-b-z5MOJMxyjgaUi5IYbbU_W1Oj2ZBpT1r8mz_HDOPu1DJH1N5Yg4")`,
          }}
        />
      </div>
    </header>
  );
};

export default Header;
