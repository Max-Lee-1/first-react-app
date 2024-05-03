import Logo from "./Logo/ns-teallogo-wURL-1X.png";
import React, { useState, useEffect, useRef } from "react";
import { observeSections, unobserveSections } from "./intersectionObserver";

export default function Nav() {
  const [activeSection, setActiveSection] = useState(null);

  const observer = useRef(null);

  console.log(observer.current);
  useEffect(() => {
    observer.current = observeSections((id) => {
      setActiveSection(id);
    });

    return () => {
      unobserveSections(observer.current);
    };
  }, []);

  // Style for the active section link
  const activeStyle = {
    display: "block",
    color: "white",
    textDecoration: "underline",
  };

  const hiddenStyle = {
    display: "none",
  };

  return (
    <section id="nav" className="z-50 relative">
      <nav
        className={`fixed w-screen flex z-50 top-0 left-0 bg-Navy/50 shadow-lg backdrop-blur border border-black border-b-2 border-b-slate-500 `}
        style={activeSection === "Landing" ? hiddenStyle : {}}
      >
        <div
          class="w-screen block py-4 justify-center items-center"
          id="navbar-default"
        >
          <ul class="w-screen grid grid-cols-4 text-center font-medium font-Arial border-gray-100">
            <li>
              <a
                href="#Home"
                className="block py-2 px-3 font-Arial md:text-xl text-base text-gray-600 hover:text-white hover:scale-105 transition duration-100  "
              >
                <div style={activeSection === "Home" ? activeStyle : {}}>
                  Home
                </div>
              </a>
            </li>
            <li>
              <a
                href="#Quiz"
                className="block py-2 px-3 font-Arial md:text-xl text-base text-gray-600 hover:text-white hover:scale-105 transition duration-100"
              >
                <div style={activeSection === "Quiz" ? activeStyle : {}}>
                  Quiz
                </div>
              </a>
            </li>
            <li>
              <a
                href="#Article"
                className="block py-2 px-3 font-Arial md:text-xl text-base text-gray-600 hover:text-white hover:scale-105 transition duration-100"
              >
                <div style={activeSection === "Article" ? activeStyle : {}}>
                  Article
                </div>
              </a>
            </li>
            <li>
              <a
                href="#Help"
                className="block py-2 px-3 font-Arial md:text-xl text-base text-gray-600 hover:text-white hover:scale-105 transition duration-100"
              >
                <div style={activeSection === "Help" ? activeStyle : {}}>
                  Help
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex fixed h-screen justify-start items-center">
        <a href="https://netsafe.org.nz/" target="blank">
          <img
            className="md:w-40 md:h-16 w-32 h-12 md:py-4 py-2 md:px-4 px-3 -rotate-90 md:-translate-x-12 -translate-x-10 bg-Charcoal/30 shadow-lg ring-1 ring-black/5 backdrop-blur border border-slate-500"
            src={Logo}
            alt="Netsafe Logo"
          />
        </a>
      </div>
    </section>
  );
}
