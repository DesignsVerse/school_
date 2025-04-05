"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image';

const menuData = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Faculty", path: "/faculty" },
  { title: "Events", path: "/events" },
  { title: "Blog", path: "/blog" },
  { title: "Admission", path: "/admissionForm" },
  { title: "Notice Board", path: "/noticeboard" },
  { title: "Contact", path: "/contact" },
];

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 80);
  };

  // Close menu on scroll
  const handleScroll = () => {
    navigationOpen && setNavigationOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigationOpen]);

  const handleLinkClick = () => setNavigationOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full py-4 ${
        stickyMenu ? "bg-white" : "bg-gradient-to-r from-blue-50 to-purple-50"
      } transition-all duration-300`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <a href="/" className="flex flex-col items-center">
            <Image 
              src="/images/logo/logo.png" 
              alt="School Logo" 
              width={60} 
              height={36}
              className="ml-0 xl:ml-6"
            />
            <span className="hidden xl:block text-2xl font-bold text-gray-800 mt-2">
              Bethel Sec. School
            </span>
          </a>
        </div>

        {/* Hamburger/Cross Button */}
        <button
          aria-label="Toggle navigation menu"
          className="xl:hidden relative z-50 h-8 w-8 focus:outline-none"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2">
            <span
              className={`block absolute h-[2px] w-full bg-gray-800 rounded transition-all duration-300 origin-center
                ${navigationOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}
            />
            <span
              className={`block absolute h-[2px] w-full bg-gray-800 rounded transition-opacity duration-300
                ${navigationOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block absolute h-[2px] w-full bg-gray-800 rounded transition-all duration-300 origin-center
                ${navigationOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}
            />
          </div>
        </button>

        {/* Navigation Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white transition-transform duration-300 ease-in-out
            xl:relative xl:h-auto xl:w-auto xl:bg-transparent xl:translate-x-0
            ${navigationOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ zIndex: 40 }}
        >
          <nav className="pt-20 xl:pt-0">
            <ul className="flex flex-col gap-6 p-6 xl:flex-row xl:gap-8 xl:p-0 xl:items-center">
              {menuData.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    href={menuItem.path}
                    onClick={handleLinkClick}
                    className={`text-lg hover:text-orange-500 transition-colors ${
                      pathUrl === menuItem.path ? 'text-orange-500 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
              <li className="mt-4 xl:mt-0">
                <Link
                  href="/call-now"
                  onClick={handleLinkClick}
                  className="inline-block rounded-full bg-orange-500 px-6 py-2.5 text-white
                    hover:bg-orange-600 transition-colors duration-300"
                >
                  Call Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
