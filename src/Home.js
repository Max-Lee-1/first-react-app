import catGaming from "./img/cat-gaming.png";

export default function Landing() {
  return (
    <section
      data-section
      id="Home"
      className="z-10 w-screen min-h-screen relative mb-20"
    >
      <div className="w-screen h-screen flex justify-center items-center absolute">
        <h1 className="w-1/3 text-center text-white text-5xl font-bold drop-shadow-lg">
          Are You A Toxic Gamer?
        </h1>
      </div>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="md:-translate-x-80 md:-translate-y-36 -translate-x-24 -translate-y-40 absolute drop-shadow-lg">
          <a
            href="#Article"
            className="md:w-40 md:h-40 w-20 h-20 flex justify-center items-center bg-gradient-to-b from-red-300 to-red-500 rounded-full"
          >
            <h3 className="md:w-24 w-12 text-center self-center text-white md:text-base text-xs font-bold drop-shadow-lg">
              Wanna Read about it?
            </h3>
          </a>
        </div>
        <div className="md:-translate-x-52 md:translate-y-48 -translate-x-20 translate-y-48 absolute drop-shadow-lg">
          <a
            href="#Hazards"
            className="md:w-40 md:h-40 w-20 h-20 flex justify-center items-center bg-gradient-to-b from-amber-500 to-amber-400 rounded-full"
          >
            <h3 className="md:w-24 w-12 text-center self-center text-white md:text-base text-xs font-bold drop-shadow-lg">
              Why should I care?
            </h3>
          </a>
        </div>
        <div className="md:translate-x-80 md:-translate-y-28 translate-x-32 -translate-y-28 absolute drop-shadow-lg">
          <a
            href="#Quiz"
            className="md:w-40 md:h-40 w-20 h-20 flex justify-center items-center bg-gradient-to-b from-teal-500 to-lime-500 rounded-full"
          >
            <h3 className="md:w-24 w-12 text-center self-center text-white md:text-base text-xs font-bold drop-shadow-lg">
              Take the Quiz
            </h3>
          </a>
        </div>
        <div className="md:translate-x-48 md:translate-y-36 translate-x-28 translate-y-40 absolute drop-shadow-lg">
          <a
            href="#Help"
            className="md:w-40 md:h-40 w-20 h-20 flex justify-center items-center bg-gradient-to-b from-slate-700 to-indigo-800 rounded-full"
          >
            <h3 className="md:w-24 w-12 text-center self-center text-white md:text-base text-xs font-bold drop-shadow-lg">
              Yes, I need Professional Help
            </h3>
          </a>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-1 col-span-1 row-span-1 drop-shadow-md"></div>
      <div id="Hazards" className="min-h-screen">
        <div className="grid grid-cols-2 gap-4 mx-20 pb-20 pt-40">
          <h1 class="col-span-1 row-span-1 text-white text-5xl font-bold drop-shadow-lg">
            Your Health, Your Care
          </h1>
          <p className="text-white text-xl text-justify col-span-1 row-span- w-full">
            Excessive gaming often leads to a sedentary lifestyle, which can
            result in various health issues such as obesity, muscle stiffness,
            and poor posture. Sitting for prolonged periods without adequate
            breaks can contribute to cardiovascular problems and weaken overall
            physical fitness.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-16 mx-20">
          <div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-1 row-span-1 drop-shadow-md">
            <h1 class="text-white text-5xl font-bold drop-shadow-lg p-5">
              Physical Health Impact
            </h1>
            <h3 className="text-white text-xl p-5 text-justify">
              Excessive gaming often leads to a sedentary lifestyle, which can
              result in various health issues such as obesity, muscle stiffness,
              and poor posture. Sitting for prolonged periods without adequate
              breaks can contribute to cardiovascular problems and weaken
              overall physical fitness.
            </h3>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-1 row-span-1 drop-shadow-md">
            <h1 class="text-white text-5xl font-bold drop-shadow-lg p-5">
              Mental Health Concerns
            </h1>
            <h3 className="text-white text-xl p-5 text-justify">
              Unhealthy gaming habits can negatively affect mental well-being.
              Excessive gaming may lead to increased stress, anxiety, and
              depression, especially if it interferes with daily
              responsibilities and social interactions. The immersive nature of
              gaming can also blur the line between reality and fantasy,
              potentially exacerbating mental health issues.
            </h3>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-1 row-span-1 drop-shadow-md">
            <h1 class="text-white text-5xl font-bold drop-shadow-lg p-5">
              Social & Emotional Fallout
            </h1>
            <h3 className="text-white text-xl p-5 text-justify">
              Spending excessive time gaming can strain relationships with
              friends, family, and significant others. It may lead to social
              isolation, as individuals prioritize gaming over face-to-face
              interactions. Moreover, unhealthy gaming habits can hinder
              personal growth, as time spent gaming often detracts from pursuing
              educational, career, or personal development opportunities.
            </h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-20 pt-40">
        <div className="h-3/4 p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-1 row-span-1 drop-shadow-md">
          <img
            src={catGaming}
            className="object-cover h-full w-full rounded-lg"
          ></img>
        </div>
        <div className="p-4 flex flex-col gap-1 col-span-1 row-span-1">
          <h1 class="pb-4 col-span-1 row-span-1 text-white text-5xl font-bold drop-shadow-lg">
            Who We Are
          </h1>
          <p className="text-white text-xl text-justify col-span-1 row-span- w-full">
            Game with health aims to promote Ad commodo commodo excepteur do
            adipisicing. Ullamco duis enim fugiat elit veniam in aute aliquip.
            Cupidatat occaecat ea ipsum deserunt quis. Excepteur eiusmod labore
            est labore voluptate reprehenderit consequat commodo do duis dolore
            mollit sint duis. Ex veniam cillum ea incididunt aliquip veniam
            eiusmod pariatur consequat ex irure. Officia deserunt Lorem eu Lorem
            est non. Id in reprehenderit reprehenderit aliqua elit ex amet
            pariatur magna in eiusmod nostrud laboris.
          </p>
        </div>
      </div>
    </section>
  );
}
