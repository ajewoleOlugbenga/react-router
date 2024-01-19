import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from './pages/Root'
import Error from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/products", element: <Products /> },
        {path: '/products/:productId', element: <ProductDetailsPage/>}
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
