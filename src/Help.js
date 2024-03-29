export default function Help() {
  return (
    <section id="Help" className="w-screen z-40 relative">
      <div className="container h-screen flex flex-col justify-center items-center">
        <h1 className="w-1/2 self-center text-center text-white text-5xl font-bold my-2">
          Something to confess?
        </h1>
        <h3 className="w-1/2 self-center text-center text-white text-xl font-normal my-2">
          Netsafe is an internationally renowned independent not for profit
          organization with an unrelenting focus on online safety practices.
        </h3>
        <div className="container flex flex-row justify-center items-center gap-8 my-2">
          <button className="w-1/10 h-1/10 bg-gradient-to-r from-teal-600 to-lime-600 p-4 rounded-lg">
            <p className="text-white text-sm">Make A Report</p>
          </button>
          <button className="w-1/10 h-1/10 bg-gradient-to-r from-teal-600 to-lime-600 p-4 rounded-lg">
            <p className="text-white text-sm">Contact Us</p>
          </button>
        </div>
      </div>
      <div className="container h-screen flex flex-col justify-center items-center">
        <h1 className="w-1/2 self-center text-center text-white text-5xl font-bold my-2">
          Other Sites That Can Help You
        </h1>
      </div>
    </section>
  );
}
