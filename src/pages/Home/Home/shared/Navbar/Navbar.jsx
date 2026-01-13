import { NavLink } from "react-router";
import ProFastLogo from "../ProFastLogo/ProFastLogo";
import useAuth from "../../../../../hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth();

    const navItems = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/coverage">Coverage</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>

                <a className="btn btn-ghost text-xl">
                    <ProFastLogo />
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="navbar-end gap-3">

                {user ? (
                    // ⭐ HOVER DROPDOWN FOR PROFILE
                    <div className="dropdown dropdown-end dropdown-hover">

                        {/* Profile Trigger */}
                        <div tabIndex={0} role="button" className="cursor-pointer">
                            <img
                                src={user?.photoURL}
                                alt="Profile"
                                referrerPolicy="no-referrer"
                                className="w-10 h-10 rounded-full border border-gray-300 object-cover"
                            />
                        </div>

                        {/* Dropdown Menu */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[100] p-3 shadow bg-base-100 rounded-box w-56 space-y-2"
                        >
                            <li className="text-center font-semibold">{user.email}</li>

                            <li>
                                <button
                                    onClick={logOut}
                                    className="btn btn-error text-white w-full"
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>

                ) : (
                    <>
                        <NavLink to="/register" className="btn">Sign Up</NavLink>
                        <NavLink to="/login" className="btn">Login</NavLink>
                    </>
                )}

            </div>
        </div>
    );
};

export default Navbar;
