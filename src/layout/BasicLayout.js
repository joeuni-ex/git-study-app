import React from "react";
import BasicMenu from "../components/menus/BasicMenu";

function BasicLayout({ children }) {
  return (
    <>
      {/* header */}
      <BasicMenu />

      {/* main  & aside */}
      <div>
        <main>{children}</main>
      </div>

      {/* footer */}
    </>
  );
}

export default BasicLayout;
