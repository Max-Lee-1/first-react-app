import Logo from "./Logo/ns-teallogo-wURL-1X.png";
import React, { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    //create new instance and pass a callback function
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;
      //Update state with the visible section ID
      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    });

    //Get custom attribute data-section from all sections
    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });
    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
    textDecoration: "underline",
  };

  return (
    <section id="nav" className="z-50 relative">
      <nav class="fixed w-screen z-50 top-0 start-0 bg-black/20 shadow-lg ring-1 ring-black/5 backdrop-blur">
        <div class="flex flex-wrap items-center justify-between p-4">
          {/*
      className={
                    activeId === "section-1" ? "text-red-500" : "text-gray-500"
                  }
                  */}
          <div
            class="hidden w-full md:block md:w-auto ml-20"
            id="navbar-default"
          >
            <ul class="font-medium flex flex-col py-4 md:p-0 mt-4 border border-gray-100  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li
                className={activeSection === "Home" ? "active" : ""}
                class="block py-2 px-3"
              >
                <a
                  href="#Home"
                  style={activeSection === "Home" ? activeStyle : {}}
                >
                  Home
                </a>
              </li>
              <li
                className={activeSection === "Quiz" ? "active" : ""}
                class="block py-2 px-3"
              >
                <a
                  href="#Quiz"
                  style={activeSection === "Quiz" ? activeStyle : {}}
                >
                  Quiz
                </a>
              </li>
              <li
                className={activeSection === "Article" ? "active" : ""}
                class="block py-2 px-3"
              >
                <a
                  href="#Article"
                  style={activeSection === "Article" ? activeStyle : {}}
                >
                  Article
                </a>
              </li>
              <li
                className={activeSection === "Help" ? "active" : ""}
                class="block py-2 px-3"
              >
                <a
                  href="#Help"
                  style={activeSection === "Help" ? activeStyle : {}}
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex fixed h-screen justify-start items-center">
        <a href="https://netsafe.org.nz/" target="blank">
          <img
            className="w-40 h-16 py-4 px-5 -rotate-90 -translate-x-12 bg-black/20 shadow-lg ring-1 ring-black/5 backdrop-blur"
            src={Logo}
            alt="Netsafe Logo"
          />
        </a>
      </div>
    </section>
  );
}
