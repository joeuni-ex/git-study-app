import React from "react";
import { Link } from "react-router-dom";

function BasicMenu() {
  return (
    <div className="flex  bg-slate-200 px-10 h-24 justify-between items-center">
      <div className="text-xl font-bold text-gray-800">
        <Link to={"/"}>LOGO</Link>
      </div>
      <div className="">
        <ul className="flex gap-4">
          <li>About</li>
          <li>Todo</li>
        </ul>
      </div>
      <div>
        <div>로그인</div>
      </div>
    </div>
  );
}

export default BasicMenu;
