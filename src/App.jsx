import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  const appRouter = createBrowserRouter([{ path: "/", element: <Home /> }]);

  return (
    <div className="w-full min-h-screen bg-[#1F1E24] flex">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
