import { Children, useState } from "react";
import heroImg from "./assets/hero.png";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Layout from "./Component/Layout/Layout";
import NotFount from "./Component/NotFound/NotFount";
import Blog from "./Component/Blog/Blog";
import Privacy from "./Component/Privacy/Privacy";
import Services from "./Component/Services/Services";
import Mastering from './Component/Mastering/Mastering';

function App() {
  let x = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "blog", element: <Blog /> },
        { path: "mastering", element: <Mastering /> },
        { path: "privacy", element: <Privacy /> },
        { path: "services", element: <Services /> },
        { path: "*", element: <NotFount /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
