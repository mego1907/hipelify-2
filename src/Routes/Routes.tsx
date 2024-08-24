import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../layouts";
import AboutUs from "../pages/AboutUs/AboutUs";
import Team from "../pages/Team/Team";
import HypelifyBusiness from "../pages/HypelifyBusiness/HypelifyBusiness";
import ContactUs from "../pages/ContactUs/ContactUs";
import HypeX from "../pages/HypeX/HypeX";
import Careers from "../pages/Careers/Careers";
import Home from "../pages/Home/Home";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/hypelify-business",
          element: <HypelifyBusiness />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/hypex",
          element: <HypeX />,
        },
        {
          path: "/careers",
          element: <Careers />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
