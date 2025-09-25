import { createBrowserRouter } from "react-router";
import RootLayOut from "../layout/RootLayOut";
import Home from "../pages/Home/Home/Home";



export const router = createBrowserRouter([
  {
    path: "/",
   Component: RootLayOut,
   children: [
    {
        index: true,
        Component: Home
    }
   ]
  },
]);