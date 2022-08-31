import React from "react";
import Navbar from "../Global/Navigation";
import Footer from "../Global/Footer";
import style from "../Layout/Layout.module.css";

const Layout = ({ children, data }) => {
  return (
    <div className={``}>
      <Navbar data={data["Navigation"]} />
      {children}
      <Footer data={data["Footer"]} />
    </div>
  );
};
export default Layout;
