import wave from "./img/stacked-waves-haikei(edit).png";
import bgGradient from "./img/blurry-gradient-haikei.svg";
import bgCircle1 from "./img/circle-scatter-haikei (2).svg";
import bgCircle2 from "./img/circle-scatter-haikei (3).svg";
import a from "./img/image_fx_digital_illustration_of_a_harmonious_gaming_c.jpg";
import b from "./img/image_fx_digital_illustration_on_helping_out_cyber_bul.jpg";
import c from "./img/image_fx_digital_illustration_on__too_much_gaming_scre.jpg";
import d from "./img/image_fx_digital_illustration_on_helping_out_gaming_me.jpg";

export default function Background() {
  function parallax() {
    const y = window.scrollY;
    for (let i = 0; i < document.querySelectorAll(".layer").length; i++) {
      // Translate layers to the left
      document.querySelectorAll(".parallax-left").forEach((layer) => {
        layer.style.transform = `translateX(${1.75 * y}px)`;
      });

      // Translate layers to the left (faster rate)
      document.querySelectorAll(".parallax-left-fast").forEach((layer) => {
        layer.style.transform = `translateX(${4.75 * y}px)`;
      });

      // Translate layers to the right
      document.querySelectorAll(".parallax-right").forEach((layer) => {
        layer.style.transform = `translateX(${-1.75 * y}px)`;
      });

      // Translate layers upward
      document.querySelectorAll(".parallax-up").forEach((layer) => {
        layer.style.transform = `translateY(${-1.75 * y}px)`;
      });

      // Translate layers downward
      document.querySelectorAll(".parallax-down").forEach((layer) => {
        layer.style.transform = `translateY(${1.75 * y}px)`;
      });

      // Making layers slowly appearing by scroll
      document.querySelectorAll(".parallax-appear").forEach((layer) => {
        layer.style.opacity = `${y / 500 - 1}`;
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
    <section id="Background" className="z-10 relative bg-Navy">
      <div className="fixed w-screen h-screen bg-gradient-to-r from-gray-500 to-black opacity-50 z-50" />
      {/* Landing Background 
      <div className="fixed w-screen h-screen z-30">
        <div className="layer parallax-up bg-circle-2xl fixed -right-60 -top-80 bg-Blue-Indigo rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-xl fixed -top-96 -left-36 bg-Rock-Blue rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-xl fixed top-56 left-96 bg-Navy rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-lg fixed -top-60 -left-48 bg-Teal-bright rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-base fixed top-80 -left-56 bg-Navy rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-xl fixed top-[50vh] -left-20 bg-Blue-Indigo rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-xl fixed top-72 -right-36 bg-Teal-bright rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-base fixed -top-72 -right-36 bg-Navy rounded-full drop-shadow-2xl" />
      </div>*/}
      {/* Hazards Background */}
      <div className="fixed w-screen h-screen z-20">
        <div className="layer parallax-down bg-circle-xl fixed -top-[200vh] -left-60 bg-Teal-main rounded-full drop-shadow-2xl" />
        <div className="layer parallax-down bg-circle-2xl fixed -top-[200vh] -right-[50vw] bg-Chambray rounded-full drop-shadow-2xl" />
        <div className="layer parallax-down bg-circle-base fixed -top-[180vh] right-80 bg-Navy rounded-full drop-shadow-2xl" />
        <div className="layer parallax-down bg-circle-base fixed -top-[220vh] right-[35vw] bg-Rock-Blue rounded-full drop-shadow-2xl" />
        <div className="layer parallax-down bg-circle-2xl fixed -top-[110vh] -left-32 bg-Navy rounded-full drop-shadow-2xl" />
      </div>
      {/* About Background */}
      <div className="fixed w-screen h-screen z-10">
        <div className="layer parallax-left bg-circle-2xl fixed -top-36 -left-[150vh] bg-Chambray rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-xl fixed -top-36 -left-[265vh] bg-Rock-Blue rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-lg fixed -top-[25vh] -left-[380vh] bg-Teal-main rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-2xl fixed top-[25vh] -left-[425vh] bg-Navy rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-base fixed -bottom-60 -left-[275vh] bg-Teal-main rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-lg fixed -top-[50vh] -left-[175vh] bg-Navy rounded-full drop-shadow-2xl" />
      </div>
      {/* Quiz Background */}
      <div className="relative top-[300vh] z-40">
        <img
          className="mix-blend-darken w-screen h-80 absolute -top-[10vh] z-40"
          src={wave}
        />
        <img
          className="mix-blend-darken w-screen aspect-video absolute object-cover object-right z-50 opacity-50"
          src={bgGradient}
        />
        <div className="absolute bg-Blue-Indigo w-screen aspect-video"></div>
      </div>
      {/* Article Background */}
      <div className="relative top-[400vh] z-40">
        <img
          className=" w-screen aspect-video absolute top-[50vh] object-cover object-right z-30"
          src={bgCircle2}
        />
      </div>
      {/* Help Background */}
      <div className="relative top-[600vh] z-0">
        <img
          className="layer parallax-appear bg-circle-lg fixed right-[15vw] top-10 rounded-full drop-shadow-2xl"
          src={a}
        />
        <img
          className="layer parallax-appear bg-circle-base fixed -left-5 -top-5 rounded-full drop-shadow-2xl"
          src={b}
        />
        <img
          className="layer parallax-appear bg-circle-lg fixed left-[15vw] -bottom-[25vh] rounded-full drop-shadow-2xl"
          src={c}
        />
        <img
          className="layer parallax-appear bg-circle-base fixed right-4 bottom-0 rounded-full drop-shadow-2xl"
          src={d}
        />
      </div>
    </section>
  );
}
