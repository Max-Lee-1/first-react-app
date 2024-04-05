export default function Quiz() {
  return (
    <section
      data-section
      id="Quiz"
      className="z-10 relative w-screen min-h-screen py-20 flex items-center"
    >
      <div className="grid grid-cols-6 gap-4 mx-20">
        <div className="justify-center p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-1 row-span-1 drop-shadow-md">
          <h1 className="text-center text-white text-5xl font-bold my-2">
            Gaming Health Quizes
          </h1>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-3 row-span-1 drop-shadow-md">
          <h1 class="text-white text-5xl font-bold drop-shadow-lg p-4 flex">
            Healthy Screentime
          </h1>
          <p className="w-full text-white text-xl text-justify p-4">
            Screens have their allure, but too much isn't good for you. Set
            limits, take breaks, and explore the world offline. Your eyes, mind,
            and relationships will thank you for the balance. See if you have
            great management with your screen time here.
          </p>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-2 row-span-1 drop-shadow-md">
          <a
            className="w-auto bg-gradient-to-r from-teal-600 to-lime-600 p-4 rounded-lg flex"
            href="https://brilliantstarmagazine.org/articles/quiz-are-you-smart-about-screens"
            target="_blank"
          >
            <p className="text-white text-5xl font-bold drop-shadow-lg p-4">
              Quiz: Are You Smart About Screens?
            </p>
          </a>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-2 row-span-1 drop-shadow-md">
          <a
            className="w-auto bg-gradient-to-r from-teal-600 to-lime-600 p-4 rounded-lg flex"
            href="https://www.mind-diagnostics.org/video_game_addiction-test"
            target="_blank"
          >
            <p className="text-white text-5xl font-bold drop-shadow-lg p-4">
              FIND OUT IF YOU HAVE A VIDEO GAME ADDICTION
            </p>
          </a>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-2 row-span-1 drop-shadow-md">
          <h1 class="text-white text-5xl font-bold drop-shadow-lg p-4">
            Game Addiction
          </h1>
          <p className="w-full text-white text-xl text-justify p-4">
            Hey, I get it, games are addictive. But remember, there's a whole
            world out there beyond the virtual world. Don't let game addiction
            ruin your daily lives. Test yourself with these quizes to see if you
            are a game addict.
          </p>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-2 row-span-1 drop-shadow-md">
          <a
            className="w-auto bg-gradient-to-r from-teal-600 to-lime-600 p-4 rounded-lg flex"
            href="https://www.mind-diagnostics.org/video_game_addiction-test"
            target="_blank"
          >
            <p className="text-white text-5xl font-bold drop-shadow-lg p-4">
              FIND OUT IF YOU HAVE A VIDEO GAME ADDICTION
            </p>
          </a>
        </div>

        {/*<div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-1 row-span-2 drop-shadow-md">
          <h1 class="text-white text-5xl font-bold drop-shadow-lg p-4">
            Healthy Screentime
          </h1>
          <p className="text-white text-xl text-justify p-4">
            Screens have their allure, but too much isn't good for you. Set
            limits, take breaks, and explore the world offline. Your eyes, mind,
            and relationships will thank you for the balance.
          </p>
  </div>*/}
      </div>

      {/*<div className="grid auto-rows-[192px] grid-cols-3 gap-4">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
              i === 3 || i === 6 ? "col-span-2" : ""
            }`}
          ></div>
        ))}
        </div>*/}
    </section>
  );
}
