import { createBrowserRouter, Navigate } from "react-router-dom";
import ComingSoon from "../ComingSoon";
import App from "../App"

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Navigate to="/comingsoon" replace />,
    element: <App   />
  },
  {
    path: "/comingsoon",
    element: <ComingSoon />,
  },
]);

export default router;