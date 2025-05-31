'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

// Design options
const designs = {
  minimal: {
    header: "bg-white border-b border-gray-100",
    logo: "text-gray-900 hover:text-blue-600",
    navLink: "text-gray-500 hover:text-blue-600",
    activeLink: "text-blue-600 font-medium",
    mobileMenu: "bg-white",
    mobileLink: "text-gray-700 hover:bg-gray-100",
    mobileActiveLink: "bg-blue-50 text-blue-600",
    mobileOverlay: "bg-black/30",
  },
  modern: {
    header: "bg-gradient-to-r from-blue-50 to-white",
    logo: "text-blue-800",
    navLink: "relative text-gray-700 px-4 py-2 transition-all duration-300 before:absolute before:inset-0 before:border before:rounded-full before:scale-0 hover:before:scale-100 hover:text-indigo-600 before:transition-transform before:duration-300 before:border-indigo-500 before:z-[-1]",
    activeLink: "text-white px-4 py-2 rounded-full bg-indigo-600 shadow-lg font-medium hover:text-white",
    mobileMenu: "bg-white shadow-xl",
    mobileLink: "text-gray-700 hover:bg-blue-50",
    mobileActiveLink: "bg-blue-100 text-blue-700",
    mobileOverlay: "bg-black/20",
  },
  dark: {
    header: "bg-gray-900",
    logo: "text-white",
    navLink: "text-gray-300 hover:text-white",
    activeLink: "text-white bg-gray-700 px-3 py-1 rounded-md",
    mobileMenu: "bg-gray-800 shadow-xl",
    mobileLink: "text-gray-300 hover:bg-gray-700",
    mobileActiveLink: "bg-gray-700 text-white",
    mobileOverlay: "bg-black/40",
  },
};

export default function Navbar({ design = 'modern' }: { design?: keyof typeof designs }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const style = designs[design];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/about", label: "About" },
    {href: "/contact", label: "Contact"}
  ];

  return (
    <header className={clsx("sticky top-0 z-50", style.header)}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="/"
            className={clsx(
              "text-xl font-semibold flex items-center space-x-2 transition-colors",
              style.logo
            )}
          >
            <span>🌍</span>
            <span>Travel Explorer</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "transition-colors duration-200 text-sm px-3 py-2",
                  style.navLink,
                  pathname === link.href && style.activeLink
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsx(
                "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                design === 'dark' ? 'text-white' : 'text-gray-700'
              )}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={clsx(
        "md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        {/* Clickable overlay background */}
        <div 
          className={clsx(
            "absolute inset-0 transition-opacity duration-300",
            style.mobileOverlay,
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu content */}
        <div className={clsx(
          "relative z-50 w-64 h-full transform transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          style.mobileMenu
        )}>
          <div className="flex flex-col h-full">
            <div className="px-4 pt-5 pb-2 flex items-center justify-between">
              <Link
                href="/"
                className={clsx(
                  "text-xl font-semibold flex items-center space-x-2",
                  design === 'dark' ? 'text-white' : 'text-gray-900'
                )}
                onClick={() => setIsOpen(false)}
              >
                <span>🌍</span>
                <span>Travel Explorer</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "p-2 rounded-md",
                  design === 'dark' ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'
                )}
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-grow px-2 pt-2 pb-4 space-y-1 overflow-y-auto">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                    style.mobileLink,
                    pathname === link.href && style.mobileActiveLink
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}