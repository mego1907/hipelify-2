import { Footer, Navbar } from "../components";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  const contactBG =
    pathname === "/contact-us" && "bg-contact bg-cover bg-norepeat";
  const hypelifyBusinessBG =
    pathname === "/hypelify-business" &&
    "bg-hypelify-business bg-cover bg-norepeat";
  const homeBG = pathname === "/" && "bg-home bg-cover bg-norepeat";
  const aboutBG = pathname === "/about-us" && "bg-about bg-norepeat bg-cover";
  const teamBG = pathname === "/team" && "bg-team bg-norepeat bg-cover";
  const hypexBG = pathname === "/hypex" && "bg-hypex bg-norepeat bg-cover";

  // hypelify-business
  return (
    <div
      className={`min-h-screen bg-secondary font-montserrat-400 ${contactBG} ${hypelifyBusinessBG} ${homeBG} ${aboutBG} ${teamBG} ${hypexBG}`}
    >
      <div className="container relative">
        {/* Navbar */}
        <Navbar />

        <main>
          <Outlet />
        </main>

        {/* Footer */}
      </div>
      <div className="py-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
