import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";

import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    path: "/react-pizza/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/react-pizza/",
        element: <Home />,
      },
      {
        path: "/react-pizza/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/react-pizza/cart", element: <Cart /> },
      {
        path: "/react-pizza/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/react-pizza/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
