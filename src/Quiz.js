export default function Quiz() {
  return (
    <section
      id="Quiz"
      className="z-10 relative w-screen min-h-screen py-40 flex items-center"
    >
      <div className="grid grid-cols-3 gap-4 mx-20">
        <div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-2 row-span-1 drop-shadow-md"></div>
        <div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-1 row-span-2 drop-shadow-md"></div>
        <div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-1 row-span-2 drop-shadow-md"></div>
        <div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-1 row-span-1 drop-shadow-md">
          <h1 className="self-center text-center text-white text-5xl font-bold my-2">
            Gaming Health Quizes
          </h1>
        </div>
        <div className="p-4 bg-gray-700 rounded-lg flex flex-col gap-1 col-span-2 row-span-1 drop-shadow-md"></div>
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
