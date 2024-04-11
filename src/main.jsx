import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import "@fontsource/outfit";
import "@fontsource/roboto";
import {Resume} from "./components/Resume/Resume.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element:<App></App>
  },
  // {
  //   path:"/Resume",
  //   element:<Resume></Resume> 
  // }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
