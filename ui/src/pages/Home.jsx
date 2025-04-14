import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="py-36 max-h-screen">
      <div className="flex flex-col items-center justify-items-center py-5 px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 ">
          📝 Jot It. Sort It. Never Forget It.
        </h1>
        <p className="text-xl text-slate-700 mt-7 max-w-5xl">
          Say hello to your brain’s new best friend. From quick thoughts to
          detailed plans, our Notes App helps you capture everything that
          matters — beautifully organized, cloud-synced, and ready when you are.
        </p>
        <div className="py-12 flex flex-row items-center justify-center gap-5">
          <NavLink
            to="/sign-lup"
            className="bg-slate-800 border-2 border-slate-800 text-white py-3 px-5 rounded-lg hover:bg-slate-950 transition-all duration-300"
          >
            Get Started
          </NavLink>

          <NavLink
            to="/dashboard"
            className="px-5 py-3  border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            Dasboard
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Home;
