import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Login from "./components/Login";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import ItemSelection from "./components/ItemSelection";
import Home from "./components/Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/Item-Selection" element={<ItemSelection />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
