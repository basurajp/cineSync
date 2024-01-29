import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Trending from "../../src/components/Trending";

const App = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/trending", element: <Trending /> },
  ]);

  return (
    <div className="w-full min-h-screen bg-[#1F1E24] flex">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
