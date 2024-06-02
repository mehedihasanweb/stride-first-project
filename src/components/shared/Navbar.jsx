import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to={"/"} className="text-xl font-semibold">
          Home
        </Link>
      </li>
      <li>
        <Link to={"/about"} className="text-xl font-semibold">
          About
        </Link>
      </li>
      <li>
        <Link to={"/dashboard"} className="text-xl font-semibold">
          Dashboard
        </Link>
      </li>
    </>
  );

  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="text-3xl font-bold ">
          BDPHONES
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      {!user ? (
        <>
          <div className="navbar-end flex gap-2 items-center">
            <Link to={"/login"} className="btn">
              Login
            </Link>
            <Link to={"/registration"} className="btn">
              Registration
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-end flex gap-4 items-center">
            <Link onClick={handleLogOut} className="btn">
              Logout
            </Link>
            <div className="avatar">
              <div className="w-12 rounded-full border-2 border-black">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
