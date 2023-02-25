import Autorisation from "./pages/Autorisation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Chat from "./pages/Chat";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Autorisation />,
    },
    {
      path: "chat/:chatName",
      element: <Chat />
    },
    {
      path: "/create",
      element: <CreateAccount />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
