import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="py-36 max-h-screen">
      <div className="flex flex-col items-center justify-items-center py-5 px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 ">
          😓 Oops! Something Went Wrong
        </h1>
        <p className="text-xl text-slate-700 mt-7 max-w-5xl">
          Looks like something didn’t go as planned. But don't worry — our team
          has been notified and is already on it. In the meantime, you can try
          refreshing the page or head back home.
        </p>
        <div className="py-12 flex flex-row items-center justify-center gap-5">
          <NavLink
            to="/"
            className="px-5 py-3  border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-slate-900 hover:text-white transition-all duration-300"
          >
            🏠 Go to Home
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
