import React from "react";
import { Link } from "react-router-dom";
import About from "./../About/About";
import profile from "../../assets/images/pro.jpg";
import P2 from "../../assets/images/P2.jpg";
import P3 from "../../assets/images/p3.jpg";
import { posts } from "../../Data/Posts";
import Mastering from "./../Mastering/Mastering";

export default function Home() {
  const firstChosseingBlogsArr = posts.slice(0, 3);
  const secondChosseingBlogsArr = posts.slice(3, 6);
  console.log(firstChosseingBlogsArr);
  console.log(secondChosseingBlogsArr);

  return (
    <>
      <div>
        <div className="bg-gray-950 p-7 ">
          <div className="flex flex-col items-center gap-7 ">
            <div className="main-color flex gap-2 items-center bg-orange-500/50 p-3 rounded-3xl w-60">
              <i className=" fa-solid fa-circle text-xs "></i>
              <i className=" fa-solid fa-circle text-s "></i>
              <span>مرحباً بك في عدسة</span>
            </div>

            <h2 className="main-color font-bold text-6xl text-center  ">
              <span className="text-white font-bold text-6xl">استكشف </span>
              فن <br />
              <span className="text-white font-bold text-6xl">
                التصوير الفوتوغرافي
              </span>
            </h2>

            <p className="text-gray-400 font-bold text-center ">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في
              <br /> التصوير.
            </p>

            <div className="flex gap-3">
              <Link
                to="blog"
                className="bg-amber-700 text-white rounded-full p-5"
              >
                استكشف المقالات <i class="fa-solid fa-arrow-left-long"></i>
              </Link>
              <Link
                to="About"
                className=" hover:border hover:border-orange-500 hover:text-orange-500 hover:bg-amber-600/50 text-white rounded-full p-5"
              >
                <i class="fa-solid fa-circle-exclamation"> </i> اعرف المزيد
              </Link>
            </div>

            <div className="px-10">
              <div className=" flex gap-5  ">
                <div className="flex flex-col gap-3 py-5 px-15 rounded-2xl bg-gray-800/50 items-center hover:scale-110 transition-transform duration-300 ">
                  <i className="fa-solid fa-newspaper main-color text-4xl "></i>

                  <span className="text-yellow-400 font-bold text-3xl ">
                    +50
                  </span>
                  <span className="text-gray-500 text-sm "> قارئ </span>
                </div>

                <div className="flex flex-col gap-3  py-5 px-15 rounded-2xl bg-gray-800/50 items-center hover:scale-110 transition-transform duration-300 ">
                  <i class="fa-solid fa-people-group main-color text-4xl  "></i>{" "}
                  <span className="text-yellow-400 font-bold text-3xl ">
                    +10ألف
                  </span>
                  <span className="text-gray-500 text-sm "> قارئ </span>
                </div>

                <div className="flex flex-col gap-3  py-5 px-15 rounded-2xl bg-gray-800/50 items-center hover:scale-110 transition-transform duration-300 ">
                  <i class="fa-solid fa-folder-open main-color text-4xl"></i>
                  <span className="text-yellow-400 font-bold text-3xl ">
                    4{" "}
                  </span>
                  <span className="text-gray-500 text-sm "> تصنيفات</span>
                </div>

                <div className="flex flex-col gap-3  py-5 px-15 rounded-2xl bg-gray-800/50 items-center hover:scale-110 transition-transform duration-300 ">
                  <i class="fa-solid fa-pen-nib main-color text-4xl "></i>
                  <span className="text-yellow-400 font-bold text-3xl ">6</span>
                  <span className="text-gray-500 text-sm "> كاتب </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black pt-25 p-6 flex flex-col gap-6 ">
          <div className="main-color flex gap-2 items-center border border-amber-700 bg-orange-600/50 p-2 rounded-3xl w-25">
            <i className=" fa-solid fa-circle text-xs "></i>
            <i className=" fa-solid fa-circle text-s "></i>
            <span> مميز </span>
          </div>
          <h2 className="text-white text-6xl font-bold ">مقالات مختارة</h2>
          <div className="flex justify-between">
            <p className="text-gray-500 text-lg font-bold ">
              محتوى منتقى لبدء رحلة تعلمك
            </p>
            <Link
              to="blog"
              className="bg-amber-800 p-3 text-white rounded-2xl "
            >
              عرض الكل <i class="fa-solid fa-chevron-left"></i>{" "}
            </Link>
          </div>
          <Link to="/mastering" className="flex flex-col gap-6  ">
            {firstChosseingBlogsArr.map((post) => (
              <div key={post.id} className="group">
                <div className="flex flex-col lg:flex-row bg-gray-900 rounded-3xl overflow-hidden group-hover:border border-amber-700/50 group ">
                  {/* الصورة - النص التاني */}
                  <div className=" w-full lg:w-1/2 relative overflow-hidden ">
                    <img
                      src={post.image}
                      alt="إتقان تصوير الساعة الذهبية"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 "
                    />
                    <span className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center gap-1">
                      <i className="fa-solid fa-star"></i>
                      {post.category}
                    </span>
                  </div>

                  {/* النص - النص كله على الشمال */}
                  <div className=" w-full lg:w-1/2 p-10 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-black text-orange-500 text-sm px-4 py-1 rounded-full">
                          {post.category}
                        </span>

                        <span className="flex items-center gap-1 text-gray-400 text-sm">
                          <i className="fa-regular fa-clock"></i>
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-white text-3xl font-bold group-hover:text-orange-500  duration-300 ">
                        {post.title}
                      </h2>

                      <p className="text-gray-400">{post.excerpt}</p>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <h3 className="text-white text-sm font-bold">
                            {post.author.name}{" "}
                          </h3>
                          <h4 className="text-gray-500 text-xs">
                            {" "}
                            {post.date}
                          </h4>
                        </div>
                        <div className="relative">
                          <img
                            src={post.author.avatar}
                            alt=" author"
                            className="w-12 h-12 rounded-full"
                          />
                          <span className="absolute bottom-0 left-0 w-3 h-3 bg-orange-500 rounded-full border-2 border-gray-900"></span>
                        </div>
                      </div>

                      <Link
                        to="/mastering"
                        className="flex items-center gap-2 text-orange-500 font-bold"
                      >
                        <i className="fa-solid fa-arrow-left"></i>
                        اقرأ المقال
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Link>
        </div>

        <div className="bg-gray-950 p-20 ">
          <div className="flex flex-col items-center gap-7 ">
            <div className="main-color flex gap-2 items-center bg-orange-600/50 border border-orange-800 p-3 rounded-3xl w-40">
              <i className=" fa-solid fa-circle text-xs "></i>
              <i className=" fa-solid fa-circle text-s "></i>
              <span> التصنيفات</span>
            </div>

            <h2 className=" text-white font-bold text-6xl text-center  ">
              استكشف حسب الموضوع
            </h2>

            <p className="text-gray-400 font-bold text-center text-s ">
              ااعثر على محتوى مصمم حسب اهتماماتك
            </p>

            <div className="w-full">
              <div className=" flex flex-wrap gap-4  ">
                <Link className=" flex justify-between px-5 w-[calc(50%-8px)] md:w-[calc(25%-12px)] group hover:-translate-y-3 duration-800 hover:bg-amber-800/50  py-5  rounded-2xl border border-amber-800/50 bg-gray-800/50 ">
                  <div className="flex flex-col">
                    <div className=" mb-3 w-12 h-12 bg-amber-950/50 rounded-2xl flex justify-center items-center border border-amber-700/50  ">
                      <i className="fa-solid fa-sun text-orange-600 group-hover:text-white "></i>
                    </div>
                    <h5 className="text-lg text-white">اضاءة</h5>
                    <h6 className="text-gray-400 group-hover:text-white  ">
                      3 مقاله
                    </h6>
                  </div>
                  <i className=" my-8 fa-solid fa-circle-chevron-left group-hover:text-orange-600/50 text-3xl "></i>
                </Link>
                <Link className=" flex justify-between px-5 w-[calc(50%-8px)] md:w-[calc(25%-12px)]  group hover:-translate-y-3 duration-800 hover:bg-amber-800/50  py-5  rounded-2xl border border-amber-800/50 bg-gray-800/50 ">
                  <div className="flex flex-col">
                    <div className=" mb-3 w-12 h-12 bg-amber-950/50 rounded-2xl flex justify-center items-center border border-amber-700/50  ">
                      <i className=" fa-solid fa-user   text-orange-600 group-hover:text-white "></i>
                    </div>
                    <h5 className="text-lg text-white">بورتريه</h5>
                    <h6 className="text-gray-400 group-hover:text-white  ">
                      3 مقاله
                    </h6>
                  </div>
                  <i className=" my-8 fa-solid fa-circle-chevron-left group-hover:text-orange-600/50 text-3xl "></i>
                </Link>
                <Link className=" flex justify-between px-5 w-[calc(50%-8px)] md:w-[calc(25%-12px)]  group hover:-translate-y-3 duration-800 hover:bg-amber-800/50  py-5  rounded-2xl border border-amber-800/50 bg-gray-800/50 ">
                  <div className="flex flex-col">
                    <div className=" mb-3 w-12 h-12 bg-amber-950/50 rounded-2xl flex justify-center items-center border border-amber-700/50  ">
                      <i className="fa-solid fa-mountain-sun text-orange-600 group-hover:text-white "></i>
                    </div>
                    <h5 className="text-lg text-white">مناظر طبيعية</h5>
                    <h6 className="text-gray-400 group-hover:text-white  ">
                      2 مقاله
                    </h6>
                  </div>
                  <i className=" my-8 fa-solid fa-circle-chevron-left group-hover:text-orange-600/50 text-3xl "></i>
                </Link>
                <Link className=" flex justify-between px-5 w-[calc(50%-8px)] md:w-[calc(25%-12px)]  group hover:-translate-y-3 duration-800 hover:bg-amber-800/50  py-5  rounded-2xl border border-amber-800/50 bg-gray-800/50 ">
                  <div className="flex flex-col">
                    <div className=" mb-3 w-12 h-12 bg-amber-950/50 rounded-2xl flex justify-center items-center border border-amber-700/50  ">
                      <i className=" fa-solid fa-sliders text-orange-600 group-hover:text-white "></i>
                    </div>
                    <h5 className="text-lg text-white">تقنيات</h5>
                    <h6 className="text-gray-400 group-hover:text-white  ">
                      5 مقاله
                    </h6>
                  </div>
                  <i className=" my-8 fa-solid fa-circle-chevron-left group-hover:text-orange-600/50 text-3xl "></i>
                </Link>
                <Link className=" flex justify-between px-5 w-[calc(50%-8px)] md:w-[calc(25%-12px)]  group hover:-translate-y-3 duration-800 hover:bg-amber-800/50  py-5  rounded-2xl border border-amber-800/50 bg-gray-800/50 ">
                  <div className="flex flex-col">
                    <div className=" mb-3 w-12 h-12 bg-amber-950/50 rounded-2xl flex justify-center items-center border border-amber-700/50  ">
                      <i className=" fa-solid fa-gear text-orange-600 group-hover:text-white "></i>
                    </div>
                    <h5 className="text-lg text-white">معدات</h5>
                    <h6 className="text-gray-400 group-hover:text-white  ">
                      3 مقاله
                    </h6>
                  </div>
                  <i className=" my-8 fa-solid fa-circle-chevron-left group-hover:text-orange-600/50 text-3xl "></i>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black pt-25 p-6 flex flex-col gap-6 ">
          <div className="main-color flex gap-2 items-center border border-amber-700 bg-orange-600/50 p-2 rounded-3xl w-25">
            <i className=" fa-solid fa-circle text-xs "></i>
            <i className=" fa-solid fa-circle text-s "></i>
            <span> الأحدث </span>
          </div>
          <h2 className="text-white text-6xl font-bold "> أحدث المقالات</h2>
          <div className="flex justify-between">
            <p className="text-gray-500 text-lg font-bold ">
              محتوى جديد طازج من المطبعة
            </p>
            <Link to="blog" className="text-orange-500 ">
              عرض جميع المقالات <i class="fa-solid fa-arrow-left-long"></i>
            </Link>
          </div>
          <Link to="/mastering" className="flex flex-wrap gap-6 ">
            {secondChosseingBlogsArr.map((post) => (
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

        <div className="bg-black py-16 px-6">
          <div className="max-w-3xl mx-auto bg-gray-900/60 border border-gray-800 rounded-3xl p-10 text-center flex flex-col items-center gap-4">
            <div className="w-14 h-14 bg-orange-600 rounded-2xl flex justify-center items-center">
              <i className="fa-solid fa-envelope text-white text-xl"></i>
            </div>

            <h2 className="text-white font-bold text-3xl">
              اشترك في <span className="main-color">نشرتنا الإخبارية</span>
            </h2>

            <p className="text-gray-400">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>

            <div className="flex gap-2 mt-2 w-full max-w-lg">
              <Link
                to="/"
                className="bg-amber-600 text-white font-bold rounded-xl px-6 py-3 whitespace-nowrap text-center"
              >
                اشترك الآن
              </Link>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 bg-black border border-gray-700 rounded-xl px-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-600"
              />
            </div>

            <div className="flex items-center gap-4 text-gray-500 text-sm mt-2">
              <div className="flex items-center gap-1">
                <div className="flex -space-x-2">
                  <img
                    src={profile}
                    alt="author"
                    className="w-6 h-6 rounded-full border-2 border-gray-900"
                  />
                  <img
                    src={P2}
                    alt="author"
                    className="w-6 h-6 rounded-full border-2 border-gray-900"
                  />
                  <img
                    src={P3}
                    alt="author"
                    className="w-6 h-6 rounded-full border-2 border-gray-900"
                  />
                </div>
                <span>انضم لـ 10,000+ مصور</span>
              </div>
              <span>بدون إزعاج</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
