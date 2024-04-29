import nasefLogo from "./Logo/Network of Academic and Scholastic Esports Federations White@2x.png";
import hgLogo from "./Logo/HG Logo Horizontal White.png";
import ttLogo from "./Logo/TakeThis_logo_horizontal_white-1.png";

export default function Help() {
  return (
    <section
      data-section
      id="Help"
      className="w-screen min-h-screen z-10 relative my-20"
    >
      <div className="h-screen flex flex-col justify-center items-center lg:mx-20 mx-10">
        <h1 className="font-Proxima w-1/2 self-center text-center text-white lg:text-5xl text-4xl font-bold my-2">
          Something to confess?
        </h1>
        <p className="font-Arial w-full self-center text-center text-white text-xl font-normal my-4">
          Netsafe is an internationally renowned independent not for profit
          organization with an unrelenting focus on online safety practices.
        </p>
        <div className="container flex flex-row justify-center items-center gap-8 my-2">
          <a
            className="w-auto h-1/10 bg-gradient-to-r from-Teal-main to-Sulu/[0.8] p-4 rounded-lg hover:scale-105 transition duration-100"
            href="https://report.netsafe.org.nz/hc/en-au/requests/new"
            target="_blank"
          >
            <p className="font-Arial text-white text-sm text-center">
              Make A Report
            </p>
          </a>
          <a
            className="w-auto h-1/10 bg-gradient-to-r from-Teal-main to-Sulu/[0.8] p-4 rounded-lg hover:scale-105 transition duration-100"
            href="https://netsafe.org.nz/contact-us/"
            target="_blank"
          >
            <p className="font-Arial text-white text-sm text-center">
              Contact Us Here
            </p>
          </a>
        </div>
      </div>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="font-Proxima w-1/2 self-center text-center text-white text-5xl font-bold my-2">
          Other Sites That Can Help You
        </h1>
        <div className="w-screen h-screen flex justify-center items-center absolute drop-shadow-lg">
          <a
            className="-translate-x-40 -translate-y-36 hover:scale-105 transition duration-100"
            href="https://www.nasef.org/"
            target="blank"
          >
            <img className="w-56 h-24" src={nasefLogo} alt="NASEF Logo" />
          </a>
          <a
            className="-translate-x-48 translate-y-32 hover:scale-105 transition duration-100"
            href="https://www.healthygamer.gg"
            target="blank"
          >
            <img className="w-36 h-12" src={hgLogo} alt="Healthy Gamer Logo" />
          </a>
          <a
            className="translate-x-10 -translate-y-24 hover:scale-105 transition duration-100"
            href="https://www.takethis.org/"
            target="blank"
          >
            <img className="w-40 h-12" src={ttLogo} alt="Take This Logo" />
          </a>
        </div>
      </div>
    </section>
  );
}
