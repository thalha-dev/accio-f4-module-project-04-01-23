import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/layouts/NavBar";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import PageNotFound from "./components/PageNotFound";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
