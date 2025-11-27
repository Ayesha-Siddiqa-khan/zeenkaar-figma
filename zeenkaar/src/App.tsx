import React from 'react';

type Product = {
  id: number;
  title: string;
  category: string;
  price: string;
};

const products: Product[] = [
  { id: 1, title: 'Designer Handbag', category: 'Accessories', price: '$299' },
  { id: 2, title: 'Premium Sneakers', category: 'Footwear', price: '$189' },
  { id: 3, title: 'Luxury Watch', category: 'Watches', price: '$549' },
  { id: 4, title: 'Fashion Accessories Set', category: 'Accessories', price: '$149' },
  { id: 5, title: 'Modern Jacket', category: 'Men', price: '$259' },
  { id: 6, title: 'Statement Necklace', category: 'Jewelry', price: '$129' },
  { id: 7, title: 'Minimalist Backpack', category: 'Accessories', price: '$179' },
  { id: 8, title: 'Everyday Heels', category: 'Women', price: '$199' },
];

const IconHeart = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20s-6.5-3.8-6.5-9A3.5 3.5 0 0 1 12 9.5 3.5 3.5 0 0 1 18.5 11c0 5.2-6.5 9-6.5 9Z" />
  </svg>
);

const IconCart = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 6h16l-1.2 7.1a1.5 1.5 0 0 1-1.5 1.3H8.3a1.5 1.5 0 0 1-1.5-1.3L6 4.8a1 1 0 0 0-1-.8H3" />
    <circle cx="9.5" cy="19" r="1" />
    <circle cx="16.5" cy="19" r="1" />
  </svg>
);

const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
    <circle cx="11" cy="11" r="6" />
    <path strokeLinecap="round" d="m15.5 15.5 3.5 3.5" />
  </svg>
);

const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
    <circle cx="12" cy="9" r="3.4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 19.2c.9-2.2 3.1-3.7 6-3.7s5.2 1.5 6 3.7" />
  </svg>
);

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex w-full items-center justify-between px-5 py-4 md:px-8 lg:px-10">
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
              <IconSearch />
            </button>
            <button aria-label="Account" className="p-2 hover:text-gray-600">
              <IconUser />
            </button>
            <button aria-label="Wishlist" className="p-2 hover:text-gray-600">
              <IconHeart className="h-5 w-5" />
            </button>
            <button aria-label="Cart" className="p-2 hover:text-gray-600">
              <IconCart className="h-5 w-5" />
            </button>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-semibold text-white">
              0
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-black text-white">
          <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center md:max-w-7xl md:px-10 md:py-28 lg:px-16 lg:py-32">
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
        </section>

        <section className="bg-[#f7f8fa]">
          <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 lg:px-10">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Featured Products</h2>
              <p className="mt-3 text-sm text-gray-600 md:text-base">
                Handpicked selections from our latest collection, designed to make you stand out
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-64 bg-black">
                    <div className="absolute inset-0 bg-black opacity-0 transition group-hover:opacity-10" aria-hidden="true" />
                    <div className="absolute right-3 top-3 flex items-center gap-2 text-gray-800 opacity-0 transition group-hover:opacity-100">
                      <button className="rounded-full bg-white p-2 shadow hover:text-black" aria-label="Add to wishlist">
                        <IconHeart />
                      </button>
                      <button className="rounded-full bg-white p-2 shadow hover:text-black" aria-label="Add to cart">
                        <IconCart />
                      </button>
                    </div>
                    <button className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-gray-900 opacity-0 shadow transition group-hover:opacity-100">
                      <IconCart />
                      Quick Add
                    </button>
                  </div>
                  <div className="px-4 pb-5 pt-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500">{product.category}</p>
                    <h3 className="mt-1 text-lg font-medium text-gray-900">{product.title}</h3>
                    <p className="mt-2 text-lg font-semibold text-gray-900">{product.price}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <button className="border border-gray-900 px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white">
                View All Products
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
