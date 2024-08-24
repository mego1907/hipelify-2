import { Link, useLocation } from "react-router-dom";
import CustomButton from "./CustomButton";
import { RiMenu3Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const { pathname } = useLocation();

  const navbarLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About Us",
      path: "/about-us",
    },
    {
      id: 3,
      name: "Team",
      path: "/team",
    },
    {
      id: 4,
      name: "Hypelify Business",
      path: "/hypelify-business",
    },
    {
      id: 5,
      name: "HypeX",
      path: "/hypex",
    },
    {
      id: 6,
      name: "Careers",
      path: "/careers",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="fixed z-50 flex items-center justify-between w-11/12 p-2 px-5 -translate-x-1/2 rounded-full top-10 left-1/2 bg-navbar">
      {/* Logo */}
      <img src="/logo.png" alt="" className="object-contain" />

      {/* Toggle */}
      <button
        type="button"
        className="absolute flex -translate-y-1/2 lg:hidden right-4 top-1/2"
        onClick={() => setOpenNavbar(!openNavbar)}
      >
        <RiMenu3Fill fill="white" fontSize={35} />
      </button>

      {/* pages links */}
      <div
        className={`fixed ${
          openNavbar ? "flex" : "lg:flex hidden"
        } left-0 flex flex-col justify-center w-full h-screen gap-8 lg:items-center lg:pt-0 top-24 lg:flex-row lg:static lg:h-auto lg:w-auto bg-navbar lg:bg-transparent lg:rounded-none rounded-3xl`}
      >
        {/* Links */}
        <div className="flex flex-col items-center justify-center gap-8 mt-5 lg:mt-0 lg:flex-row font-montserrat-400">
          {navbarLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`text-xl font-normal  hover:text-gray-400 ${
                pathname === link.path ? "text-primaryDark" : "text-white"
              }`}
              onClick={() => setOpenNavbar(!openNavbar)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <span className="w-0.5 h-10 bg-primary"></span>

        <div className="flex flex-col items-center gap-5 lg:flex-row">
          <Link to="/login" className="text-lg font-bold text-white">
            <span>Login</span>
          </Link>

          <Link to="sign-up">
            <CustomButton>
              <span>Sign Up</span>
            </CustomButton>
          </Link>

          <img src="/images/coin-icon.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
