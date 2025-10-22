import { Button } from "@/components/ui/button";
import { Moon, Sun, Grid, Sparkles, ArrowRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface HeaderProps {
  onAdminToggle?: () => void;
  onProductsFetch?: () => void;
}

export default function Header({
  onAdminToggle,
  onProductsFetch,
}: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [productsLoading, setProductsLoading] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Auto-detect demo mode based on hostname
    const isDemo =
      window.location.hostname !== "127.0.0.1" &&
      window.location.hostname !== "localhost";
    setIsDemoMode(isDemo);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleProductsFetch = async () => {
    if (productsLoading || !onProductsFetch) return;

    setProductsLoading(true);
    try {
      await onProductsFetch();
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setProductsLoading(false);
    }
  };

  const navLinks = [
    { href: "/#modules", label: "AI Modules" },
    { href: "/features", label: "Features" },
    { href: "/live-demo", label: "Live Demo" },
    { href: "/customers", label: "Customers" },
    { href: "/api", label: "API" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-brand-purple to-brand-blue rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <Link
                to="/"
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-brand-purple to-brand-blue bg-clip-text text-transparent"
                onClick={closeMobileMenu}
              >
                UPFISTA
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm lg:text-base text-gray-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-purple transition-colors duration-200 font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="text-gray-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-purple p-2"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
              {onProductsFetch && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleProductsFetch}
                  disabled={productsLoading}
                  className="hidden lg:flex text-gray-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-purple"
                >
                  <Grid className="w-4 h-4 mr-2" />
                  {productsLoading ? "Loading..." : "Products"}
                </Button>
              )}
              {onAdminToggle && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onAdminToggle}
                  className="hidden lg:flex text-gray-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-purple"
                >
                  Admin
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="hidden lg:flex text-gray-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-purple"
                asChild
              >
                <Link to="/login">Sign In</Link>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple-dark hover:to-brand-blue-dark text-white px-3 lg:px-4"
                asChild
              >
                <Link to="/live-demo">
                  <span className="hidden lg:inline">Try AI Demo</span>
                  <span className="lg:hidden">Demo</span>
                  <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1 lg:ml-2" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button and Essential Actions */}
            <div className="flex md:hidden items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="text-gray-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-purple p-2"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-brand-purple dark:hover:text-brand-purple p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-[73px] left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="container mx-auto px-4 py-6">
              {/* Navigation Links */}
              <nav className="space-y-4 mb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={closeMobileMenu}
                    className="block text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-purple dark:hover:text-brand-purple transition-colors duration-200 py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                {onProductsFetch && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      handleProductsFetch();
                      closeMobileMenu();
                    }}
                    disabled={productsLoading}
                    className="w-full justify-center text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:text-brand-purple dark:hover:text-brand-purple hover:border-brand-purple"
                  >
                    <Grid className="w-4 h-4 mr-2" />
                    {productsLoading ? "Loading..." : "Products"}
                  </Button>
                )}
                {onAdminToggle && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      onAdminToggle();
                      closeMobileMenu();
                    }}
                    className="w-full justify-center text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:text-brand-purple dark:hover:text-brand-purple hover:border-brand-purple"
                  >
                    Admin
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="w-full justify-center text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:text-brand-purple dark:hover:text-brand-purple hover:border-brand-purple"
                  asChild
                >
                  <Link to="/login" onClick={closeMobileMenu}>Sign In</Link>
                </Button>
                <Button
                  className="w-full justify-center bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple-dark hover:to-brand-blue-dark text-white"
                  asChild
                >
                  <Link to="/live-demo" onClick={closeMobileMenu}>
                    Try AI Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
