import community from "./img/image_fx_digital_illustration_of_a_harmonious_gaming_c.jpg";
import mentalHealth from "./img/image_fx_digital_illustration_on_helping_out_cyber_bul.jpg";
import excessiveGaming from "./img/image_fx_digital_illustration_on__too_much_gaming_scre.jpg";
import excessiveGaming2 from "./img/image_fx_digital_illustration_on_helping_out_gaming_me.jpg";
import React, { useState, useEffect, useRef } from "react";
import { observeSections, unobserveSections } from "./intersectionObserver";

export default function Background() {
  const [activeSection, setActiveSection] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = observeSections((id) => setActiveSection(id));

    return () => {
      unobserveSections(observer.current);
    };
  }, []);

  function parallax() {
    const pageY = window.scrollY; // Measuring page y axis
    let sectionY = 0; // Initialize sectionY

    if (activeSection) {
      const activeSectionElement = document.getElementById(activeSection);
      if (activeSectionElement) {
        sectionY = activeSectionElement.getBoundingClientRect().top;
      }
    }

    for (let i = 0; i < document.querySelectorAll(".layer").length; i++) {
      // Translate layers to the left
      document.querySelectorAll(".parallax-left").forEach((layer) => {
        layer.style.transform = `translateX(${1.75 * pageY}px)`;
      });

      // Translate layers to the left (faster rate)
      document.querySelectorAll(".parallax-left-fast").forEach((layer) => {
        layer.style.transform = `translateX(${4.75 * pageY}px)`;
      });

      // Translate layers to the right
      document.querySelectorAll(".parallax-right").forEach((layer) => {
        layer.style.transform = `translateX(${-1.75 * pageY}px)`;
      });

      // Translate layers upward
      document.querySelectorAll(".parallax-up").forEach((layer) => {
        layer.style.transform = `translateY(${-1.75 * pageY}px)`;
      });

      // Translate layers downward
      document.querySelectorAll(".parallax-down").forEach((layer) => {
        layer.style.transform = `translateY(${1.75 * pageY}px)`;
      });

      // Making layers slowly appearing by scroll
      document.querySelectorAll(".parallax-appear").forEach((layer) => {
        layer.style.opacity =
          activeSection === "Help" ? `${1 - sectionY / 510}` : "0";
      });
    }
  }

  // Add event listener to handle parallax effect on scroll and resize
  document.addEventListener("scroll", () => {
    requestAnimationFrame(parallax);
  });

  window.addEventListener("resize", () => {
    requestAnimationFrame(parallax);
  });

  // Call parallax function once after initial rendering to apply effect immediately
  requestAnimationFrame(parallax);

  return (
    <section id="Background" className="z-10 relative">
      {/* Landing Background */}
      <div className="fixed w-screen h-screen z-30 brightness-50">
        <div className="layer parallax-up bg-circle-2xl fixed -right-60 lg:-right-60 -top-80 lg:bg-Blue-Indigo bg-Teal-dim rounded-full drop-shadow-2xl brightness-50"></div>
        <div className="layer parallax-up bg-circle-xl fixed md:-top-96 -top-10 md:-left-36 -left-12 bg-Rock-Blue rounded-full drop-shadow-2xl brightness-75"></div>
        <div className="layer parallax-up bg-circle-xl fixed top-56 xl:left-[20vw] lg:left-72 md:left-12 left-60 bg-Navy rounded-full drop-shadow-2xl brightness-90"></div>
        <div className="layer parallax-up bg-circle-lg fixed md:-top-60 -top-32 md:-left-48 -left-40 bg-Teal-bright rounded-full drop-shadow-2xl brightness-90"></div>
        <div className="layer parallax-up bg-circle-base fixed lg:top-80 md:top-56 top-48 md:-left-56 -left-36 bg-Navy rounded-full drop-shadow-2xl brightness-125"></div>
        <div className="layer parallax-up bg-circle-xl fixed lg:top-[50vh] md:top-[40vh] top-[45vh] lg:-left-20 -left-40 bg-Blue-Indigo rounded-full drop-shadow-2xl brightness-75"></div>
        <div className="layer parallax-up bg-circle-xl fixed lg:top-72 md:-bottom-[75vh] top-[60vh] xl:-right-60 lg:-right-72 md:-right-60 sm:-right-40 -right-60 bg-Teal-bright rounded-full drop-shadow-2xl brightness-90"></div>
        <div className="layer parallax-up bg-circle-base fixed lg:-top-72 -top-24 md:-right-36 -right-24 lg:bg-Navy bg-Blue-Indigo rounded-full drop-shadow-2xl" />
      </div>
      {/* Hazards Background */}
      <div className="fixed w-screen h-screen z-20 brightness-50">
        <div className="layer parallax-down bg-circle-2xl fixed lg:-top-[200vh] -top-[180vh] lg:-right-[50vw] -right-[30vw] lg:bg-Rock-Blue bg-Navy rounded-full drop-shadow-2xl brightness-100" />
        <div className="layer parallax-down xs:bg-circle-base bg-circle-lg fixed md:-top-[150vh] -top-[175vh] 2xl:right-80 xl:right-60 md:-left-[25vw] left-[35vw] lg:bg-Navy bg-Rock-Blue rounded-full drop-shadow-2xl brightness-75" />
        <div className="layer parallax-down bg-circle-base fixed lg:hidden -top-[200vh] right-[35vw] lg:bg-Rock-Blue bg-Teal-main rounded-full drop-shadow-2xl brightness-100" />
        <div className="layer parallax-down bg-circle-2xl fixed md:-top-[120vh] -top-[130vh] -left-56 bg-Chambray rounded-full drop-shadow-2xl brightness-75" />
        <div className="layer parallax-down bg-circle-xl fixed lg:-top-[220vh] -top-[80vh] lg:-left-[40vw] -left-60 bg-Teal-main rounded-full drop-shadow-2xl " />
        <div className="layer parallax-down bg-circle-2xl fixed lg:top-0 -top-[45vh] -left-32 lg:bg-Chambray bg-Rock-Blue rounded-full drop-shadow-2xl brightness-75" />
        <div className="layer parallax-down bg-circle-2xl fixed -bottom-[10vh] -right-32 bg-Navy rounded-full drop-shadow-2xl" />
      </div>
      {/* About Background */}
      <div className="fixed w-screen h-screen z-10 brightness-50">
        <div className="layer parallax-left bg-circle-2xl fixed lg:-top-36 -bottom-[50vh] lg:-left-[150vh] -left-[375vh] bg-Chambray rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-xl fixed -top-36 -left-[265vh] bg-Rock-Blue rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left lg:bg-circle-lg bg-circle-2xl fixed lg:-top-[25vh] -bottom-[25vh] lg:-left-[380vh] -left-[300vh] bg-Teal-main rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-2xl fixed  lg:top-[25vh] -top-[25vh] lg:-left-[425vh] -left-[350vh] lg:bg-Rhino bg-Navy rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-base fixed lg:-bottom-60 bottom-[10vh] lg:-left-[275vh] -left-[375vh] lg:bg-Navy bg-Teal-main rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-lg fixed -top-[50vh] -left-[175vh] bg-Navy rounded-full drop-shadow-2xl" />
      </div>
      {/* Help Background */}
      <div className="relative top-[600vh] z-0">
        <img
          className="layer parallax-appear bg-circle-lg fixed lg:right-[15vw] -right-[10vw] lg:top-10 top-[10vh] rounded-full drop-shadow-2xl brightness-50"
          src={community}
        />
        <img
          className="layer parallax-appear bg-circle-base fixed -left-5 -top-5 rounded-full drop-shadow-2xl brightness-50"
          src={mentalHealth}
        />
        <img
          className="layer parallax-appear bg-circle-lg fixed lg:left-[15vw] -left-[5vw] lg:-bottom-[25vh] -bottom-[5vh] rounded-full drop-shadow-2xl brightness-50"
          src={excessiveGaming}
        />
        <img
          className="layer parallax-appear bg-circle-base fixed lg:right-4 -right-[10vw] lg:bottom-0 bottom-[15vh] rounded-full drop-shadow-2xl brightness-50"
          src={excessiveGaming2}
        />
      </div>
    </section>
  );
}
