import React from "react"

const ProfileCheck: React.FC = () => {
    return (
      <section>
        <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-100 bg-white px-4 md:px-8 py-4 sticky top-0 z-50 shadow-sm">
          <div className="flex items-center gap-4 lg:gap-12">
            <div className="flex items-center gap-3 text-primary">
              <div className="size-9 shrink-0">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                    fill="currentColor"
                  ></path>
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
                  value=""
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
              data-alt="Alex Johnson"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAA75XtgQyy1AjVDomsbV8c-kBlcX8h4GnZZcvfGGTL5_qnFa4_x8eZ4v0oDPH_HTE9W6WzJVkzx6OL5bFVGvuPGhC3AzdK5DSxJNTVLKrhe7wqP1guu2KN0cCQikp9RH3sQ4wDbDP8pd9yZstnT34evOosHpyVUFR5AYEReteFrg7PawdC8o_ptKjjGjeQxhZLs8qx9YPSuJ0CAS4YpelZy8s-b-z5MOJMxyjgaUi5IYbbU_W1Oj2ZBpT1r8mz_HDOPu1DJH1N5Yg4")`,
              }}
            ></div>
          </div>
        </header>
        <div className="flex w-full max-w-[1440px] mx-auto min-h-[calc(100vh-76px)]">
          <aside className="hidden lg:flex w-72 flex-col justify-between bg-white p-6 border-r border-slate-100 sticky top-[76px] h-[calc(100vh-76px)] shrink-0">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 p-2">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-primary shadow-sm shrink-0"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQmbU8DE3q2Io_Em_DYQombC7zJw8oXSmHsCcPhebOQchzAu6tkeEoAuWEmYSURe82gtJQdO9CEQQHmxnJGynYGzg7HRQSHP37fWbE_J4ckvnxcFdOM0Hpza2WAtZQYdSHieGxxLgx-aZIlN_Boi6lrsq4Bq0N7sGzzZ2zgAFWZlUpkpi3XeB0vsxWJgXNF9QxmlM0JtZOLuCb4pH0bFnjjXsVhO5wP76NFaKsTS1rWzsws9Fom7iFs_Pelh0K6fVzwJxp9DryhfWZ")`,
                  }}
                ></div>
                <div className="flex flex-col overflow-hidden">
                  <h1 className="text-charcoal text-base font-bold leading-none mb-1 truncate">
                    Alex Johnson
                  </h1>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-widest truncate">
                    Premium Member
                  </p>
                </div>
              </div>
              <nav className="flex flex-col gap-1.5">
                <a
                  className="flex items-center gap-3 px-4 py-3 rounded-xl sidebar-link-active transition-all group"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[22px] fill-[1]">
                    person
                  </span>
                  <p className="text-sm font-bold">Account Profile</p>
                </a>
                <a
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all group"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[22px]">
                    package
                  </span>
                  <p className="text-sm font-semibold">Order History</p>
                </a>
                <a
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all group"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[22px]">
                    account_balance_wallet
                  </span>
                  <p className="text-sm font-semibold">Wallet &amp; Payments</p>
                </a>
                <a
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all group"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[22px]">
                    favorite
                  </span>
                  <p className="text-sm font-semibold">My Favorites</p>
                </a>
                <a
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-charcoal transition-all group"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[22px]">
                    settings
                  </span>
                  <p className="text-sm font-semibold">Settings</p>
                </a>
              </nav>
            </div>
            <div className="bg-primary/5 p-5 rounded-2xl border border-primary/10">
              <p className="text-[11px] text-charcoal/70 font-medium mb-4 leading-relaxed">
                Unlock priority delivery and exclusive marketplace deals.
              </p>
              <button className="w-full cursor-pointer items-center justify-center rounded-xl h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-[#00a383] transition-all shadow-md shadow-primary/20">
                Upgrade to Pro
              </button>
            </div>
          </aside>
          <main className="flex-1 w-full p-4 md:p-8 xl:p-10">
            <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 md:gap-8 text-center sm:text-left">
                    <div className="relative shrink-0">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 md:size-32 border-4 border-white shadow-xl ring-1 ring-slate-100"
                        style={{
                          backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuDvFzdyxJox8FB7S4YntVEkfXz80VxSzKN54SyR88zhAX9QzYvqX04TYK96viHFGI3s-YnzDI6qMo_jXZR8zU595_-4j6R4w1e2-RwVq4Z3InlBp2mkAyNNiFppT1rIpeh96LM2YNniyCNwh0gOmS5TjeAbVh3PuDAID0UzcloCyzF71HVy22HJ7SRl1FY-TthWjBgFfU8Ardkhht_LTO6aMe9BZkjWbSTsCsJcEB0rIDy0J7XqFsgbdcB70IMQ5wqLErjid-b5Pvmk")`,
                        }}
                      ></div>
                      <div className="absolute bottom-1 right-1 bg-primary text-white rounded-full p-1 border-2 border-white shadow-sm">
                        <span className="material-symbols-outlined text-[16px] block font-bold">
                          verified
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h1 className="text-charcoal text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight mb-1">
                        Alex Johnson
                      </h1>
                      <p className="text-slate-400 text-sm md:text-base font-semibold">
                        Member since Oct 2023 •{" "}
                        <span className="text-primary">Premium Tier</span>
                      </p>
                      <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                        <div className="h-2.5 w-full sm:w-40 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="bg-primary h-full rounded-full"
                            style={{width: '80%'}}
                          ></div>
                        </div>
                        <p className="text-primary text-sm font-extrabold whitespace-nowrap">
                          850 Trust Score
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 sm:gap-4 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-xl h-11 px-6 bg-white text-charcoal text-sm font-bold hover:bg-slate-50 transition-all border border-slate-200">
                      <span className="material-symbols-outlined text-[20px]">
                        edit
                      </span>
                      Edit Profile
                    </button>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 rounded-xl h-11 px-6 bg-primary text-white text-sm font-bold hover:bg-[#00a383] transition-all shadow-lg shadow-primary/20">
                      <span className="material-symbols-outlined text-[20px]">
                        share
                      </span>
                      Share
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="group bg-white p-6 md:p-7 rounded-2xl border border-slate-100 shadow-sm hover:border-primary/30 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      Total Orders
                    </p>
                    <div className="p-2 bg-primary/5 rounded-lg text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        shopping_bag
                      </span>
                    </div>
                  </div>
                  <p className="text-charcoal text-2xl md:text-3xl font-extrabold mb-1">
                    48
                  </p>
                  <p className="text-[11px] text-green-500 font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">
                      trending_up
                    </span>
                    +12% this month
                  </p>
                </div>
                <div className="group bg-white p-6 md:p-7 rounded-2xl border border-slate-100 shadow-sm hover:border-primary/30 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      Wallet Balance
                    </p>
                    <div className="p-2 bg-primary/5 rounded-lg text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        account_balance_wallet
                      </span>
                    </div>
                  </div>
                  <p className="text-charcoal text-2xl md:text-3xl font-extrabold mb-1">
                    $1,240.00
                  </p>
                  <p className="text-[11px] text-slate-400 font-bold">
                    Available balance
                  </p>
                </div>
                <div className="group bg-white p-6 md:p-7 rounded-2xl border border-slate-100 shadow-sm hover:border-primary/30 transition-all sm:col-span-2 lg:col-span-1">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                      Disputes
                    </p>
                    <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
                      <span className="material-symbols-outlined text-[20px]">
                        gavel
                      </span>
                    </div>
                  </div>
                  <p className="text-charcoal text-2xl md:text-3xl font-extrabold mb-1">
                    0
                  </p>
                  <p className="text-[11px] text-slate-400 font-bold">
                    Perfect record
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-slate-50">
                    <h3 className="text-charcoal text-lg font-bold">
                      Personal Information
                    </h3>
                    <button className="text-primary text-sm font-bold hover:underline">
                      Edit
                    </button>
                  </div>
                  <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mb-1.5">
                        Full Name
                      </p>
                      <p className="text-charcoal text-sm font-bold">
                        Alex Johnson
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mb-1.5">
                        Email Address
                      </p>
                      <p className="text-charcoal text-sm font-bold truncate">
                        alex.j@example.com
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mb-1.5">
                        Phone Number
                      </p>
                      <p className="text-charcoal text-sm font-bold">
                        +1 (555) 012-3456
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] font-extrabold uppercase tracking-widest mb-1.5">
                        Preferred Language
                      </p>
                      <p className="text-charcoal text-sm font-bold">
                        English (US)
                      </p>
                    </div>
                  </div>
                </section>
                <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                  <div className="px-6 md:px-8 py-5 border-b border-slate-50">
                    <h3 className="text-charcoal text-lg font-bold">
                      Trust Score Breakdown
                    </h3>
                  </div>
                  <div className="p-6 md:p-8 space-y-5 flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined text-[20px]">
                            payments
                          </span>
                        </div>
                        <p className="text-charcoal/80 text-sm font-bold">
                          Payment History
                        </p>
                      </div>
                      <p className="text-primary text-sm font-extrabold whitespace-nowrap">
                        Excellent
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined text-[20px]">
                            stars
                          </span>
                        </div>
                        <p className="text-charcoal/80 text-sm font-bold">
                          Review Authenticity
                        </p>
                      </div>
                      <p className="text-primary text-sm font-extrabold whitespace-nowrap">
                        98% Positive
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined text-[20px]">
                            calendar_today
                          </span>
                        </div>
                        <p className="text-charcoal/80 text-sm font-bold">
                          Account Tenure
                        </p>
                      </div>
                      <p className="text-charcoal/40 text-sm font-extrabold whitespace-nowrap">
                        6 Months
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <section>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 px-1">
                  <h3 className="text-charcoal text-xl font-extrabold">
                    Delivery Addresses
                  </h3>
                  <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline group w-fit">
                    <span className="material-symbols-outlined text-[20px] group-hover:no-underline">
                      add_circle
                    </span>
                    Add New Address
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white p-6 rounded-2xl border-2 border-primary shadow-sm relative group">
                    <div className="absolute top-6 right-6 flex gap-2">
                      <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
                        <span className="material-symbols-outlined text-[18px]">
                          edit
                        </span>
                      </button>
                      <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all">
                        <span className="material-symbols-outlined text-[18px]">
                          delete
                        </span>
                      </button>
                    </div>
                    <div className="flex items-center gap-3 mb-4 pr-16">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          home
                        </span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-charcoal font-extrabold">
                          Home Address
                        </h4>
                        <span className="px-2 py-0.5 bg-primary text-white text-[9px] font-bold uppercase rounded-full tracking-wider">
                          Default
                        </span>
                      </div>
                    </div>
                    <p className="text-charcoal/70 text-sm font-medium leading-relaxed">
                      4512 Belisario Street, Suite 200
                      <br />
                      San Francisco, CA 94107
                      <br />
                      United States
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative group hover:border-primary/30 transition-all">
                    <div className="absolute top-6 right-6 flex gap-2">
                      <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
                        <span className="material-symbols-outlined text-[18px]">
                          edit
                        </span>
                      </button>
                      <button className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all">
                        <span className="material-symbols-outlined text-[18px]">
                          delete
                        </span>
                      </button>
                    </div>
                    <div className="flex items-center gap-3 mb-4 pr-16">
                      <div className="p-2 bg-slate-50 rounded-lg text-slate-400 shrink-0">
                        <span className="material-symbols-outlined text-[20px]">
                          work
                        </span>
                      </div>
                      <h4 className="text-charcoal font-extrabold">
                        Office Location
                      </h4>
                    </div>
                    <p className="text-charcoal/70 text-sm font-medium leading-relaxed">
                      101 Market Street, Floor 12
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </section>
              <section className="bg-white rounded-2xl border-2 border-dashed border-primary/20 p-8 md:p-12 lg:p-16 text-center shadow-sm">
                <div className="max-w-md mx-auto flex flex-col items-center">
                  <div className="size-16 md:size-20 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 ring-8 ring-primary/5">
                    <span className="material-symbols-outlined text-[32px] md:text-[40px]">
                      account_balance
                    </span>
                  </div>
                  <h3 className="text-charcoal text-xl md:text-2xl font-extrabold mb-3">
                    Connect Your Wallet
                  </h3>
                  <p className="text-charcoal/60 text-sm md:text-base font-medium mb-8 leading-relaxed">
                    Securely link your payment methods for faster, seamless
                    transactions across the marketplace.
                  </p>
                  <button className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-[#00a383] transition-all transform active:scale-95 shadow-xl shadow-primary/20">
                    Get Started with Wallet
                  </button>
                </div>
              </section>
              <div className="h-10 md:h-16"></div>
            </div>
          </main>
        </div>
      </section>
    );
}

export default ProfileCheck