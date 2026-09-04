import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-GdqARQRt.png";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between second-bg-color text-white py-3  w-full px-5 z-50">
        <div className="flex gap-2 cursor-pointer ">
          <img className="w-12 h-12" src={logo} alt="logo" />

          <div>
            <h1 className=" text-xl font-bold " >عدسة</h1>
            <h2 className=" text-sm main-color "  >عالم التصوير الفوتوغرافي</h2>
          </div>
        </div>

        <div className="my-4 border rounded-4xl p-3 border-gray-600 text-gray-400 " >
          <ul className="flex gap-5">
            <li>
              <NavLink to="/">الرئيسية</NavLink>
            </li>
            <li>
              <NavLink to="blog">المدونة</NavLink>
            </li>
            <li>
              <NavLink to="about">من نحن</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-5 ">
          <a className="my-4 text-gray-500  " href="">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>

          <div className="main-bg-color w-30 h-15 flex justify-center items-center  rounded-4xl">
            <Link to="blog">ابدأ القراءة</Link>
          </div>
        </div>
      </div>
    </>
  );
}
