
import {
  MdStorefront,
  MdBadge,
  MdInventory2,
  MdVerified,
  MdAccountCircle,
  MdPayments,
  MdBolt,
  MdConstruction,
  MdTrendingUp,
  MdArrowForward,
} from "react-icons/md";


export default function VendorInto() { 


  return (
    <div className="bg-background-light font-sans text-text-main antialiased min-h-screen overflow-x-hidden">
      <div className="flex min-h-screen ">
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-6 py-10 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <span className="text-xs font-bold tracking-wider uppercase text-slate-500">
                    Current Progress
                  </span>
                  <p className="font-semibold text-lg text-text-main">
                    Welcome to Ahiamarket
                  </p>
                </div>
                <span className="text-sm font-medium text-slate-600">
                  25% Complete
                </span>
              </div>
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-1/4 rounded-full transition-all duration-500" />
              </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Hero Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-text-main">
                  Start Your Selling Journey with{" "}
                  <span className="text-primary">Ahiamarket</span>
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
                  Join thousands of vendors reaching millions of customers
                  across the continent. Secure, fast, and easy to set up.
                </p>

                {/* Benefits */}
                <div className="space-y-4 mb-12">
                  {[
                    {
                      icon: MdPayments,
                      title: "Zero setup fees",
                      desc: "Start selling without any upfront costs or hidden charges.",
                    },
                    {
                      icon: MdBolt,
                      title: "Fast payouts",
                      desc: "Get your earnings deposited directly into your account in record time.",
                    },
                    {
                      icon: MdConstruction,
                      title: "Powerful seller tools",
                      desc: "Manage inventory, track sales, and grow your brand with ease.",
                    },
                  ].map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border-light hover:shadow transition-all group cursor-default"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <benefit.icon size={26} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-text-main">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-slate-600">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-10 py-4 bg-primary hover:bg-brand-green text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                    Start Application
                    <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="px-10 py-4 text-emerald-700 font-bold hover:bg-emerald-50 transition-colors rounded-lg border border-border-light">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Right Column - Visual Card */}
              <div className="lg:col-span-5 hidden lg:block">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border-light bg-white p-2">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGtvvdkMhv8RLkU49vL6aJ0Q-BNUyk-wGrceXUiWUr9dYh--5ieezqFaB5dgXann60HwXFTgBRE9u8GbqYbYH0BKTZmoldztQkprvUCkgC3G5YVrNfVGmNt4PWkwEfT7ZZh2eVC3zl0MOrJ350mpX9vbjnGFoQuQCj7g8FpSALDYDqOz8mw7oasDl3TKiHboWBOGix3j3JneROGU9JLvsmbe3ljuLdUFZnJxkg0P2Quk4Hm-MJTpaNVY5Njtm4XNihIdmEoUOK84i1"
                      alt="Modern entrepreneur in workspace"
                      className="w-full h-full object-cover"
                    />

                    {/* Revenue Overlay Card */}
                    <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                          <MdTrendingUp size={24} className="text-primary" />
                        </div>
                        <span className="text-[10px] font-bold px-3 py-1 bg-emerald-100 text-primary rounded-full">
                          LIVE DATA
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-700 mb-1">
                        Projected Monthly Revenue
                      </p>
                      <p className="text-xl font-black text-primary">
                        ₦12,450,677.00
                      </p>
                      <div className="mt-4 flex gap-1 h-1">
                        <div className="bg-primary w-1/4 rounded-full" />
                        <div className="bg-primary w-1/5 rounded-full" />
                        <div className="bg-primary/40 w-1/3 rounded-full" />
                        <div className="bg-primary/20 w-1/6 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Stats */}
            <div className="mt-24 pt-12 border-t border-border-light grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "15k+", label: "Active Vendors" },
                { value: "24/7", label: "Vendor Support" },
                { value: "100%", label: "Secure Payments" },
                { value: "50+", label: "Product Categories" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-text-main">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 font-medium tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
 