import { Outlet } from "react-router-dom";
import Header from "./Header";

const RootLayout = () => {
  document.body.className = "dark";
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default RootLayout;
