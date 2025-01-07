'use client'
import { useState } from "react";
import Link from "next/link";
import { Search } from 'lucide-react';
import { BsPlus } from "react-icons/bs";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const mainNavItems = [
  "New & Notable",
  "Gifts",
  "Skin Care",
  "Hand & Body",
  "Home",
  "Hair",
  "Fragrance",
  "Kits & Travel",
  "Read",
  "Stores",
  "Facial Appointments",
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="cursor-pointer">
      {/* Notification Bars */}
      <div className="bg-[#252525] text-white px-4 py-2 text-xs sm:text-sm text-center">
        <p>Kindly note, due to the Christmas public holidays, the processing of orders may be delayed. Conditions apply.</p>
      </div>
      <div className="bg-black text-white px-4 py-2 text-xs sm:text-sm text-center">
        <div className="hover:border-b duration-500 ease-in-out border-white flex items-center justify-center">
          <p className="mr-2">Enjoy complimentary shipping on orders over $400. Click and Collect is now available in Hong Kong.</p>
          <BsPlus size={20} color="#fffef2" />
        </div>
      </div>

      {/* Header */}
      <div className="bg-[#fffef2] px-4 py-3 sm:px-6 sm:py-5 md:px-10 md:py-7">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            {/* Hamburger Menu Icon */}
            <HiOutlineMenu
              className="h-6 w-6 md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            {/* Main Navigation for Desktop */}
            <nav className="hidden md:flex gap-4 lg:gap-8 flex-wrap">
              {mainNavItems.map((item) => (
                <Link key={item} href="#" className="text-xs lg:text-sm underline-offset-4 whitespace-nowrap">
                  {item}
                </Link>
              ))}
              <Search className="h-5 w-5" />
            </nav>

            {/* Right Navigation (Log in, Cabinet, Cart) */}
            <nav className="flex gap-2 sm:gap-4 md:gap-8 text-xs sm:text-sm">
              <div>Log in</div>
              <div>Cabinet</div>
              <div>Cart</div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#fffef2] z-50 overflow-y-auto">
          <div className="px-4 py-6">
            <div className="flex justify-between items-center mb-6">
              <div className="text-lg font-semibold">Menu</div>
              <HiOutlineX
                className="h-6 w-6 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
            <nav className="flex flex-col gap-4">
              {mainNavItems.map((item) => (
                <Link key={item} href="#" className="text-sm underline-offset-4 py-2 border-b border-gray-200">
                  {item}
                </Link>
              ))}
            </nav>

            {/* Slider Section */}
            <div className="mt-8">
              <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/p1.png')" }}>
                <div className="absolute bottom-5 left-5 text-white">
                  <h2 className="text-2xl font-bold">Slider Title</h2>
                  <p className="text-sm">This is some content for the slider.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
