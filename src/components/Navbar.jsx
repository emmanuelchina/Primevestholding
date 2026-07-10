import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";


export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scroll
            ? "bg-white shadow-md"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between bg-gray-200">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            PrimeVest
            <span className="text-orange-500">Holdings</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/investments">Investments</a>
            <a href="/plans">Plans</a>
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact</a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="hover:text-orange-500 font-medium"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-3xl"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-50 p-6"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-3xl"
                >
                  <HiX />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-6 text-lg font-medium">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/investments">Investments</a>
                <a href="/faq">FAQ</a>
                <a href="/contact">Contact</a>

                <hr />

                <Link to="/login">Login</Link>

                <Link
                  to="/register"
                  className="bg-orange-500 text-white text-center py-3 rounded-full"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}