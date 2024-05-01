import catGaming from "./img/cat-gaming.png";

export default function Home() {
  return (
    <section
      data-section
      className="z-10 w-screen min-h-screen relative mb-20"
      id="Home"
    >
      <div id="Landing" className="h-screen">
        <div className="w-screen h-screen flex justify-center items-center absolute snap-start">
          <div className="w-1/3 text-center font-Proxima text-white md:text-5xl text-4xl drop-shadow-lg">
            Are You A Toxic Gamer?
          </div>
        </div>
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="lg:-translate-x-80 md:-translate-x-56 -translate-x-24 md:-translate-y-36 -translate-y-40 absolute drop-shadow-lg hover:scale-105 transition duration-100">
            <a
              href="#Article"
              className="md:w-40 md:h-40 w-28 h-28 flex justify-center items-center bg-gradient-to-b from-Bittersweet-Red to-Bittersweet-Pink rounded-full"
            >
              <div className="md:w-24 w-12 text-center self-center font-Arial text-white md:text-base text-xs font-bold drop-shadow-lg">
                Wanna Read about it?
              </div>
            </a>
          </div>
          <div className="lg:-translate-x-52 md:-translate-x-40 -translate-x-20  md:translate-y-48 translate-y-48 absolute drop-shadow-lg hover:scale-105 transition duration-100">
            <a
              href="#Hazards"
              className="md:w-40 md:h-40 w-28 h-28 flex justify-center items-center bg-gradient-to-b from-Orange to-amber-400 rounded-full"
            >
              <div className="md:w-24 w-12 text-center self-center font-Arial text-white md:text-base text-xs font-bold drop-shadow-lg">
                Why should I care?
              </div>
            </a>
          </div>
          <div className="lg:translate-x-80 md:translate-x-56 translate-x-32 md:-translate-y-28 -translate-y-28 absolute drop-shadow-lg hover:scale-105 transition duration-100">
            <a
              href="#Quiz"
              className="md:w-40 md:h-40 w-28 h-28 flex justify-center items-center bg-gradient-to-b from-Sulu to-Green-Pea rounded-full"
            >
              <div className="md:w-24 w-12 text-center self-center font-Arial text-white md:text-base text-xs font-bold drop-shadow-lg">
                Take the Quiz
              </div>
            </a>
          </div>
          <div className="md:translate-x-48 translate-x-28 md:translate-y-36 translate-y-40 absolute drop-shadow-lg hover:scale-105 transition duration-100">
            <a
              href="#Help"
              className="md:w-40 md:h-40 w-28 h-28 flex justify-center items-center bg-gradient-to-b from-Chambray to-Navy rounded-full"
            >
              <div className="md:w-24 w-12 text-center self-center font-Arial text-white md:text-base text-xs font-bold drop-shadow-lg break-words">
                Yes, I need Professional Help
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="Hazards" className="min-h-screen h-auto snap-start">
        <div className="grid grid-cols-2 gap-4 md:mx-20 mx-10 pb-10 pt-40">
          <div class="font-Proxima text-white lg:text-5xl text-3xl font-bold drop-shadow-lg">
            Your Health, Your Care
          </div>
          <div className="font-Arial text-white lg:text-base text-sm text-justify">
            Excessive gaming often leads to a sedentary lifestyle, which can
            result in various health issues such as obesity, muscle stiffness,
            and poor posture. Sitting for prolonged periods without adequate
            breaks can contribute to cardiovascular problems and weaken overall
            physical fitness.
          </div>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-8 gap-4 md:mx-20 mx-4">
          <div className="md:p-4 p-2 bg-Charcoal rounded-lg gap-1 col-span-1 drop-shadow-md">
            <div class="font-Proxima text-white lg:text-4xl text-2xl font-bold drop-shadow-lg px-5 py-4">
              Physical Health Impact
            </div>
            <div className="font-Arial text-white lg:text-base text-sm px-5 pb-4 text-justify">
              Excessive gaming often leads to a sedentary lifestyle, which can
              result in various health issues such as obesity, muscle stiffness,
              and poor posture. Sitting for prolonged periods without adequate
              breaks can contribute to cardiovascular problems and weaken
              overall physical fitness.
            </div>
          </div>
          <div className="md:p-4 p-2 bg-Charcoal rounded-lg gap-1 col-span-1 drop-shadow-md">
            <div class="font-Proxima text-white lg:text-4xl text-2xl font-bold drop-shadow-lg px-5 py-4">
              Mental Health Concerns
            </div>
            <div className="font-Arial text-white lg:text-base text-sm px-5 pb-4 text-justify">
              Unhealthy gaming habits can negatively affect mental well-being.
              Excessive gaming may lead to increased stress, anxiety, and
              depression, especially if it interferes with daily
              responsibilities and social interactions. The immersive nature of
              gaming can also blur the line between reality and fantasy,
              potentially exacerbating mental health issues.
            </div>
          </div>
          <div className="md:p-4 p-2 bg-Charcoal rounded-lg gap-1 col-span-1 drop-shadow-md">
            <div class="font-Proxima text-white lg:text-4xl text-2xl font-bold drop-shadow-lg px-5 py-4">
              Social & Emotional Fallout
            </div>
            <div className="font-Arial text-white lg:text-base text-sm px-5 pb-4 text-justify">
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
        className="relative grid grid-cols-2 gap-4 md:mx-20 mx-5 lg:pt-40 pt-10 snap-start h-screen"
      >
        <img
          src={catGaming}
          className="object-cover lg:h-3/4 h-auto lg:w-full w-auto rounded-lg flex flex-col gap-1 md:col-span-1 col-span-2 drop-shadow-md"
        ></img>
        <div className="p-4 flex flex-col gap-1 md:col-span-1 col-span-2">
          <div class="font-Proxima pb-4 md:col-span-1 col-span-1 text-white text-5xl text-left font-bold drop-shadow-lg">
            Who We Are
          </div>
          <div className="font-Arial text-white text-base text-justify w-full col-span-1">
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
