import React from "react";
import { ThreeDots } from "react-loader-spinner";
import logo from "../../assets/images/logo-GdqARQRt.png";
import profile from "../../assets/images/pro.jpg";
import { Link } from "react-router-dom";

export default function About() {
  //   let { user , age , userCount , userPerson } = data;
  // console.log(user);
  // console.log(age);
  // console.log(userCount);
  // console.log(userPerson);
  // console.log(userPerson.Name);

  return (
    <>
      <div>
        <div className="bg-black py-12 flex flex-col justify-center gap-11 items-center ">
          <div className="flex flex-col items-center gap-6 ">
            <div className="main-color flex gap-2 items-center  bg-orange-500/50 p-3 rounded-3xl w-35">
              <i className=" fa-solid fa-circle text-xs "></i>
              <i className="fa-solid fa-circle text-lg "></i>
              <span>من نحن</span>
            </div>

            <h2 className="main-color font-bold text-6xl">
              <span className="text-white font-bold text-6xl">مهمتنا هي </span>
              الإعلام والإلهام
            </h2>

            <p className="text-gray-400 font-bold ">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية <br />
              لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على
              تنمية مهاراتهم من
              <br />
              خلال محتوى عالي الجودة.
            </p>
          </div>

          <div className="px-10">
            <div className=" flex gap-5  ">
              <div className="flex flex-col gap-3 border-2 py-5 px-15 rounded-2xl bg-gray-950 items-center ">
                <i className="fa-solid fa-people-group main-color text-4xl "></i>
                <span className="text-yellow-400 font-bold text-3xl ">
                  +2مليون
                </span>
                <span className="text-gray-500 text-sm ">قارئ شهرياً</span>
              </div>

              <div className="flex flex-col gap-3 border-2 py-5 px-15 rounded-2xl bg-gray-950 items-center ">
                <i className="fa-solid fa-newspaper main-color text-4xl "></i>
                <span className="text-yellow-400 font-bold text-3xl ">
                  +500
                </span>
                <span className="text-gray-500 text-sm "> مقالة منشورة </span>
              </div>

              <div className="flex flex-col gap-3 border-2 py-5 px-15 rounded-2xl bg-gray-950 items-center ">
                <i className="fa-solid fa-pen-nib main-color text-4xl "></i>
                <span className="text-yellow-400 font-bold text-3xl ">+50</span>
                <span className="text-gray-500 text-sm "> كاتب خبير</span>
              </div>

              <div className="flex flex-col gap-3 border-2 py-5 px-15 rounded-2xl bg-gray-950 items-center ">
                <i className="fa-solid fa-book-open main-color text-4xl "></i>
                <span className="text-yellow-400 font-bold text-3xl ">+15</span>
                <span className="text-gray-500 text-sm "> تصنيف </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-950 p-12 flex flex-col items-center gap-5  ">
          <div className="flex gap-3 items-baseline ">
            <span className="w-2 h-10 bg-orange-500 rounded-full"></span>
            <h2 className="text-white font-bold text-5xl">قيمنا</h2>
            <span className="w-2 h-10 bg-orange-500 rounded-full"></span>
          </div>
          <p className="text-gray-500 mb-12 ">
            المبادئ التي توجه كل ما نقوم بإنشائه
          </p>

          <div className="px-10">
            <div className=" flex gap-5 ">
              <div className=" group flex flex-col gap-3 border-2 hover:border-amber-400/30 py-5 px-15 rounded-2xl bg-gray-950 hover:bg-amber-400/30 items-center  ">
                <i className="fa-solid fa-circle-dot main-color text-4xl "></i>
                <span className="text-white group-hover:text-orange-600 font-bold text-xl ">
                  الجودة أولاً
                </span>
                <span className="text-gray-500 text-sm ">
                  {" "}
                  محتوى مدروس ومكتوب بخبرة
                </span>
              </div>
              <div className="group flex flex-col gap-3 border-2 hover:border-amber-400/30 py-5 px-15 rounded-2xl bg-gray-950 hover:bg-amber-400/30 items-center ">
                <i className="fa-solid fa-circle-dot main-color text-4xl "></i>
                <span className="text-white group-hover:text-orange-600 font-bold text-xl ">
                  تركيز عملي
                </span>
                <span className="text-gray-500 text-sm ">
                  أمثلة واقعية يمكنك تطبيقها اليوم
                </span>
              </div>

              <div className=" group flex flex-col gap-3 border-2 hover:border-amber-400/30 py-5 px-15 rounded-2xl bg-gray-950 hover:bg-amber-400/30 items-center ">
                <i className="fa-solid fa-handshake-angle main-color text-4xl "></i>
                <span className="text-white group-hover:text-orange-600 font-bold text-xl ">
                  المجتمع{" "}
                </span>
                <span className="text-gray-500 text-sm ">
                  تعلم مع آلاف المصورين
                </span>
              </div>

              <div className="group flex flex-col gap-3 border-2 hover:border-amber-400/30 py-5 px-15 rounded-2xl bg-gray-950 hover:bg-amber-400/30 items-center ">
                <i className="fa-solid fa-rotate main-color text-4xl "></i>
                <span className="text-white group-hover:text-orange-600 font-bold text-xl ">
                  دائماً محدث
                </span>
                <span className="text-gray-500 text-sm ">
                  أحدث الاتجاهات وأفضل الممارسات
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black py-12 flex flex-col justify-center gap-11 items-center ">
          <div className="flex flex-col items-center gap-6 ">
            <div className="main-color flex justify-center gap-2 items-center  bg-orange-500/50 p-3 rounded-3xl w-35">
              <i className=" fa-solid fa-circle text-xs "></i>
              <span>فريقنا </span>
            </div>

            <h2 className="text-white font-bold text-3xl">تعرف على كتابنا</h2>

            <p className="text-gray-400 font-bold ">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>

          <div>
            <div className="px-10">
              <div className=" flex gap-7 flex-wrap ">
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>

                <div className=" group flex flex-col gap-3 border-2 hover:border-amber-600/30 py-5 px-15 rounded-2xl bg-gray-950  items-center w-90  ">
                  <img
                    className="rounded-full border-4 border-gray-700 group-hover:border-amber-600/30 "
                    src={profile}
                    alt="profile"
                  />
                  <span className="text-white font-bold text-xl ">
                    سالم أحمد
                  </span>

                  <span className="main-color text-sm ">مصور محترف</span>
                  <div className="flex gap-5 text-xl ">
                    <a
                      className=" bg-gray-700 text-gray-300 hover:bg-orange-500 w-12 h-12 rounded-2xl flex justify-center items-center    "
                      href=""
                    >
                      <i class="fa-brands fa-square-x-twitter"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-gray-400 w-12 h-12 rounded-2xl flex justify-center items-center  "
                      href=""
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                    <a
                      className="bg-gray-700 text-gray-300 hover:bg-blue-500 w-12 h-12 rounded-2xl flex justify-center items-center "
                      href=""
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  bg-linear-to-br from-orange-600 via-orange-500 to-yellow-400 py-20 px-6  flex flex-col items-center gap-6 ">
          <p className="text-white text-3xl font-bold">
            لديك أسئلة؟ دعنا نتحدث!
          </p>
          <p className="text-gray-100 ">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء
            <br /> التحية، لا تتردد في التواصل.
          </p>

          <div className="flex  p-3 gap-4" >
            <Link className="flex gap-2 items-baseline bg-black text-white py-5 px-10 rounded-2xl hover:translate-y-0.5 " ><i class="fa-regular fa-envelope"></i>تواصل معنا </Link>
         
            <Link to="/blog" className="flex gap-2 items-baseline border border-gray-200 text-white py-5 px-10 rounded-2xl hover:bg-white hover:text-black " >تصفح المقالات</Link>

          </div>
        </div>
      </div>
    </>
  );
}
