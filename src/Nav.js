import Logo from "./Logo/ns-teallogo-wURL-1X.png";
import React, { useState, useEffect, useRef } from "react";
import { observeSections, unobserveSections } from "./intersectionObserver";

export default function Nav() {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = observeSections((id) => setActiveSection(id));

    return () => {
      unobserveSections(observer.current);
    };
  }, []);

  // Style for the active section link
  const activeStyle = {
    color: "white",
    textDecoration: "underline",
  };

  return (
    <section id="nav" className="z-50 relative">
      <nav class="fixed w-screen z-50 top-0 bg-Charcoal/30 shadow-lg ring-1 ring-black/5 backdrop-blur border border-black border-b-2 border-b-slate-500 ">
        <div class="w-screen block ml-auto py-4 " id="navbar-default">
          <ul class="w-screen grid grid-cols-4 text-center font-medium font-Arial mt-4 border border-gray-100 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0">
            <li className={activeSection === "Home" ? "active" : ""}>
              <a
                href="#Home"
                className="block py-2 px-3 text-gray-400 hover:text-white hover:scale-105 transition duration-100  "
              >
                <p style={activeSection === "Home" ? activeStyle : {}}>Home</p>
              </a>
            </li>
            <li className={activeSection === "Quiz" ? "active" : ""}>
              <a
                href="#Quiz"
                className="block py-2 px-3 text-gray-400 hover:text-white hover:scale-105 transition duration-100"
              >
                <p style={activeSection === "Quiz" ? activeStyle : {}}>Quiz</p>
              </a>
            </li>
            <li className={activeSection === "Article" ? "active" : ""}>
              <a
                href="#Article"
                className="block py-2 px-3 text-gray-400 hover:text-white hover:scale-105 transition duration-100"
              >
                <p style={activeSection === "Article" ? activeStyle : {}}>
                  Article
                </p>
              </a>
            </li>
            <li className={activeSection === "Help" ? "active" : ""}>
              <a
                href="#Help"
                className="block py-2 px-3 text-gray-400 hover:text-white hover:scale-105 transition duration-100"
              >
                <p style={activeSection === "Help" ? activeStyle : {}}>Help</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex fixed h-screen justify-start items-center">
        <a href="https://netsafe.org.nz/" target="blank">
          <img
            className="w-40 h-16 py-4 px-5 -rotate-90 -translate-x-12 bg-Charcoal/30 shadow-lg ring-1 ring-black/5 backdrop-blur border border-slate-500"
            src={Logo}
            alt="Netsafe Logo"
          />
        </a>
      </div>
    </section>
  );
}
