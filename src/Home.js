import catGaming from "./img/cat-gaming.webp";

export default function Home() {
  return (
    <section
      data-section
      className="relative z-10 w-screen min-h-screen mb-20"
      id="Home"
    >
      <div id="Landing" className="h-screen">
        <div className="absolute flex items-center justify-center w-screen h-screen snap-start">
          <div className="w-1/3 text-4xl font-bold text-center text-white font-Proxima md:text-5xl drop-shadow-lg">
            Are You A Toxic Gamer?
          </div>
        </div>
        <div className="flex items-center justify-center w-screen h-screen">
          <div className="absolute transition duration-100 -translate-x-24 -translate-y-40 lg:-translate-x-80 md:-translate-x-56 md:-translate-y-36 drop-shadow-lg hover:scale-105">
            <a
              href="#Article"
              className="flex items-center justify-center rounded-full md:w-40 md:h-40 w-28 h-28 bg-gradient-to-b from-Bittersweet-Red to-Bittersweet-Pink"
            >
              <div className="self-center w-12 text-xs font-bold text-center text-white md:w-24 font-Arial md:text-base drop-shadow-lg">
                Wanna Read about it?
              </div>
            </a>
          </div>
          <div className="absolute transition duration-100 -translate-x-20 translate-y-48 lg:-translate-x-52 md:-translate-x-40 md:translate-y-48 drop-shadow-lg hover:scale-105">
            <a
              href="#Hazards"
              className="flex items-center justify-center rounded-full md:w-40 md:h-40 w-28 h-28 bg-gradient-to-b from-Orange to-amber-400"
            >
              <div className="self-center w-12 text-xs font-bold text-center text-white md:w-24 font-Arial md:text-base drop-shadow-lg">
                Why should I care?
              </div>
            </a>
          </div>
          <div className="absolute transition duration-100 translate-x-32 lg:translate-x-80 md:translate-x-56 md:-translate-y-28 -translate-y-28 drop-shadow-lg hover:scale-105">
            <a
              href="#Quiz"
              className="flex items-center justify-center rounded-full md:w-40 md:h-40 w-28 h-28 bg-gradient-to-b from-Sulu to-Green-Pea"
            >
              <div className="self-center w-12 text-xs font-bold text-center text-white md:w-24 font-Arial md:text-base drop-shadow-lg">
                Take the Quiz
              </div>
            </a>
          </div>
          <div className="absolute transition duration-100 translate-y-40 md:translate-x-48 translate-x-28 md:translate-y-36 drop-shadow-lg hover:scale-105">
            <a
              href="#Help"
              className="flex items-center justify-center rounded-full md:w-40 md:h-40 w-28 h-28 bg-gradient-to-b from-Chambray to-Navy"
            >
              <div className="self-center w-12 text-xs font-bold text-center text-white break-words md:w-24 font-Arial md:text-base drop-shadow-lg">
                Yes, I need Professional Help
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="Hazards" className="h-auto min-h-screen snap-start">
        <div className="grid grid-cols-2 gap-4 pt-40 pb-10 mx-10 md:mx-20">
          <div class="font-Proxima text-white lg:text-5xl text-3xl font-bold drop-shadow-lg">
            Your Health, Your Care
          </div>
          <div className="text-sm text-justify text-white font-Arial lg:text-base">
            Excessive gaming often leads to a sedentary lifestyle, which can
            result in various health issues such as obesity, muscle stiffness,
            and poor posture. Sitting for prolonged periods without adequate
            breaks can contribute to cardiovascular problems and weaken overall
            physical fitness.
          </div>
        </div>
        <div className="grid gap-4 mx-4 lg:grid-cols-3 lg:gap-8 md:mx-20">
          <div className="col-span-1 gap-1 p-2 rounded-lg md:p-4 bg-Charcoal drop-shadow-md">
            <div class="font-Proxima text-white lg:text-4xl text-2xl font-bold drop-shadow-lg px-5 py-4">
              Physical Health Impact
            </div>
            <div className="px-5 pb-4 text-sm text-justify text-white font-Arial lg:text-base">
              Excessive gaming often leads to a sedentary lifestyle, which can
              result in various health issues such as obesity, muscle stiffness,
              and poor posture. Sitting for prolonged periods without adequate
              breaks can contribute to cardiovascular problems and weaken
              overall physical fitness.
            </div>
          </div>
          <div className="col-span-1 gap-1 p-2 rounded-lg md:p-4 bg-Charcoal drop-shadow-md">
            <div class="font-Proxima text-white lg:text-4xl text-2xl font-bold drop-shadow-lg px-5 py-4">
              Mental Health Concerns
            </div>
            <div className="px-5 pb-4 text-sm text-justify text-white font-Arial lg:text-base">
              Unhealthy gaming habits can negatively affect mental well-being.
              Excessive gaming may lead to increased stress, anxiety, and
              depression, especially if it interferes with daily
              responsibilities and social interactions. The immersive nature of
              gaming can also blur the line between reality and fantasy,
              potentially exacerbating mental health issues.
            </div>
          </div>
          <div className="col-span-1 gap-1 p-2 rounded-lg md:p-4 bg-Charcoal drop-shadow-md">
            <div class="font-Proxima text-white lg:text-4xl text-2xl font-bold drop-shadow-lg px-5 py-4">
              Social & Emotional Fallout
            </div>
            <div className="px-5 pb-4 text-sm text-justify text-white font-Arial lg:text-base">
              Spending excessive time gaming can strain relationships with
              friends, family, and significant others. It may lead to social
              isolation, as individuals prioritize gaming over face-to-face
              interactions. Moreover, unhealthy gaming habits can hinder
              personal growth, as time spent gaming often detracts from pursuing
              educational, career, or personal development opportunities.
            </div>
          </div>
        </div>
      </div>
      <div
        id="About"
        className="relative grid h-screen grid-cols-2 gap-4 pt-10 mx-5 md:mx-20 lg:pt-40 snap-start"
      >
        <img
          src={catGaming}
          className="flex flex-col object-cover w-auto h-auto col-span-2 gap-1 rounded-lg lg:h-3/4 lg:w-full md:col-span-1 drop-shadow-md"
          alt="Cat and Gaming PC"
        ></img>
        <div className="flex flex-col col-span-2 gap-1 p-4 md:col-span-1">
          <div class="font-Proxima pb-4 md:col-span-1 col-span-1 text-white text-5xl text-left font-bold drop-shadow-lg">
            Who We Are
          </div>
          <div className="w-full col-span-1 text-base text-justify text-white font-Arial">
            Healthy Gaming Hub aims to promote Ad commodo commodo excepteur do
            adipisicing. Ullamco duis enim fugiat elit veniam in aute aliquip.
            Cupidatat occaecat ea ipsum deserunt quis. Excepteur eiusmod labore
            est labore voluptate reprehenderit consequat commodo do duis dolore
            mollit sint duis. Ex veniam cillum ea incididunt aliquip veniam
            eiusmod pariatur consequat ex irure. Officia deserunt Lorem eu Lorem
            est non. Id in reprehenderit reprehenderit aliqua elit ex amet
            pariatur magna in eiusmod nostrud laboris.
          </div>
        </div>
      </div>
    </section>
  );
}
