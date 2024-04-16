export default function Background() {
  // Function to handle parallax effect
  function parallax() {
    const y = window.scrollY;
    for (let i = 0; i < document.querySelectorAll(".layer").length; i++) {
      // Translate layers to the left
      document.querySelectorAll(".parallax-left").forEach((layer) => {
        layer.style.transform = `translateX(${1.75 * y}px)`;
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
    <section id="Background" className="z-10 fixed">
      <div className="w-screen h-screen fixed bg-gradient-to-r from-gray-500 to-black opacity-50 z-50 " />
      {/* Landing Background */}
      <div className="fixed w-screen h-screen z-30">
        <div className="layer parallax-up bg-circle-2xl fixed -right-60 -top-80 bg-Rhino rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-xl fixed -top-96 -left-36 bg-Teal-bright rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-xl fixed top-56 left-96 bg-Navy rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-lg fixed -top-60 -left-48 bg-Rock-Blue rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-base fixed top-80 -left-56 bg-Rhino rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-xl fixed top-[50vh] -left-20 bg-Blue-Indigo rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-xl fixed top-72 -right-36 bg-Rock-Blue rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-base fixed -top-72 -right-36 bg-Teal-bright rounded-full drop-shadow-2xl" />
      </div>
      {/* Hazards Background */}
      <div className="relative w-screen h-screen z-20">
        <div className="layer parallax-down bg-circle-xl fixed -top-[200vh] -left-60 bg-Teal-bright rounded-full drop-shadow-2xl" />
        <div className="layer parallax-down bg-circle-2xl fixed -top-[200vh] -right-[50vw] bg-Blue-Indigo rounded-full drop-shadow-2xl" />
        <div className="layer parallax-down bg-circle-base fixed -top-[180vh] right-80 bg-Chambray rounded-full drop-shadow-2xl" />
        <div className="layer parallax-down bg-circle-base fixed -top-[220vh] right-[35vw] bg-Rhino rounded-full drop-shadow-2xl" />
        <div className="layer parallax-down bg-circle-2xl fixed -top-[110vh] -left-32 bg-Rock-Blue rounded-full drop-shadow-2xl" />
      </div>
      {/* About Background */}
      <div className="relative w-screen h-screen z-10">
        <div className="layer parallax-left bg-circle-2xl fixed -top-36 -left-[150vh] bg-Blue-Indigo rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-xl fixed -top-36 -left-[265vh] bg-Rock-Blue rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-lg fixed -top-[25vh] -left-[380vh] bg-Teal-bright rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-2xl fixed top-[25vh] -left-[425vh] bg-Rhino rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-base fixed -bottom-60 -left-[275vh] bg-Teal-bright rounded-full drop-shadow-2xl" />
        <div className="layer parallax-left bg-circle-lg fixed -top-[50vh] -left-[175vh] bg-Rhino rounded-full drop-shadow-2xl" />
      </div>
    </section>
  );
}
