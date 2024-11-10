"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#FFFBEB]">
      <div className="flex justify-between px-6 md:px-20 items-center py-6">
        <div className="text-[#78350F] font-bold text-3xl">
          <Link href="/">Collers</Link>
        </div>
        
        {/* Hamburger Menü Butonu (Sadece mobilde görünsün) */}
        <div className="md:hidden text-[#78350F]">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Menü Öğeleri (Mobilde açılır/kapanır, masaüstünde sabit) */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex-row md:flex items-center md:space-x-6 bg-white md:bg-transparent w-full md:w-auto absolute md:relative top-16 md:top-auto left-0 md:left-auto z-10 p-4 md:p-0 shadow-md md:shadow-none`}
        >
          <div className="text-[#78350F] font-bold text-base py-2 md:py-3 px-2">
            <Link href="#">Products</Link>
          </div>
          <div className="text-[#78350F] font-bold text-base py-2 md:py-3 px-2">
            <Link href="#">Pricing</Link>
          </div>
          <div className="text-[#78350F] font-bold text-base py-2 md:py-3 px-2">
            <Link href="#">Resources</Link>
          </div>
          <div className="text-[#78350F] font-bold text-base py-2 md:py-3 px-2">
            <Link href="#">Solutions</Link>
          </div>
          <div className="text-[#78350F] font-bold text-base py-2 md:py-3 px-2">
            <Link href="#">Log In</Link>
          </div>
          <button className="border-2 rounded-lg border-[#78350F] p-3 text-[#78350F] font-bold px-4">
            Sign up now
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
