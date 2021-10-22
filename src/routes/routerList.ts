import { ReactNode } from "react";
import { NotFoundPage } from "../components/layouts/NotFound";
import { Home } from "../pages/Home/Home";
import { ViewHistorical } from "../pages/ViewHistorical/ViewHistorical";

type routes = {
  key: number,
  label: string,
  path?: string,
  Component: ReactNode,
  hasNavbar: boolean,
}[]


const routerList: routes = [
  {
    key: 0,
    label: "Home",
    path: "/",
    Component: Home,
    hasNavbar: true,
  },
  {
    key: 1,
    label: "Home",
    path: "/weather",
    Component: Home,
    hasNavbar: true,
  },
  {
    key: 2,
    label: "view-historical",
    path: "/view-historical",
    Component: ViewHistorical,
    hasNavbar: true,
  },
  {
    key: 3,
    label: "Not Found Page",
    Component: NotFoundPage,
    hasNavbar: false,
  },
];

export default routerList;