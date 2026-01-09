import { useLocation, Navigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Bell } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Main", path: "/" },
    { label: "Transactions", path: "/transactions" },
    { label: "Transfer", path: "/transfer" },
    { label: "Profile", path: "/profile" },
    { label: "Card", path: "/mycard" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const user = true;

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white/20 z-50 backdrop-blur-xl shadow-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-xl shadow-md"
          >
            <span className="text-2xl">🏦</span>
          </motion.div>
          <h1 className="text-xl font-bold text-blue-700 tracking-tight">
            Banking System
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {user ? (
            <>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative capitalize transition-colors duration-200"
                >
                  <span
                    className={`${
                      location.pathname === link.path
                        ? "text-blue-700 font-semibold"
                        : "text-gray-700 hover:text-blue-500"
                    }`}
                  >
                    {link.label}
                  </span>

                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700"
                    />
                  )}
                </Link>
              ))}

              <Link to="/notifications" className="relative">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                </motion.div>
              </Link>
              <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                logout
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          )}
        </nav>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <motion.div whileTap={{ scale: 0.9 }}>
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-3 space-y-2">
              {user ? (
                <>
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg capitalize transition-colors ${
                        location.pathname === link.path
                          ? "bg-blue-50 text-blue-700 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/notifications"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Bell className="w-5 h-5" />
                    <span>Notifications</span>
                    <span className="ml-auto w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  </Link>
                  <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                    logout
                  </button>
                </>
              ) : (
                <div className="space-y-3 px-4 py-3">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center px-4 py-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
