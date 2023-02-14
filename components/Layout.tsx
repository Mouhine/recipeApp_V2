import Navbar from "./Navbar";
// import Footer from "./Footer";
import React from "react";
interface ChildrenType {
  children: React.ReactNode;
}
export default function Layout({ children }: ChildrenType) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
