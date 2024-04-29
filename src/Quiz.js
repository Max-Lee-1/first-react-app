import wave from "./img/stacked-waves-haikei(edit).png";
import bgGradient from "./img/blurry-gradient-haikei.svg";
import bgCircle from "./img/circle-scatter-haikei (2).svg";

export default function Quiz() {
  return (
    <section
      data-section
      id="Quiz"
      className="z-10 relative w-screen min-h-screen flex items-center p-0 bg-Blue-Indigo"
    >
      <div className="relative z-40">
        <img
          className="flex mix-blend-darken w-screen h-[30vh] absolute lg:-top-[20vh] -top-[10vh] -z-30"
          src={wave}
        />
        {/*<img
          className="flex mix-blend-darken w-screen h-[140vh] aspect-video absolute object-cover object-right -z-40 opacity-50"
          src={bgGradient}
  />*/}
        <div className="mix-blend-darken grid xl:grid-cols-6 grid-cols-10 grid-rows-10 xl:gap-4 gap-2 xl:mx-20 mx-10 pt-[20vh] z-50 xl:h-[75vh] pb-[8vh]">
          <div className="flex justify-center items-center p-4 bg-Charcoal rounded-lg gap-1 xl:col-span-2 col-span-4 xl:row-span-4 row-span-1 drop-shadow-md">
            <div className="text-white font-Proxima text-center xl:text-4xl text-3xl font-bold my-2 ">
              Quizes
            </div>
          </div>
          <div className="xl:p-2 bg-Charcoal rounded-lg gap-1 xl:col-span-2 col-span-6 xl:row-span-6 row-span-5 drop-shadow-md">
            <div class="text-white font-Proxima xl:text-4xl text-3xl font-bold drop-shadow-lg p-4 pb-2 break-words">
              Healthy Screentime
            </div>
            <div className="font-Arial w-full text-white text-base text-justify p-4 pt-0">
              Screens have their allure, but too much isn't good for you. Set
              limits, take breaks, and explore the world offline. Your eyes,
              mind, and relationships will thank you for the balance. See if you
              have great management with your screen time here.
            </div>
          </div>
          <a
            className="w-auto bg-gradient-to-r from-Teal-main to-Sulu/[0.8] xl:p-2 rounded-lg flex flex-col gap-1 xl:col-span-2 col-span-4 xl:row-span-4 row-span-3 drop-shadow-md hover:scale-105 transition duration-100"
            href="https://brilliantstarmagazine.org/articles/quiz-are-you-smart-about-screens"
            target="_blank"
          >
            <div className="font-Arial text-white xl:text-4xl text-2xl break-words font-bold drop-shadow-lg p-4">
              Quiz: Are You Smart About Screens?
            </div>
          </a>
          <a
            className="w-auto bg-gradient-to-r from-Teal-main to-Sulu/[0.8] xl:p-2 rounded-lg gap-1 xl:col-span-2 col-span-4 xl:row-span-6 row-span-3 drop-shadow-md hover:scale-105 transition duration-100"
            href="https://www.mind-diagnostics.org/video_game_addiction-test"
            target="_blank"
          >
            <div className="font-Arial text-white xl:text-4xl text-xl font-bold drop-shadow-lg p-4 break-words">
              FIND OUT IF YOU HAVE A VIDEO GAME ADDICTION
            </div>
          </a>
          <div className="xl:p-2 bg-Charcoal rounded-lg  gap-1 xl:col-span-2 col-span-6 xl:row-span-6 row-span-5 drop-shadow-md">
            <div class="text-white font-Proxima xl:text-4xl text-2xl font-bold drop-shadow-lg p-4 pb-2">
              Game Addiction
            </div>
            <div className="font-Arial w-full text-white xl:text-base text-sm text-justify p-4 pt-0">
              Hey, I get it, games are addictive. But remember, there's a whole
              world out there beyond the virtual world. Don't let game addiction
              ruin your daily lives. Test yourself with these quizes to see if
              you are a game addict.
            </div>
          </div>
          <a
            className="w-auto bg-gradient-to-r from-Teal-main to-Sulu/[0.8] xl:p-2 rounded-lg gap-1 xl:col-span-2 col-span-4 xl:row-span-4 row-span-3 drop-shadow-md hover:scale-105 transition duration-100"
            href="https://www.mind-diagnostics.org/video_game_addiction-test"
            target="_blank"
          >
            <div className="font-Arial text-white xl:text-4xl text-xl font-bold drop-shadow-lg p-4 break-words">
              FIND OUT IF YOU HAVE A VIDEO GAME ADDICTION
            </div>
          </a>
        </div>
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
