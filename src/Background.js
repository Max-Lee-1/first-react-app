export default function Background() {
  return (
    <section id="Background" className="z-10 relative">
      <div className="fixed">
        <div className="bg-circle-2 translate-x-96 -mt-96 absolute bg-blue-800 rounded-full drop-shadow-2xl" />
        <div className="bg-circle-2 -mt-96 -ml-36 absolute bg-teal-500 rounded-full drop-shadow-2xl" />
        <div className="bg-circle-2 translate-x-96 translate-y-44 ml-96 absolute bg-blue-200 rounded-full drop-shadow-2xl" />
        <div className="bg-circle-1 -mt-96 -ml-48 absolute bg-blue-800 rounded-full drop-shadow-2xl" />
      </div>
      <div className="w-screen h-screen fixed bg-gradient-to-r from-gray-500 to-black opacity-50 " />
    </section>
  );
}
