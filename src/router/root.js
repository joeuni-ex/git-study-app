import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

//로딩 중 표시
const Loading = <div>Loading..</div>;

//페이지
const Main = lazy(() => import("../pages/MainPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense>
        <Main />
      </Suspense>
    ),
  },
]);
export default root;
