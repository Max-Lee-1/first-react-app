export default function Landing() {
  return (
    <section id="Landing" className="z-40 w-screen h-screen relative">
      <div className="w-screen h-screen flex justify-center items-center absolute">
        <h1 className="w-1/3 text-center text-white text-5xl font-bold drop-shadow-lg">
          Are You A Toxic Gamer?
        </h1>
      </div>
      {/*<div className="scroll-dots w-40 h-48 px-20 flex-col justify-start items-start gap-7 inline-flex">
            <div className="w-3.5 h-3.5 bg-white rounded-full" />
            <div className="w-3.5 h-3.5 bg-white bg-opacity-25 rounded-full" />
            <div className="w-3.5 h-3.5 bg-white bg-opacity-25 rounded-full" />
            <div className="w-3.5 h-3.5 bg-white bg-opacity-25 rounded-full" />
            <div className="w-3.5 h-3.5 bg-white bg-opacity-25 rounded-full" />
        </div>*/}
      <div className="w-scree h-screen flex justify-center items-center">
        <div className="-translate-x-80 -translate-y-36 absolute drop-shadow-lg">
          <a
            href="#Article"
            className="w-40 h-40 flex justify-center items-center bg-gradient-to-b from-red-300 to-red-500 rounded-full"
          >
            <h3 className="w-24 text-center self-center text-white text-base font-bold drop-shadow-lg">
              Wanna Read about it?
            </h3>
          </a>
        </div>
        <div className="-translate-x-52 translate-y-48 absolute drop-shadow-lg">
          <a
            href="#Article"
            className="w-40 h-40 flex justify-center items-center bg-gradient-to-b from-amber-500 to-amber-400 rounded-full"
          >
            <h3 className="w-24 text-center self-center text-white text-base font-bold drop-shadow-lg">
              Why should I care?
            </h3>
          </a>
        </div>
        <div className="translate-x-80 -translate-y-28 absolute drop-shadow-lg">
          <a
            href="#Article"
            className="w-40 h-40 flex justify-center items-center bg-gradient-to-b from-teal-500 to-lime-500 rounded-full"
          >
            <h3 className="w-24 text-center self-center text-white text-base font-bold drop-shadow-lg">
              Take the Quiz
            </h3>
          </a>
        </div>
        <div className="translate-x-48 translate-y-36 absolute drop-shadow-lg">
          <a
            href="#Article"
            className="w-40 h-40 flex justify-center items-center bg-gradient-to-b from-slate-700 to-indigo-800 rounded-full"
          >
            <h3 className="w-24 text-center self-center text-white text-base font-bold drop-shadow-lg">
              Yes, I need Professional Help
            </h3>
          </a>
        </div>
      </div>
    </section>
  );
}
