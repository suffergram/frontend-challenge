import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { HomePage } from "../../pages/home-page/home-page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage isFavs={false} />} />
      <Route path="likes" element={<HomePage isFavs={true} />} />
    </Route>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}
