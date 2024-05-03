import wave from "./img/stacked-waves-haikei(edit).webp";

export default function Quiz() {
  return (
    <section
      data-section
      id="Quiz"
      className="z-10 relative w-screen min-h-screen flex items-center p-0 bg-Rhino md:pt-[10vh] snap-start"
    >
      <div className="relative z-40 ">
        <img
          className="flex mix-blend-darken w-screen h-[30vh] absolute xl:-top-[20vh] lg:-top-[27.5vh] md:-top-[25vh] -top-[10vh] -z-30 brightness-50"
          src={wave}
          style={{
            "@media (min-height: 768px)": {
              top: "-50vh",
            },
          }}
          alt="Transition wave"
        />
        <div className="mix-blend-darken grid xl:grid-cols-6 grid-cols-10 grid-rows-10 lg:gap-4 gap-2 xl:mx-20 mx-10 lg:pt-[20vh] md:pt-0 pt-[20vh] z-50 min-h-[600px] sm:max-h-[900px] pb-[8vh]">
          <div className="flex items-center justify-center col-span-4 row-span-1 gap-1 p-4 rounded-lg bg-Charcoal xl:col-span-2 xl:row-span-4 drop-shadow-md">
            <div className="my-2 text-3xl font-bold text-center text-white font-Proxima xl:text-4xl ">
              Quizes
            </div>
          </div>
          <div className="col-span-6 row-span-5 gap-1 rounded-lg xl:p-2 bg-Charcoal xl:col-span-2 xl:row-span-6 drop-shadow-md">
            <div class="text-white font-Proxima xl:text-4xl text-3xl font-bold drop-shadow-lg p-4 pb-2 break-words">
              Healthy Screentime
            </div>
            <div className="w-full p-4 pt-0 text-base font-normal text-justify text-white font-Arial">
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
            <div className="p-4 text-2xl font-bold text-white break-words font-Arial xl:text-4xl drop-shadow-lg">
              Quiz: Are You Smart About Screens?
            </div>
          </a>
          <a
            className="w-auto bg-gradient-to-r from-Teal-main to-Sulu/[0.8] xl:p-2 rounded-lg gap-1 xl:col-span-2 col-span-4 xl:row-span-6 row-span-3 drop-shadow-md hover:scale-105 transition duration-100"
            href="https://www.mind-diagnostics.org/video_game_addiction-test"
            target="_blank"
          >
            <div className="p-4 text-2xl font-bold text-white break-words font-Arial xl:text-4xl drop-shadow-lg">
              FIND OUT IF YOU HAVE A VIDEO GAME ADDICTION
            </div>
          </a>
          <div className="col-span-6 row-span-5 gap-1 rounded-lg xl:p-2 bg-Charcoal xl:col-span-2 xl:row-span-6 drop-shadow-md">
            <div class="text-white font-Proxima xl:text-4xl text-3xl font-bold drop-shadow-lg p-4 pb-2">
              Game Addiction
            </div>
            <div className="w-full p-4 pt-0 text-base font-normal text-justify text-white font-Arial">
              Hey, I get it, games are addictive. But remember, there's a whole
              world out there beyond the virtual world. Don't let game addiction
              ruin your daily lives. Test yourself with these quizes to see if
              you are a game addict.
            </div>
          </div>
          <a
            className="w-auto bg-gradient-to-r from-Teal-main to-Sulu/[0.8] xl:p-2 rounded-lg gap-1 xl:col-span-2 col-span-4 xl:row-span-4 row-span-3 drop-shadow-md hover:scale-105 transition duration-100"
            href="https://connect.kindbridge.com/quiz/new/gaming/desktop"
            target="_blank"
          >
            <div className="p-4 text-2xl font-bold text-white break-words font-Arial xl:text-4xl drop-shadow-lg">
              Gaming Disorder Test Online - Free Quiz and Questionnaire
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
