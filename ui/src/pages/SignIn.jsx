import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <section className="py-12 px-3 sm:px-8 max-h-screen">
      <div className="bg-slate-50 rounded-lg max-w-md mx-auto py-5 px-6">
        <div>
          <h2 className="text-center text-4xl font-extralight text-slate-800 py-4">
            Sign In
          </h2>
        </div>
        <div className="mt-5">
          <div className="flex flex-col space-y-3 mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name=""
              className="p-2 border-slate-400 border rounded-lg focus:outline-none"
              id=""
            />
          </div>
          <div className="flex flex-col space-y-3 mb-2">
            <label htmlFor="">Password</label>
            <input
              type="password
          "
              name=""
              id=""
              className="p-2 border-slate-400 border  rounded-lg focus:outline-none"
            />
          </div>
          <button className="bg-slate-800 text-white py-3 px-5 rounded-lg mt-3">
            Sign In{" "}
          </button>
          <div className="mt-3">
            <span>
              New User?{" "}
              <NavLink
                to="/sign-up"
                className="text-lg font-semibold text-slate-600 ml-1"
              >
                Sign Up
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
