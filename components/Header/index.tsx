"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuData = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Faculty", path: "/faculty" },
  { title: "Blog", path: "/blog" },
  { title: "Admission", path: "/admissionForm", },
  { title: "Contact", path: "/contact" },
];

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
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

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full py-4 ${
        stickyMenu ? "bg-white shadow-md transition duration-100" : "bg-gradient-to-r from-blue-50 to-purple-50"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🎓</span>
            <span className="text-2xl font-bold text-gray-800">Eduor</span>
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
          className={`${
            navigationOpen
              ? "mt-4 flex flex-col rounded-md bg-white p-4 shadow-md xl:flex xl:flex-row xl:items-center xl:p-0 xl:shadow-none"
              : "hidden xl:flex xl:items-center"
          } w-full xl:w-auto`}
        >
          <nav>
  <ul className="flex flex-col gap-4 xl:flex-row xl:gap-8">
    {menuData.map((menuItem, key) => (
      <li key={key}>
        <Link
          href={menuItem.path || "#"}
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
  </ul>
</nav>

          {/* Learn More Button */}
          <div className="mt-4 xl:ml-8 xl:mt-0">
            <Link
              href="/learn-more"
              className="rounded-full bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;