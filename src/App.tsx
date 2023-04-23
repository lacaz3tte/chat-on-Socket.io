import Authorisation from "./pages/Authorisation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Chat from "./pages/Chat";
import StartComponent from "./pages/StartComponent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authorisation />,
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
    <StartComponent>
    <RouterProvider router={router} />
    </StartComponent>
  );
}

export default App;
