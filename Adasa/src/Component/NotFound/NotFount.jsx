import React from "react";
import { Link } from "react-router-dom";

export default function NotFount() {
  return (
    <>
      <div className="text-center bg-black flex flex-col gap-4 py-3 ">
        <p className="main-color text-9xl font-extrabold">404</p>

        <div></div>

        <p className="text-white text-2xl font-bold">
          عفواً! الصفحة غير موجودة
        </p>
        <p className="text-gray-400 ">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى
          <br /> المسار الصحيح.
        </p>

        <div>
          <button></button>
          <button></button>
        </div>

        <p className="text-gray-400 text-xs ">قد تجد هذه مفيدة:</p>

        <div className="flex gap-6  w-1/4 justify-between mx-auto ">
          <Link to= "/blog" className="main-color text-sm hover:border-b-2 ">المدونة</Link>

          <Link to= "/about" className="main-color text-sm hover:border-b-2 ">من نحن</Link>

          <Link to="/privacy" className="main-color text-sm hover:border-b-2 "> الخصوصية</Link>
        </div>

      
      </div>
    </>
  );
}
