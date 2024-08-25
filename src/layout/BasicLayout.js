import React from "react";

function BasicLayout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default BasicLayout;
