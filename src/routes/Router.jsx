import { createHashRouter } from "react-router-dom";
import {
  Article,
  Auth,
  Dashboard,
  Exercise,
  Home,
  Learn,
  NotFound,
  Race,
  Team,
} from "../components";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "auth/login",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/exercise",
    element: <Exercise />,
  },
  {
    path: "/race",
    element: <Race />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/learn",
    element: <Learn />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
