import nasefLogo from "./Logo/Network of Academic and Scholastic Esports Federations White@2x.png";
import hgLogo from "./Logo/HG Logo Horizontal White.png";
import ttLogo from "./Logo/TakeThis_logo_horizontal_white-1.png";

export default function Help() {
  return (
    <section
      data-section
      id="Help"
      className="relative z-10 w-screen min-h-screen my-20"
    >
      <div className="flex flex-col items-center justify-center h-screen mx-10 lg:mx-20 snap-start">
        <div className="self-center w-2/3 my-2 text-4xl font-bold text-center text-white font-Proxima lg:text-5xl">
          Something to confess?
        </div>
        <div className="self-center w-2/3 h-auto my-4 text-xl font-normal text-center text-white font-Arial">
          Netsafe is an internationally renowned independent not for profit
          organization with an unrelenting focus on online safety practices.
        </div>
        <div className="container flex flex-row items-center justify-center gap-4 my-2 lg:gap-8">
          <a
            className="w-auto h-1/10 bg-gradient-to-r from-Teal-main to-Sulu/[0.8] p-4 rounded-lg hover:scale-105 transition duration-100"
            href="https://report.netsafe.org.nz/hc/en-au/requests/new"
            target="_blank"
          >
            <div className="text-base font-normal text-center text-white font-Proxima">
              Make A Report
            </div>
          </a>
          <a
            className="w-auto h-1/10 bg-gradient-to-r from-Teal-main to-Sulu/[0.8] p-4 rounded-lg hover:scale-105 transition duration-100"
            href="https://netsafe.org.nz/contact-us/"
            target="_blank"
          >
            <div className="text-base font-normal text-center text-white font-Proxima">
              Contact Us Here
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen snap-start">
        <div className="self-center w-[50vw] my-2 text-4xl font-bold text-center text-white lg:text-5xl font-Proxima">
          Other Sites That Can Help You
        </div>
        <div className="absolute flex items-center justify-center w-screen h-screen drop-shadow-lg">
          <a
            className="transition duration-100 translate-x-6 sm:translate-x-2 md:-translate-x-20 lg:-translate-x-40 xl:-translate-x-56 -translate-y-36 hover:scale-105"
            href="https://www.nasef.org/"
            target="blank"
          >
            <img
              className="w-56 h-24"
              src={nasefLogo}
              alt="NASEF Logo"
              loading="lazy"
            />
          </a>
          <a
            className="transition duration-100 -translate-x-20 translate-y-32 md:-translate-x-28 lg:-translate-x-48 xl:-translate-x-60 hover:scale-105"
            href="https://www.healthygamer.gg"
            target="blank"
            loading="lazy"
          >
            <img
              className="h-12 w-36"
              src={hgLogo}
              alt="Healthy Gamer Logo"
              loading="lazy"
            />
          </a>
          <a
            className="transition duration-100 -translate-x-6 -translate-y-24 md:translate-x-10 lg:translate-x-16 xl:translate-x-36 hover:scale-105"
            href="https://www.takethis.org/"
            target="blank"
          >
            <img
              className="w-40 h-12"
              src={ttLogo}
              alt="Take This Logo"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
