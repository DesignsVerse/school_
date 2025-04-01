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
  { title: "Contact", path: "/contact" },
];

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  // Close menu on scroll
  const handleScroll = () => {
    if (navigationOpen) {
      setNavigationOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigationOpen]);

  // Close menu on link click
  const handleLinkClick = () => {
    setNavigationOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full py-4 ${
        stickyMenu ? "bg-white shadow-md transition duration-100" : "bg-gradient-to-r from-blue-50 to-purple-50"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <a href="/" className="flex flex-col items-center">
            <Image 
              src="/images/logo/logo.png" 
              alt="Eduor Logo" 
              width={60} 
              height={36}
              className="ml-0 xl:ml-6"
            />
            <span className="hidden xl:block text-2xl font-bold text-gray-800 mt-2">
              Bethel Sec. School
            </span>
          </a>
        </div>

        {/* Hamburger Toggle for Mobile */}
        <button
          aria-label="hamburger Toggler"
          className="block xl:hidden"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          <span className="relative block h-5.5 w-5.5 cursor-pointer">
            <span className="absolute right-0 block h-full w-full">
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-gray-800 duration-200 ease-in-out ${
                  !navigationOpen ? "!w-full delay-300" : "w-0"
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-gray-800 delay-150 duration-200 ease-in-out ${
                  !navigationOpen ? "delay-400 !w-full" : "w-0"
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-gray-800 delay-200 duration-200 ease-in-out ${
                  !navigationOpen ? "!w-full delay-500" : "w-0"
                }`}
              ></span>
            </span>
            <span className="absolute right-0 h-full w-full rotate-45">
              <span
                className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-gray-800 delay-300 duration-200 ease-in-out ${
                  !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                }`}
              ></span>
              <span
                className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-gray-800 duration-200 ease-in-out ${
                  !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                }`}
              ></span>
            </span>
          </span>
        </button>

        {/* Navigation Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out xl:static xl:h-auto xl:w-auto xl:bg-transparent xl:shadow-none xl:transform-none ${
            navigationOpen ? "translate-x-0" : "translate-x-full xl:translate-x-0"
          }`}
        >
          <nav className="pt-20 xl:pt-0">
            <ul className="flex flex-col gap-4 p-4 xl:flex-row xl:gap-8 xl:p-0 xl:items-center">
              {menuData.map((menuItem, key) => (
                <li key={key}>
                  <Link
                    href={menuItem.path || "#"}
                    onClick={handleLinkClick}
                    className={
                      pathUrl === menuItem.path
                        ? "text-orange-500"
                        : "text-gray-600 hover:text-orange-500"
                    }
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
              {/* Call Now Button */}
              <li className="p-4 xl:p-0">
                <Link
                  href="/call-now"
                  onClick={handleLinkClick}
                  className="rounded-full bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
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