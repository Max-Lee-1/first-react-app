export default function Background() {
  const translateLeft = document.querySelectorAll(".parallax-left");
  const translateRight = document.querySelectorAll(".parallax-right");
  const translateUp = document.querySelectorAll(".parallax-up");
  const translateDown = document.querySelectorAll(".parallax-down");

  function parallax() {
    const y = window.scrollY;
    const x = window.scrollX;

    // Translate layers to the left
    translateLeft.forEach((layer) => {
      layer.style.transform = `translateX(${0.3 * x}px)`;
    });

    // Translate layers to the right
    translateRight.forEach((layer) => {
      layer.style.transform = `translateX(${-0.3 * x}px)`;
    });

    // Translate layers upward
    translateUp.forEach((layer) => {
      layer.style.transform = `translateY(${-0.3 * y}px)`;
    });

    // Translate layers downward
    translateDown.forEach((layer) => {
      layer.style.transform = `translateY(${0.3 * y}px)`;
    });
  }

  window.addEventListener("scroll", parallax, false);

  return (
    <section id="Background" className="z-10 fixed">
      <div className="w-screen h-screen fixed bg-gradient-to-r from-gray-500 to-black opacity-50 z-50 " />
      <div className="relative w-screen h-screen z-10">
        <div className="layer parallax-up bg-circle-2 absolute -right-60 -top-80 bg-Chambray/[0.5] rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-2 absolute -top-96 -left-36 bg-teal-500 rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-2 absolute -right-36 top-72 bg-Rock-Blue rounded-full drop-shadow-2xl" />
        <div className="layer parallax-up bg-circle-1 absolute -top-96 -left-48 bg-Chambray rounded-full drop-shadow-2xl" />
      </div>
      <div className="relative w-screen h-screen z-10"></div>
      <div className="relative w-screen h-screen z-10"></div>
    </section>
  );
}
