import { createBrowserRouter } from "react-router-dom";
import {
  DashBoardPage,
  NotFoundPage,
  ProductPage,
  SalePage,
  VoucherPage,
} from "./src/pages/page";
import LayoutComponent from "./src/components/Layout.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashBoardPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/sale",
        element: <SalePage />,
      },
      {
        path: "/voucher",
        element: <VoucherPage />,
      },
    ],
  },
]);

export default router;
