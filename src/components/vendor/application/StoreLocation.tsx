


import StoreLocationForm from './StoreLocationForm';

export default function StoreLocation() {
  return (
    <div className="bg-background-light text-text-main min-h-screen font-sans overflow-x-hidden">
      <div className="flex flex-1 pt-16">
        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <header className="mb-10">
              <h1 className="text-4xl font-extrabold tracking-tight text-text-main mb-2">
                Location Information
              </h1>
              <p className="text-slate-600">
                Tell us where your business is physically located to help with logistics and local tax compliance.
              </p>
            </header>

            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  Step 3 of 4: Physical Presence
                </span>
                <span className="text-xs font-medium text-slate-600">75% Complete</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[75%] rounded-full" />
              </div>
            </div>

            {/* Form Component */}
            <StoreLocationForm />

            {/* Trust Badges */}
            <div className="mt-12 flex items-center justify-center gap-6 opacity-40 grayscale">
              <div className="h-8 w-8 bg-slate-300 rounded" /> {/* Placeholder for security badge */}
              <div className="h-8 w-8 bg-slate-300 rounded" /> {/* Placeholder for logistics badge */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

