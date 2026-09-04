import React from "react";
import { posts } from "../../Data/Posts";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");

  return (
    <div>
      <div className="bg-gray-950 p-7 ">
        <div className="flex flex-col items-center gap-6 ">
          <div className="main-color flex gap-2 items-center bg-orange-500/50 p-3 rounded-3xl w-35">
            <i className=" fa-solid fa-circle text-xs "></i>
            <i className="fa-solid fa-newspaper"></i>
            <span>مدونتنا </span>
          </div>

          <h2 className="main-color font-bold text-6xl">
            <span className="text-white font-bold text-6xl">استكشف </span>
            مقالاتنا{" "}
          </h2>

          <p className="text-gray-400 font-bold ">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </div>

      <div className="bg-black p-6 ">
        <div className="flex justify-between items-center gap-4 flex-wrap p-6">
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              className="bg-gray-900 border border-gray-800 rounded-full pr-12 pl-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 w-72"
            />
          </div>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setSelectedCategory("جميع المقالات")}
              className={`px-6 py-3 rounded-full font-bold transition-colors ${
                selectedCategory === "جميع المقالات"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-900 text-gray-400 hover:text-white hover:border hover:border-orange-500 "
              }`}
            >
              جميع المقالات
            </button>

            <button
              onClick={() => setSelectedCategory("إضاءة")}
              className={`px-6 py-3 rounded-full font-bold transition-colors ${
                selectedCategory === "إضاءة"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-900 text-gray-400 hover:text-white hover:border hover:border-orange-500 "
              }`}
            >
              إضاءة
            </button>

            <button
              onClick={() => setSelectedCategory("بورتريه")}
              className={`px-6 py-3 rounded-full font-bold transition-colors ${
                selectedCategory === "بورتريه"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-900 text-gray-400 hover:text-white hover:border hover:border-orange-500 "
              }`}
            >
              بورتريه
            </button>

            <button
              onClick={() => setSelectedCategory("مناظر طبيعية")}
              className={`px-6 py-3 rounded-full font-bold transition-colors ${
                selectedCategory === "مناظر طبيعية"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-900 text-gray-400 hover:text-white hover:border hover:border-orange-500 "
              }`}
            >
              مناظر طبيعية
            </button>

            <button
              onClick={() => setSelectedCategory("تقنيات")}
              className={`px-6 py-3 rounded-full font-bold transition-colors ${
                selectedCategory === "تقنيات"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-900 text-gray-400 hover:text-white hover:border hover:border-orange-500 "
              }`}
            >
              تقنيات
            </button>

            <button
              onClick={() => setSelectedCategory("معدات")}
              className={`px-6 py-3 rounded-full font-bold transition-colors ${
                selectedCategory === "معدات"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-900 text-gray-400 hover:text-white hover:border hover:border-orange-500 "
              }`}
            >
              معدات
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center px-6 pb-4">
          <p className="text-gray-400 text-sm">
            عرض <span className="text-orange-500 font-bold">28</span> مقالات
          </p>

          <div className="flex gap-2 bg-gray-900 rounded-xl p-1">
            <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-white">
              <i className="fa-solid fa-bars"></i>
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-orange-500 text-white">
              <i className="fa-solid fa-table-cells"></i>
            </button>
          </div>
        </div>

        <Link to="/mastering" className="flex flex-wrap gap-6 ">
          {posts.map((post) => (
            <div key={post.id} className="  w-full lg:w-[32%]  py-4 group ">
              <div className=" bg-gray-950 rounded-3xl overflow-hidden hover:-translate-y-3 duration-300 ">
                <div className="relative  ">
                  <img
                    className=" w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300  "
                    src={post.image}
                    alt=" post.title"
                  />
                  <h3 className="absolute top-3 right-3 text-white bg-black w-25 h-7 flex justify-center items-center rounded-2xl ">
                    {post.category}
                  </h3>
                </div>
                <div className="p-6 flex flex-col gap-2 ">
                  <div className="flex items-center gap-2 text-xs text-gray-500 ">
                    <i className="fa-regular fa-clock"></i>
                    <h5> {post.readTime}</h5>
                    <h6>.</h6>
                    <h5> {post.date}</h5>
                  </div>
                  <h2 className="text-xl font-bold text-white group-hover:text-orange-600 ">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 ">{post.excerpt}</p>
                  <div className="flex items-center justify-between ">
                    <div className="flex gap-2">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={post.author.avatar}
                        alt="post.author.name"
                      />
                      <div>
                        <h3 className="text-white text-sm">
                          {" "}
                          {post.author.name}
                        </h3>
                        <h4 className="text-xs text-gray-600">
                          {" "}
                          {post.author.role}
                        </h4>
                      </div>
                    </div>
                    <i className="fa-solid fa-circle-arrow-left text-2xl text-orange-600  group-hover:text-white "></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
}
