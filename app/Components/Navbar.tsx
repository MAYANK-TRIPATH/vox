"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isAgentsDropdownOpen, setIsAgentsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAgentsDropdownOpen, setIsMobileAgentsDropdownOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsAgentsDropdownOpen(false);
    setIsMobileAgentsDropdownOpen(false);
  };

  const handleAgentsDropdownToggle = () => {
    setIsAgentsDropdownOpen(!isAgentsDropdownOpen);
    setIsMobileMenuOpen(false);
  };

  const handleMobileAgentsDropdownToggle = () => {
    setIsMobileAgentsDropdownOpen(!isMobileAgentsDropdownOpen);
  };

  return (
   <div className="relative">
    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-[rgb(67,44,65)] to-gray-900">
      <div className="flex flex-shrink-0 ml-4">
        <Image src="/logo.webp" alt="logo" width={70} height={60} />
      </div>
      
      {/* Desktop View */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
          About
        </Link>
        <div className="relative">
          <button
            onClick={handleAgentsDropdownToggle}
            className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors"
          >
            Agents
            <svg
              className={`w-4 h-4 transition-transform ${isAgentsDropdownOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isAgentsDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
              <Link
                href="/agents/chat"
                className="block px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition-colors"
                onClick={() => setIsAgentsDropdownOpen(false)}
              >
                <div>Laura</div>
                <div className="text-gray-600 text-xs">Home Warranty</div>
              </Link>
              <Link
                href="/agents/assistant"
                className="block px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition-colors"
                onClick={() => setIsAgentsDropdownOpen(false)}
              >
                <div>Steven</div>
                <div className="text-gray-600 text-xs">Auto Insurance</div>
              </Link>
              <Link
                href="/agents/support"
                className="block px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 transition-colors"
                onClick={() => setIsAgentsDropdownOpen(false)}
              >
                <div>Rachel</div>
                <div className="text-gray-600 text-xs">Life Insurance</div>
              </Link>
            </div>
          )}
        </div>
        <button className="bg-white text-black font-semibold text-sm px-4 py-2 mr-5 rounded-md hover:bg-gray-100 transition-colors">
          Request a Demo
        </button>
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden mr-4">
        <button
          onClick={handleMobileMenuToggle}
          className="text-white p-2"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="absolute top-full left-0 right-0 bg-white md:hidden  border-t border-gray-200 shadow-lg">
        <div className="flex flex-col p-4 space-y-4">
          <Link 
            href="/" 
            className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-black hover:text-gray-600 transition-colors text-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <div className="space-y-2">
            <button
              onClick={handleMobileAgentsDropdownToggle}
              className="flex items-center justify-between w-full text-black text-lg font-semibold"
            >
              <span>Agents</span>
              <svg
                className={`w-5 h-5 transition-transform ${isMobileAgentsDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMobileAgentsDropdownOpen && (
              <div className="ml-4 space-y-3">
                <Link
                  href="/agents/chat"
                  className="block text-black hover:text-gray-600 transition-colors"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileAgentsDropdownOpen(false);
                  }}
                >
                  <div className="font-semibold">Laura</div>
                  <div className="text-gray-600 text-sm">Home Warranty</div>
                </Link>
                <Link
                  href="/agents/assistant"
                  className="block text-black hover:text-gray-600 transition-colors"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileAgentsDropdownOpen(false);
                  }}
                >
                  <div className="font-semibold">Steven</div>
                  <div className="text-gray-600 text-sm">Auto Insurance</div>
                </Link>
                <Link
                  href="/agents/support"
                  className="block text-black hover:text-gray-600 transition-colors"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileAgentsDropdownOpen(false);
                  }}
                >
                  <div className="font-semibold">Rachel</div>
                  <div className="text-gray-600 text-sm">Life Insurance</div>
                </Link>
              </div>
            )}
          </div>
          <button className="bg-black text-white font-semibold text-md px-4 py-3 rounded-md hover:bg-gray-800 transition-colors w-full">
            Request a Demo
          </button>
        </div>
      </div>
    )}
   </div>
  );
}