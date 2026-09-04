import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return <>
      <div className=" second-bg-color text-gray-500 p-10  w-full border-t border-gray-800 ">
        <div className="flex justify-evenly gap-5 p-10">
          <div className="flex flex-col gap-5">
            <div className="flex gap-2 ">
              <p className="text-white text-xl font-bold main-bg-color w-10 h-10 flex justify-center items-center rounded-2xl">
                ع
              </p>
              <h2 className="text-white text-xl font-bold ">عدسة</h2>
            </div>
            <p>
              {" "}
              مدونة متخصصة في فن التصوير الفوتوغرافي،
              <br /> نشارك معكم أسرار المحترفين ونصائح عملية
              <br /> لتطوير مهاراتكم.{" "}
            </p>
            <div className="flex gap-5 text-xl ">
              <a
                className="bg-gray-900 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center border  border-gray-700 hover:scale-125 "
                href=""
              >
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
              <a
                className="bg-gray-900 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center border  border-gray-700 hover:scale-125 "
                href=""
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                className="bg-gray-900 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center border  border-gray-700 hover:scale-125 "
                href=""
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                className="bg-gray-900 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center border  border-gray-700 hover:scale-125 "
                href=""
              >
                {" "}
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-xl font-bold ">استكشف</h2>
            <Link to="/">الرئيسية</Link>
            <Link to="blog">المدونة</Link>
            <Link to="about">من نحن</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-xl font-bold ">التصنيفات</h2>
            <Link to="/">اضاءة</Link>
            <Link to="blog">بورتريه</Link>
            <Link to="about">مناظر طبيعية</Link>
            <Link to="about">تقنيات </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-xl font-bold ">ابقى على اطلاع</h2>
            <p>
              اشترك للحصول على أحدث المقالات <br />
              والتحديثات.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-md">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="bg-gray-900 border border-gray-700 text-white placeholder-gray-400 rounded-2xl px-6 py-4 w-full focus:outline-none focus:border-orange-600 transition-colors"
              />
              <button className="bg-brand main-bg-color text-white font-bold rounded-2xl px-6 py-4 w-full transition-colors cursor-pointer">
                اشترك
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 w-full p-5 flex justify-between">
          <p>  © 2026 عدسة. صنع بكل <i className="fa-solid fa-heart main-color "></i>  جميع الحقوق محفوظة.  </p>
          <div className="flex  gap-5">
            <Link className=" text-gray-500 hover:orange-500" to="privacy"> سياسة الخصوصية </Link>
            <Link className="text-gray-500 hover:orange-500" to="services"> شروط الخدمة  </Link>
          </div>
        </div>
      </div>
    </>
  
}
