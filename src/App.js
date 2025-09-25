import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Footer from "./components/Footer";
import ReservationForm from "./components/ReservationForm";

const Layout = () => (
  <>
    <Navbar />
    <Outlet /> {/* Renders child route content */}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <>
            <HeroCarousel />
            <About />
            <Services />
            <Testimonials />
            <Team />
          </>
        ),
      },
      {
        path: "reservation",
        element: <ReservationForm />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
