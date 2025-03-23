import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="flex justify-between px-5 py-2 bg-primary sticky top-0 z-10">
      <a className="font-bold text-black" href="#">
        R.Chandrasoodan
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a
              target="_blank"
              className="relative inline-block w-[60px] text-white font-medium group"
              href="/resume/file.pdf"
            >
              Resume
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden ">
          <ul className="flex flex-col text-white mobile-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a
                target="_blank"
                className="relative inline-block w-[60px] text-white font-medium group"
                href="/resume/file.pdf"
              >
                Resume
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-secondary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
};

export default Header;
