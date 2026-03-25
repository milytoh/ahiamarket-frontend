export default function VendorInto() {
    return (
        <main className="min-h-screen bg-surface px-6 py-12 md:px-12 lg:px-24">
  <div className="max-w-4xl mx-auto">

  
    <section className="mb-12">
      <header className="flex justify-between items-end mb-4">
        <div>
          <span className="text-tertiary text-xs uppercase font-bold">
            Current Progress
          </span>
          <p className="font-semibold text-on-surface">
            Welcome to Ahiamarket
          </p>
        </div>
        <span className="text-sm font-medium text-on-surface-variant">
          25% Complete
        </span>
      </header>

      <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
        <div className="bg-primary h-full w-1/4 rounded-full"></div>
      </div>
    </section>

   
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      
    
      <div className="lg:col-span-7 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Start Your Selling Journey with
          <span className="text-primary">Ahiamarket</span>
        </h1>

        <p className="text-lg text-on-surface-variant mb-10 max-w-lg">
          Join thousands of vendors reaching millions of customers across the
          continent. Secure, fast, and easy to set up.
        </p>

        <div className="space-y-4 mb-12">
          <article className="benefit-card">
            <h3>Zero setup fees</h3>
            <p>Start selling without upfront costs or hidden charges.</p>
          </article>

          <article className="benefit-card">
            <h3>Fast payouts</h3>
            <p>Get your earnings deposited directly into your account.</p>
          </article>

          <article className="benefit-card">
            <h3>Powerful seller tools</h3>
            <p>Manage inventory, track sales, and grow your brand easily.</p>
          </article>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn-primary">
            Start Application
          </button>

          <button className="btn-secondary">
            Learn More
          </button>
        </div>
      </div>

      
      <aside className="lg:col-span-5 hidden lg:block">
        <div className="visual-card">
          <img src="hero.jpg" alt="Vendor working in workspace" />

          <div className="revenue-overlay">
            <p>Projected Monthly Revenue</p>
            <strong>$12,450.00</strong>
          </div>
        </div>
      </aside>
    </section>

    <section className="mt-24 pt-12 border-t grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="stat">
        <p className="stat-value">15k+</p>
        <p className="stat-label">Active Vendors</p>
      </div>

      <div className="stat">
        <p className="stat-value">24/7</p>
        <p className="stat-label">Vendor Support</p>
      </div>

      <div className="stat">
        <p className="stat-value">100%</p>
        <p className="stat-label">Secure Payments</p>
      </div>

      <div className="stat">
        <p className="stat-value">50+</p>
        <p className="stat-label">Product Categories</p>
      </div>
    </section>

  </div>
</main>
    )
}