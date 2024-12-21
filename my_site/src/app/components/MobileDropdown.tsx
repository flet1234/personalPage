"use client";
import { useEffect, useState, useRef } from "react";

export default function MobileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e:Event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
     setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown); // Handle escape key
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown); // Handle escape key
    };
  }, []);


  return (
    <div className=" z-50 mr-4 flex flex-col lg:hidden" ref={dropdownRef}>
      <div onClick={toggleMenu} className="focus:outline-none cursor-pointer">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_83_4005)">
            <path
              d="M19.1667 10.9757H0.833333C0.373332 10.9757 0 10.6024 0 10.1424C0 9.68241 0.373332 9.30908 0.833333 9.30908H19.1667C19.6267 9.30908 20 9.68241 20 10.1424C20 10.6024 19.6267 10.9757 19.1667 10.9757Z"
              fill="white"
            />
            <path
              d="M19.1667 4.58683H0.833333C0.373332 4.58683 0 4.2135 0 3.7535C0 3.2935 0.373332 2.92017 0.833333 2.92017H19.1667C19.6267 2.92017 20 3.2935 20 3.7535C20 4.2135 19.6267 4.58683 19.1667 4.58683Z"
              fill="white"
            />
            <path
              d="M19.1667 17.3644H0.833333C0.373332 17.3644 0 16.9911 0 16.5311C0 16.0711 0.373332 15.6978 0.833333 15.6978H19.1667C19.6267 15.6978 20 16.0711 20 16.5311C20 16.9911 19.6267 17.3644 19.1667 17.3644Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_83_4005">
              <rect width="20" height="20" fill="white" transform="translate(0 0.159668)" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-20 right-0 overflow-y-visible w-40 transition-all duration-300 origin-top transform bg-secondBackground text-background rounded ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        {isOpen && (
          <div className="flex-col items-center my-2">
            <ul className="flex flex-col text-xl items-center space-y-2">
              <li className="hover:bg-sky-800 w-8/12 text-center h-8 hover:border-x-2 border-background border-dashed">
                <a href="#home">Home</a>
              </li>
              <li className="hover:bg-sky-800 w-8/12 text-center h-8 hover:border-x-2 border-background border-dashed">
                <a href="#about">About</a>
              </li>
              <li className="hover:bg-sky-800 w-8/12 text-center h-8 hover:border-x-2 border-background border-dashed">
                <a href="#skills">Skills</a>
              </li>
              <li className="hover:bg-sky-800 w-8/12 text-center h-8 hover:border-x-2 border-background border-dashed">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:bg-sky-800 w-8/12 text-center h-8 hover:border-x-2 border-background border-dashed">
                <a href="#contacts">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
