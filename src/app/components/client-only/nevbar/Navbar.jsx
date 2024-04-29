"use client";
import { useState } from "react";
import Link from "next/link";
import Profilimg from "../profilimg/Profilimg";
import { useSession } from "next-auth/react";

const Navbar = ({ toggleMobileMenu }) => {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  // const { data: session } = useSession();

  const handleToggle = () => {
    setOpen(!open);
  };

  // Define menu items as an array of objects
  const menuItems = [
    { href: "/courses", text: "Courses" },
    { href: "/subscription", text: "Subscriptions" },
    { href: "/login", text: "Login" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
          {/* Profile Image (Left Side) */}
          <div className="flex items-center">
            {/* Logo */}
            <div
              className="md:hidden"
              onClick={() => setProfile(!profile)} // Toggle mobile menu when clicking the profile image
            >
              <Image
                src="pop.webp"
                alt="Profile"
                className="h-10 w-10 rounded-full cursor-pointer mr-2 md:mr-4" // Add margin to the right side in desktop mode
              />
              {profile ? <Profilimg /> : ""}
            </div>

            <span className="text-2xl font-bold cursor-pointer">
              <a href="/homepage">Gurucul skils</a>
            </span>
          </div>

          {/* Hamburger Icon (Right Side) */}
          <div className="md:hidden ml-auto">
            <button
              onClick={handleToggle}
              className="mobile-menu-button focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map(({ href, text }) => (
              <Link href={href} key={href}>
                <span className="text-lg cursor-pointer hover:text-gray-300 transition duration-300">
                  {text}
                </span>
              </Link>
            ))}
            {/* {session ? ( */}
            <>
              <div
                className="hidden md:flex"
                onClick={() => setProfile(!profile)} // Toggle mobile menu when clicking the profile image
              >
                <Image
                  src="pop.webp" // Replace with actual path to profile image
                  alt="Profile"
                  className="h-10 w-10 rounded-full cursor-pointer mr-2 md:mr-4" // Add margin to the right side in desktop mode
                />
                {profile ? <Profilimg /> : ""}
              </div>
            </>
            {/* ) : ( */}
            <></>
            {/* )} */}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            {open && (
              <div className="md:hidden absolute top-14 justify-between z-50 bg-gray-800 p-4 rounded-md right-4 flex flex-col gap-4">
                {menuItems.map(({ href, text }) => (
                  <Link href={href} key={href}>
                    <span className="text-lg cursor-pointer hover:bg-gray-700  transition duration-300">
                      {text}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
