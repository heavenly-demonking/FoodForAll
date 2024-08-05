import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Registeration from "./Pages/Registeration";
import AboutUs from "./Pages/AboutUs";
import Donate from "./Pages/Donate";
import "./App.css";
import Contactus from "./Pages/Contactus";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU1BfOP8mW4M/mH2QNnFddB8bf4F4XyyVd5Zm"
  crossorigin="anonymous"
/>;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/Register",
    element: (
      <>
        <Header />
        <Registeration />
      </>
    ),
  },
  {
    path: "/About-us",
    element: (
      <>
        <Header />
        <AboutUs />
      </>
    ),
  },
  {
    path: "/donate",
    element: (
      <>
        <Header />
        <Donate />
      </>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <>
        <Header />
        <Contactus />
      </>
    ),
  },
]);

export default router;
