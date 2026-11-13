import { createBrowserRouter, Navigate } from "react-router-dom";
import ComingSoon from "../ComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/comingsoon" replace />,
  },
  {
    path: "/comingsoon",
    element: <ComingSoon />,
  },
]);

export default router;