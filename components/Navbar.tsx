import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const WelcomeHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const appDownloadUrl =
    "https://expo.dev/accounts/nati2362/projects/v1/builds/1d943ad6-703e-4527-b15c-46b374c15453";

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and Title Link */}
        <Link
          href="/"
          className="flex gap-3 items-center text-3xl font-extrabold cursor-pointer group"
        >
          <Image
            src="/asuLogo.png"
            className="rounded-full transition-transform duration-300 group-hover:scale-110"
            alt="ASU Logo"
            width={50}
            height={50}
          />
          <h1 className="hidden sm:block text-slate-200 transition-colors duration-300 group-hover:text-green-400">
            Student Assistance
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex lg:space-x-8 items-center">
          <Link
            href="/platform"
            className="text-slate-300 hover:text-green-400 transition-colors duration-300 font-medium"
          >
            Platform
          </Link>
          <Link
            href="/features"
            className="text-slate-300 hover:text-green-400 transition-colors duration-300 font-medium"
          >
            Features
          </Link>
          <Link
            href="/howItWorks"
            className="text-slate-300 hover:text-green-400 transition-colors duration-300 font-medium"
          >
            How it works
          </Link>
        </nav>

        {/* Get the app button for desktop */}
        <div className="hidden lg:flex items-center">
          <Link
            href={appDownloadUrl}
            className="rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300 font-semibold px-6 py-3 shadow-lg"
          >
            Get the app
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex lg:hidden items-center gap-4">
          <Link
            href={appDownloadUrl}
            className="rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-300 font-semibold px-6 py-3 shadow-lg"
          >
            Get the app
          </Link>
          <button
            onClick={toggleMenu}
            className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 pb-4 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col items-center space-y-4 pt-2">
            <Link
              href="/platform"
              onClick={toggleMenu}
              className="text-slate-300 hover:text-green-400 font-medium text-lg"
            >
              Platform
            </Link>
            <Link
              href="/features"
              onClick={toggleMenu}
              className="text-slate-300 hover:text-green-400 font-medium text-lg"
            >
              Features
            </Link>
            <Link
              href="/howItWorks"
              onClick={toggleMenu}
              className="text-slate-300 hover:text-green-400 font-medium text-lg"
            >
              How it works
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default WelcomeHeader;
