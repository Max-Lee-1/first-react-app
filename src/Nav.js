import Logo from "./Logo/ns-teallogo-wURL-1X.png";
import React, { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    // Create a new IntersectionObserver instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      // Find the first section that is intersecting the viewport
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;

      // Set new viewport to active
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    // Get all sections with the "data-section" attribute
    const sections = document.querySelectorAll("[data-section]");

    // Observe each sections
    sections.forEach((section) => {
      observer.current.observe(section);
    });

    // Cleanup function to remove observer when component unmounts
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  // Style for the active section link
  const activeStyle = {
    color: "white",
    textDecoration: "underline",
  };

  return (
    <section id="nav" className="z-50 relative">
      <nav class="fixed w-screen z-50 top-0 start-0 bg-Charcoal/30 shadow-lg ring-1 ring-black/5 backdrop-blur border border-black border-b-2 border-b-slate-500 ">
        <div class="flex flex-wrap items-center justify-between py-4">
          <div class="w-full block md:ml-20 ml-auto" id="navbar-default">
            <ul class="font-medium font-Arial flex flex-col py-4 md:p-0 mt-4 border border-gray-100  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li className={activeSection === "Home" ? "active" : ""}>
                <a
                  href="#Home"
                  className="block py-2 px-3 text-gray-400 hover:text-white"
                >
                  <p style={activeSection === "Home" ? activeStyle : {}}>
                    Home
                  </p>
                </a>
              </li>
              <li className={activeSection === "Quiz" ? "active" : ""}>
                <a
                  href="#Quiz"
                  className="block py-2 px-3 text-gray-400 hover:text-white"
                >
                  <p style={activeSection === "Quiz" ? activeStyle : {}}>
                    Quiz
                  </p>
                </a>
              </li>
              <li className={activeSection === "Article" ? "active" : ""}>
                <a
                  href="#Article"
                  className="block py-2 px-3 text-gray-400 hover:text-white"
                >
                  <p style={activeSection === "Article" ? activeStyle : {}}>
                    Article
                  </p>
                </a>
              </li>
              <li className={activeSection === "Help" ? "active" : ""}>
                <a
                  href="#Help"
                  className="block py-2 px-3 text-gray-400 hover:text-white"
                >
                  <p style={activeSection === "Help" ? activeStyle : {}}>
                    Help
                  </p>
                </a>
              </li>
            </ul>
          </div>
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
