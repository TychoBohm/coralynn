// app/components/Navbar.tsx

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineSearch,
} from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Trigger load-in animaties
    setHasLoaded(true);

    // Scroll listener voor achtergrond opacity
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Interpoleer opacity van 0 naar 1 tussen 0 en 100vh
      const opacity = Math.min(scrollY / viewportHeight, 1);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full px-10 py-6 flex justify-between items-center z-50 transition-colors duration-300"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${scrollOpacity * 0.95})`,
        backdropFilter: scrollOpacity > 0 ? "blur(8px)" : "none",
      }}
    >
      {/* Links: Logo met slide-in van links */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        animate={hasLoaded ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 3.4 }}
        className="text-2xl font-bold tracking-wider"
        style={{ color: scrollOpacity > 0.5 ? "#000" : "#fff" }}
      >
        CORALYNN
      </motion.h2>

      {/* Midden: Nav links met slide-in van boven */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={hasLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 3.5 }}
        className="flex gap-8 text-lg"
      >
        <a
          href="#shop"
          className={`hover:opacity-70 transition-opacity duration-200 relative ${
            pathname === "/" ? "font-semibold" : ""
          }`}
          style={{ color: scrollOpacity > 0.5 ? "#000" : "#fff" }}
        >
          Shop
          {pathname === "/" && (
            <span
              className="absolute -bottom-1 left-0 w-full h-[2px]"
              style={{ backgroundColor: scrollOpacity > 0.5 ? "#000" : "#fff" }}
            />
          )}
        </a>
        <a
          href="#about"
          className={`hover:opacity-70 transition-opacity duration-200 relative ${
            pathname === "/about" ? "font-semibold" : ""
          }`}
          style={{ color: scrollOpacity > 0.5 ? "#000" : "#fff" }}
        >
          About
          {pathname === "/about" && (
            <span
              className="absolute -bottom-1 left-0 w-full h-[2px]"
              style={{ backgroundColor: scrollOpacity > 0.5 ? "#000" : "#fff" }}
            />
          )}
        </a>
        <a
          href="#contact"
          className={`hover:opacity-70 transition-opacity duration-200 relative ${
            pathname === "/contact" ? "font-semibold" : ""
          }`}
          style={{ color: scrollOpacity > 0.5 ? "#000" : "#fff" }}
        >
          Contact
          {pathname === "/contact" && (
            <span
              className="absolute -bottom-1 left-0 w-full h-[2px]"
              style={{ backgroundColor: scrollOpacity > 0.5 ? "#000" : "#fff" }}
            />
          )}
        </a>
      </motion.div>

      {/* Rechts: Webshop iconen met slide-in van rechts */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={hasLoaded ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 3.6 }}
        className="flex gap-6 items-center"
      >
        <button
          className="hover:opacity-70 transition-opacity duration-200"
          aria-label="Search"
        >
          <HiOutlineSearch
            className="w-6 h-6"
            style={{ color: scrollOpacity > 0.5 ? "#000" : "#fff" }}
          />
        </button>
        <button
          className="hover:opacity-70 transition-opacity duration-200"
          aria-label="Wishlist"
        >
          <HiOutlineHeart
            className="w-6 h-6"
            style={{ color: scrollOpacity > 0.5 ? "#000" : "#fff" }}
          />
        </button>
        <button
          className="hover:opacity-70 transition-opacity duration-200"
          aria-label="Profile"
        >
          <HiOutlineUser
            className="w-6 h-6"
            style={{ color: scrollOpacity > 0.5 ? "#000" : "#fff" }}
          />
        </button>
        <button
          className="hover:opacity-70 transition-opacity duration-200 relative"
          aria-label="Shopping Cart"
        >
          <HiOutlineShoppingBag
            className="w-6 h-6"
            style={{ color: scrollOpacity > 0.5 ? "#000" : "#fff" }}
          />
        </button>
      </motion.div>
    </nav>
  );
}
