import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-white">
        <div className="mx-auto flex w-full items-center justify-between px-5 py-5 md:px-8 lg:px-10">
          <div className="text-xl font-semibold tracking-wide">ZEENKAAR</div>

          <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
            <a className="hover:text-gray-600" href="#new-arrivals">
              New Arrivals
            </a>
            <a className="hover:text-gray-600" href="#men">
              Men
            </a>
            <a className="hover:text-gray-600" href="#women">
              Women
            </a>
            <a className="hover:text-gray-600" href="#accessories">
              Accessories
            </a>
            <a className="hover:text-gray-600" href="#sale">
              Sale
            </a>
          </nav>

          <div className="flex items-center gap-4 text-gray-800">
            <button aria-label="Search" className="p-2 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="6" />
                <path strokeLinecap="round" d="m15.5 15.5 3.5 3.5" />
              </svg>
            </button>
            <button aria-label="Account" className="p-2 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
              >
                <circle cx="12" cy="9" r="3.4" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 19.2c.9-2.2 3.1-3.7 6-3.7s5.2 1.5 6 3.7"
                />
              </svg>
            </button>
            <button aria-label="Wishlist" className="p-2 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20s-6.5-3.8-6.5-9A3.5 3.5 0 0 1 12 9.5 3.5 3.5 0 0 1 18.5 11c0 5.2-6.5 9-6.5 9Z"
                />
              </svg>
            </button>
            <button aria-label="Cart" className="p-2 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 6h16l-1.2 7.1a1.5 1.5 0 0 1-1.5 1.3H8.3a1.5 1.5 0 0 1-1.5-1.3L6 4.8a1 1 0 0 0-1-.8H3"
                />
                <circle cx="9.5" cy="19" r="1" />
                <circle cx="16.5" cy="19" r="1" />
              </svg>
            </button>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
              0
            </div>
          </div>
        </div>
      </header>

      <main className="bg-black text-white">
        <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center md:max-w-6xl md:px-8 md:py-28 lg:px-10 lg:py-32">
          <h1 className="text-4xl font-semibold md:text-6xl">Elevate Your Style</h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200 md:text-xl">
            Discover the latest collection curated for the modern fashion enthusiast
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="border border-transparent bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-gray-100">
              Shop New Arrivals
            </button>
            <button className="border border-white px-8 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black">
              Explore Collections
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
