import React, { useState } from 'react';

type Product = {
  id: number;
  title: string;
  category: string;
  price: string;
};

type CategoryCard = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

type MenProduct = {
  id: number;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
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

const categories: CategoryCard[] = [
  {
    id: 1,
    title: "Men's Collection",
    subtitle: 'Refined styles for the modern gentleman',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 2,
    title: "Women's Collection",
    subtitle: 'Elegant and sophisticated designs',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 3,
    title: 'Accessories',
    subtitle: 'Complete your look with perfect accents',
    image:
      'https://images.unsplash.com/photo-1509631171560-02e0a5a6f764?auto=format&fit=crop&w=1600&q=80',
  },
];

const menProducts: MenProduct[] = [
  { id: 1, title: 'Luxury Watch', category: 'Accessories', price: 549 },
  { id: 2, title: 'Casual Wear Collection', category: 'Clothing', price: 129 },
  { id: 3, title: 'Premium Sneakers', category: 'Footwear', price: 189, oldPrice: 249 },
  { id: 4, title: "Men's Formal Shirt", category: 'Clothing', price: 89, oldPrice: 129 },
  { id: 5, title: 'Urban Jacket', category: 'Clothing', price: 159 },
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

const IconShirt = ({ className = 'h-4 w-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4 12 6l3-2 3 2-2 4v10H8V8L6 6l3-2Z" />
  </svg>
);

const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
    <circle cx="11" cy="11" r="6" />
    <path strokeLinecap="round" d="m15.5 15.5 3.5 3.5" />
  </svg>
);

const IconMic = ({ className = 'h-5 w-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a2.5 2.5 0 0 0-2.5 2.5v4A2.5 2.5 0 0 0 12 13a2.5 2.5 0 0 0 2.5-2.5v-4A2.5 2.5 0 0 0 12 4Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 10.5A5 5 0 0 0 17 10.5M12 17.5v2M9.5 20h5" />
  </svg>
);

const IconUser = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
    <circle cx="12" cy="9" r="3.4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 19.2c.9-2.2 3.1-3.7 6-3.7s5.2 1.5 6 3.7" />
  </svg>
);

const App = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [authEmail, setAuthEmail] = useState('');
  const [authMessage, setAuthMessage] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authFirstName, setAuthFirstName] = useState('');
  const [authLastName, setAuthLastName] = useState('');

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <header className="sticky top-0 z-30 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex w-full items-center px-5 py-4 md:px-8 lg:px-10">
          <div className="text-xl font-semibold tracking-wide">ZEENKAAR</div>

          <nav className="hidden flex-1 items-center justify-center gap-12 text-sm font-medium md:flex">
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

          <div className="flex items-center gap-6 text-gray-900 md:ml-10">
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center gap-3 rounded-full border border-gray-300 bg-white px-3 py-1.5 shadow-sm">
                  <IconSearch />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search..."
                    className="w-40 bg-transparent text-sm text-gray-900 focus:outline-none md:w-56"
                  />
                  <IconMic className="h-5 w-5 text-gray-600" />
                  <button
                    aria-label="Close search"
                    className="text-sm text-gray-500 hover:text-black"
                    onClick={() => setSearchOpen(false)}
                    type="button"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button aria-label="Search" className="p-2 hover:text-gray-600" onClick={() => setSearchOpen(true)}>
                  <IconSearch />
                </button>
              )}
            </div>
            <button aria-label="Account" className="p-2 hover:text-gray-600">
              <IconUser />
            </button>
            <button aria-label="Wishlist" className="p-2 hover:text-gray-600">
              <IconHeart className="h-5 w-5" />
            </button>
            <button aria-label="Clothing" className="p-2 hover:text-gray-600">
              <IconShirt className="h-5 w-5" />
            </button>
            <div className="relative flex items-center">
              <button aria-label="Cart" className="p-2 hover:text-gray-600">
                <IconCart className="h-5 w-5" />
              </button>
              <span className="absolute -right-1.5 -top-1 flex h-5 min-w-[18px] items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold text-white leading-none">
                0
              </span>
            </div>
            <button
              className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-900 transition hover:border-black hover:bg-gray-100"
              onClick={() => {
                setAuthMode('login');
                setAuthOpen(true);
                setAuthMessage('');
                setAuthEmail('');
                setAuthPassword('');
                setAuthFirstName('');
                setAuthLastName('');
              }}
              type="button"
            >
              Login
            </button>
            <button
              className="rounded-full border border-gray-900 bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
              onClick={() => {
                setAuthMode('signup');
                setAuthOpen(true);
                setAuthMessage('');
                setAuthEmail('');
                setAuthPassword('');
                setAuthFirstName('');
                setAuthLastName('');
              }}
              type="button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-black text-white">
          <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center md:px-6 lg:px-8 lg:py-24">
            <h1 className="text-4xl font-semibold md:text-6xl">Elevate Your Style</h1>
            <p className="mt-6 max-w-3xl text-lg text-gray-200 md:text-xl">
              Discover the latest collection curated for the modern fashion enthusiast
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="border border-transparent bg-white px-8 py-3 text-sm font-medium text-black transition transform hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-lg">
                Shop New Arrivals
              </button>
              <button className="border border-white px-8 py-3 text-sm font-medium text-white transition transform hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-lg">
                Explore Collections
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f8fa]">
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Featured Products</h2>
              <p className="mt-3 text-sm text-gray-600 md:text-base">
                Handpicked selections from our latest collection, designed to make you stand out
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-80 bg-black">
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

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Shop by Category</h2>
              <p className="mt-3 text-sm text-gray-600 md:text-base">Explore our curated collections</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {categories.map((category) => (
                <article
                  key={category.id}
                  className="relative h-80 overflow-hidden rounded-2xl shadow-md transition hover:-translate-y-1 hover:shadow-lg md:h-96"
                  style={{ backgroundImage: `url(${category.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" aria-hidden="true" />
                  <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
                    <h3 className="text-3xl font-semibold">{category.title}</h3>
                    <p className="mt-2 text-base font-light">{category.subtitle}</p>
                    <button className="mt-6 border border-white px-6 py-2 text-sm font-medium transition hover:bg-white hover:text-black">
                      Shop Now
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black text-white">
          <div className="mx-auto max-w-6xl px-6 py-16 text-center md:px-8 lg:px-10 lg:py-20">
            <h2 className="text-4xl font-semibold md:text-5xl">Winter Sale</h2>
            <p className="mt-4 text-xl text-gray-200">Up to 50% off on selected items</p>
            <p className="mt-3 text-base text-gray-300">
              Limited time offer. Elevate your wardrobe with premium pieces at unbeatable prices.
            </p>
            <button className="mt-8 bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-100">
              Shop Sale Now
            </button>
          </div>
        </section>

        <section className="bg-[#f6f7f8]">
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 lg:px-10">
            <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Free Shipping', desc: 'On orders over $100', icon: 'truck' },
                { title: 'Secure Payment', desc: '100% secure transactions', icon: 'shield' },
                { title: 'Easy Returns', desc: '30-day return policy', icon: 'refresh' },
                { title: '24/7 Support', desc: 'Dedicated customer service', icon: 'headset' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                    {item.icon === 'truck' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h11v9H3zM14 9h3l2 2v4h-5z" />
                        <circle cx="7" cy="17" r="1.3" />
                        <circle cx="17" cy="17" r="1.3" />
                      </svg>
                    )}
                    {item.icon === 'shield' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5 6v6c0 4.3 3 6.8 7 9 4-2.2 7-4.7 7-9V6l-7-3Z" />
                      </svg>
                    )}
                    {item.icon === 'refresh' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M20 10a8 8 0 0 0-13.7-4.6M4 14a8 8 0 0 0 13.7 4.6" />
                      </svg>
                    )}
                    {item.icon === 'headset' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12a7 7 0 0 1 14 0v5a2 2 0 0 1-2 2h-2v-6h4M7 19H6a2 2 0 0 1-2-2v-5" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h4" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 lg:px-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-white md:h-20 md:w-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
              </svg>
            </div>
            <h3 className="mt-6 text-4xl font-semibold text-gray-900 md:text-5xl">Join Our Community</h3>
            <p className="mt-4 text-base text-gray-600 md:text-lg">
              Subscribe to get exclusive offers, style tips, and be the first to know about new arrivals
            </p>
            <form className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-300 px-5 py-4 text-base shadow-sm focus:border-black focus:outline-none sm:w-[340px]"
              />
              <button
                type="button"
                className="rounded-md bg-black px-8 py-4 text-base font-medium text-white shadow-sm transition hover:bg-gray-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <footer className="bg-black text-gray-200">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
            <div className="grid gap-12 md:grid-cols-4">
              <div className="space-y-3">
                <div className="text-2xl font-semibold tracking-wide text-white">ZEENKAAR</div>
                <p className="text-base text-gray-400">Your destination for premium fashion and timeless style.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Shop</h4>
                <div className="mt-3 space-y-2 text-base text-gray-300">
                  <a className="block hover:text-white" href="#new-arrivals">New Arrivals</a>
                  <a className="block hover:text-white" href="#men">Men</a>
                  <a className="block hover:text-white" href="#women">Women</a>
                  <a className="block hover:text-white" href="#accessories">Accessories</a>
                  <a className="block hover:text-white" href="#sale">Sale</a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Customer Service</h4>
                <div className="mt-3 space-y-2 text-base text-gray-300">
                  <a className="block hover:text-white" href="#">Contact Us</a>
                  <a className="block hover:text-white" href="#">Shipping Info</a>
                  <a className="block hover:text-white" href="#">Returns</a>
                  <a className="block hover:text-white" href="#">FAQ</a>
                  <a className="block hover:text-white" href="#">Size Guide</a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">About</h4>
                <div className="mt-3 space-y-2 text-base text-gray-300">
                  <a className="block hover:text-white" href="#">Our Story</a>
                  <a className="block hover:text-white" href="#">Careers</a>
                  <a className="block hover:text-white" href="#">Sustainability</a>
                  <a className="block hover:text-white" href="#">Press</a>
                  <a className="block hover:text-white" href="#">Affiliates</a>
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-white/10 pt-6 flex flex-col items-center justify-center gap-3">
              <div className="flex items-center gap-6">
                <a aria-label="Facebook" className="flex h-10 w-10 items-center justify-center transition hover:scale-110" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7">
                    <circle cx="12" cy="12" r="12" fill="#1877F2" />
                    <path
                      fill="#fff"
                      d="M10.9 19v-6.2H8.8V10h2.1V8.2c0-2.2 1.3-3.4 3.3-3.4.95 0 1.8.07 2.1.1v2.6h-1.4c-1 0-1.2.46-1.2 1.1V10H16l-.3 2.8h-2v6.2Z"
                    />
                  </svg>
                </a>
                <a aria-label="Instagram" className="flex h-10 w-10 items-center justify-center transition hover:scale-110" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7">
                    <defs>
                      <linearGradient id="igGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f58529" />
                        <stop offset="25%" stopColor="#feda77" />
                        <stop offset="50%" stopColor="#dd2a7b" />
                        <stop offset="75%" stopColor="#8134af" />
                        <stop offset="100%" stopColor="#515bd4" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#igGrad)" />
                    <path fill="none" stroke="#fff" strokeWidth="1.6" d="M9 6.7h6a2.3 2.3 0 0 1 2.3 2.3v6A2.3 2.3 0 0 1 15 17.3H9A2.3 2.3 0 0 1 6.7 15V9A2.3 2.3 0 0 1 9 6.7Z" />
                    <circle cx="12" cy="12" r="2.6" fill="none" stroke="#fff" strokeWidth="1.6" />
                    <circle cx="15.7" cy="8.3" r="0.8" fill="#fff" />
                  </svg>
                </a>
                <a aria-label="YouTube" className="flex h-10 w-10 items-center justify-center transition hover:scale-110" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7">
                    <rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000" />
                    <path fill="#fff" d="M10 9v6l5-3z" />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-400">Follow us for more information!</p>
            </div>
          </div>
        </footer>
      </main>

      {authOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-md">
          <div className="w-full max-w-md rounded-2xl bg-[#111] p-6 text-white shadow-2xl">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold capitalize">{authMode === 'login' ? 'Login' : 'Sign Up'}</h3>
              <button
                aria-label="Close"
                className="text-gray-400 hover:text-white"
                onClick={() => {
                  setAuthOpen(false);
                  setAuthMessage('');
                  setAuthEmail('');
                  setAuthPassword('');
                  setAuthFirstName('');
                  setAuthLastName('');
                }}
                type="button"
              >
                ✕
              </button>
            </div>
            <form
              className="mt-4 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (authMode === 'signup') {
                  if (!authFirstName.trim() || !authLastName.trim() || !authEmail.trim() || !authPassword.trim()) {
                    setAuthMessage('Please fill in first name, last name, email, and password.');
                    return;
                  }
                  setAuthMessage('Account created! Confirm your email to finish signing up.');
                } else {
                  if (!authEmail.trim() || !authPassword.trim()) {
                    setAuthMessage('Please enter email and password to continue.');
                    return;
                  }
                  setAuthMessage('Welcome back! Logging you in...');
                }
              }}
            >
              {authMode === 'signup' && (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-sm text-gray-300" htmlFor="auth-first">
                      First Name
                    </label>
                    <input
                      id="auth-first"
                      type="text"
                      placeholder="First name"
                      value={authFirstName}
                      onChange={(e) => setAuthFirstName(e.target.value)}
                      className="w-full rounded-lg border border-gray-700 bg-[#0c0c0c] px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm text-gray-300" htmlFor="auth-last">
                      Last Name
                    </label>
                    <input
                      id="auth-last"
                      type="text"
                      placeholder="Last name"
                      value={authLastName}
                      onChange={(e) => setAuthLastName(e.target.value)}
                      className="w-full rounded-lg border border-gray-700 bg-[#0c0c0c] px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}
              <div className="space-y-1">
                <label className="text-sm text-gray-300" htmlFor="auth-email">
                  Email
                </label>
                <input
                  id="auth-email"
                  type="email"
                  placeholder="Your email address"
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-700 bg-[#0c0c0c] px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-gray-300" htmlFor="auth-password">
                  Password
                </label>
                <input
                  id="auth-password"
                  type="password"
                  placeholder="Your password"
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-700 bg-[#0c0c0c] px-3 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-100"
              >
                Continue
              </button>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <span className="h-px flex-1 bg-gray-800" />
                OR
                <span className="h-px flex-1 bg-gray-800" />
              </div>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-700 bg-[#0c0c0c] px-4 py-2 text-sm font-medium text-white transition hover:border-gray-500"
                onClick={() =>
                  setAuthMessage('Redirecting to Google... (wire up OAuth in backend)')
                }
              >
                <span className="text-white">Continue with</span>
                <div className="flex items-center gap-[1px] text-base font-semibold leading-none">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#DB4437]">o</span>
                  <span className="text-[#F4B400]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#0F9D58]">l</span>
                  <span className="text-[#DB4437]">e</span>
                </div>
              </button>
              {authMessage && (
                <p className="text-xs text-gray-300">{authMessage}</p>
              )}
              <div className="text-center text-xs text-gray-400">
                {authMode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button
                  type="button"
                  className="font-semibold text-red-400 hover:text-red-300"
                  onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                >
                  {authMode === 'login' ? 'Sign up now' : 'Log in'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
