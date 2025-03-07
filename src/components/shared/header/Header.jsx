import React, { useState, useRef, useEffect } from "react";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Menu } from "lucide-react"; // Icon for opening the mobile menu

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // Toggle sidebar/menu visibility
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu when clicking or touching outside the header
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header ref={headerRef} className="bg-background font-secondary lg:pt-3">
        <div className="relative w-full px-4 py-5 lg:py-3 lg:bg-primary lg:w-[95vw] lg:mx-auto lg:rounded-4xl lg:top-4 transform z-50">
          {/* MOBILE VERSION: Two Rows */}
          <div className="flex flex-col lg:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* Button to open the sidebar */}
                <button
                  onClick={toggleMenu}
                  className="lg:hidden focus:outline-none mr-2 text-primary"
                  aria-label="Apri menu"
                >
                  <Menu size={24} className="cursor-pointer" />
                </button>
                <Logo aria-label="Logo Wild Bicycle" />
              </div>
            </div>
          </div>

          {/* DESKTOP VERSION: Single Row */}
          <div className="hidden lg:flex items-center justify-between h-10">
            <div className="flex items-center min-w-[150px]">
              <Logo aria-label="Logo Wild Bicycle" />
            </div>
            <div className="flex items-center gap-8 mr-6">
              <nav aria-label="Navigazione principale">
                <Navbar />
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Offcanvas */}
      <Sidebar
        isOpen={menuOpen}
        toggleSidebar={toggleMenu}
        aria-label="Menu laterale"
      />
    </>
  );
};

export default Header;