'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, ChevronRight, X } from "lucide-react";
import { BsPlus } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import Image from "next/image";
import { MobileFilms } from "./nav-compo";

const mainNavItems = [
  "New & Notable",
  "Skin Care",
  "Hand & Body",
  "Home",
  "Hair",
  "Fragrance",
  "Kits & Travel",
  "Gifts",
];

const bottomNavItems = [
  ["Read", "Log in"],
  ["Stores", "Live assistance"],
  ["Facial Appointments", ""],
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Disable scroll when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <header className="relative">
      {/* Notification Bars */}
      <div className="bg-[#252525] text-white px-4 py-2 text-xs sm:text-sm text-center">
        <p>
          Kindly note, due to the Christmas public holidays, the processing of
          orders may be delayed. Conditions apply.
        </p>
      </div>
      <div className="bg-black text-white px-4 py-2 text-xs sm:text-sm text-center">
        <div className="hover:border-b duration-500 ease-in-out border-white flex items-center justify-center">
          <p className="mr-2">
            Enjoy complimentary shipping on orders over $400. Click and Collect
            is now available in Hong Kong.
          </p>
          <BsPlus size={20} color="#fffef2" />
        </div>
      </div>

      {/* Header */}
      <div className="bg-[#fffef2] px-4 py-3 sm:px-6 sm:py-5 md:px-10 md:py-7 w-full z-40">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
        {/* Hamburger Menu Icon */}
        <Image
                src="/ae.png"
                alt="Aesop"
                width={90}
                height={25}
                className="object-contain md:hidden"
              />
        {/* Main Navigation for Desktop */}
        <nav className="hidden md:flex gap-4 lg:gap-8 flex-wrap">
          {mainNavItems.map((item) => (
            <Link
          key={item}
          href="#"
          className="text-xs lg:text-sm underline-offset-4 whitespace-nowrap hover:underline"
            >
          {item}
            </Link>
          ))}
          <button aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
        </nav>

        {/* Right Navigation */}
        <nav className="flex  sm:gap-4 md:gap-8 text-xs sm:text-sm items-center gap-4">
          <button aria-label="Search (mobile)">
            <Search className="h-5 w-5 md:hidden" />
          </button>
          <button aria-label="Wishlist">
            <Heart className="h-5 w-5" />
          </button>
          <div>Cart</div>
          <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiOutlineMenu className="h-6 w-6" />
        </button>
        </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-hidden">
          <div className="flex flex-col h-screen">
            {/* Header */}
            <div className="flex justify-between items-center px-5 py-4 border-b border-[#e6e6e6]">
              <Image
                src="/ae.png"
                alt="Aesop"
                width={90}
                height={25}
                className="object-contain"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="p-2"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Main Navigation */}
              <nav className="flex flex-col">
                {mainNavItems.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="flex items-center justify-between px-5 py-4 border-b border-[#e6e6e6] text-[16px] font-light"
                  >
                    <span>{item}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                ))}
              </nav>

              {/* Bottom Navigation */}
              <div className="px-5 py-8">
                <div className="grid grid-cols-2 gap-y-6">
                  {bottomNavItems.map((row, idx) =>
                    row.map(
                      (item, i) =>
                        item && (
                          <Link
                            key={`${idx}-${i}`}
                            href="#"
                            className="text-[15px] text-gray-600 font-light"
                          >
                            {item}
                          </Link>
                        )
                    )
                  )}
                </div>
              </div>

              <MobileFilms />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
