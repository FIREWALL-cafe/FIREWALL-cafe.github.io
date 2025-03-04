import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-tooltip/dist/react-tooltip.css';

import WhyDidThisHappen from './components/WhyDidThisHappen';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Experts from "./components/Experts";
import Events from "./components/Events";
import Press from "./components/Press";
import Search from "./components/Search";
import SearchBar from "./components/SearchBar";
import Support from "./components/Support";
import SearchArchive from "./components/SearchArchive";
import LanYu from "./components/LanYu";
import ShowEvent from './components/ShowEvent';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./routes/layout";
import ErrorPage from "./error-page";
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "editorial",
        element: <Experts />,
        children: [
          {
            path: "lan-yu",
            element: <LanYu />,
          },
        ],
      },
      {
        path: "/events/:eventId",
        element: <ShowEvent />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "timeline",
        element: <WhyDidThisHappen />,
      },
      {
        path: "press",
        element: <Press />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "archive",
        element: <SearchArchive />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
