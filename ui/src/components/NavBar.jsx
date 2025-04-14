import { BiTask } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="w-full py-2">
      <nav className="max-w-6xl mx-auto flex justify-between items-center  border-b border-slate-100 px-4 sm:px-6 md:px-8 py-4 ">
        <NavLink
          to="/"
          className="flex items-center space-x-1 text-2xl sm:text-3xl md:text-4xl py-2"
        >
          <BiTask size={26} />
          <span className="text-slate-600 font-semibold">Notes App</span>
        </NavLink>
        <div className="flex space-x-3 sm:space-x-4 md:space-x-6 items-center text-lg">
          <NavLink to="/sign-up">Sign Up</NavLink>
          <button>Add Note</button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
