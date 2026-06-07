import {
  createBrowserRouter,
} from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import ConversationPage from "../pages/ConversationPage";

const router =
  createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/conversation",
      element: <ConversationPage />,
    },
  ]);

export default router;