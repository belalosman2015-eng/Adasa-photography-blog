import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/images/bg.jpg";
import profile from "../../assets/images/pro.jpg";
import bgp from "../../assets/images/bg-p.jpg";

export default function Mastering() {
  return (
    <div>
      <div className="relative min-h-[500px] flex flex-col justify-end p-8">
        <img
          src={bg}
          alt="cover"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent -z-10"></div>

        <div className=" mx-5 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-3xl absolute top-6 right-6 flex items-center gap-2 text-sm text-gray-300">
          <Link to="/">
            <i className="fa-solid fa-house"></i>
          </Link>
          <i className="fa-solid fa-chevron-left text-xs"></i>
          <Link to="/blog">
            <span>المدونة</span>
          </Link>
          <i className="fa-solid fa-chevron-left text-xs"></i>
          <span className="text-orange-500">إضاءة</span>
        </div>

        <div className=" mx-20 flex items-center gap-4 text-sm text-gray-300 mb-4">
          <span className="flex items-center gap-1">
            <i className="fa-regular fa-clock"></i> 8 دقائق للقراءة
          </span>
          <span className="flex items-center gap-1">
            <i className="fa-regular fa-calendar"></i> 10 يناير 2026
          </span>
          <span className="  bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold">
            إضاءة
          </span>
        </div>

        <h1 className=" mx-20 text-white font-bold text-5xl leading-tight mb-6 max-w-3xl">
          إتقان تصوير الساعة الذهبية: دليل شامل
        </h1>

        <div className=" mx-20 flex items-center gap-3 bg-black/40 backdrop-blur-sm rounded-2xl p-3 w-fit mb-10">
          <img
            src={profile}
            alt="author"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="text-white font-bold">سالم أحمد</p>
            <p className="text-gray-400 text-sm">مصور محترف</p>
          </div>
        </div>
      </div>

      <div className="bg-black px-8 py-10 flex flex-row-reverse gap-8">
        <div className="w-80 flex flex-col gap-4">
          <div className="bg-gray-900/50 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-bold">محتويات المقال</span>
              <div className="bg-orange-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-list"></i>
              </div>
            </div>
            <ul className="  flex flex-col gap-3 text-sm text-gray-400">
              <li className="flex gap-5">
                <span className="text-gray-600">1</span>

                <span>لماذا الساعة الذهبية؟</span>
              </li>
              <li className="flex gap-5">
                <span className="text-gray-600">2</span>

                <span>التحضير المسبق</span>
              </li>
              <li className="flex gap-5">
                <span className="text-gray-600">3</span>

                <span>إعدادات الكاميرا</span>
              </li>
              <li className="flex gap-5 ">
                <span className="text-gray-600">4</span>

                <span>التكوين الفني</span>
              </li>
              <li className="flex gap-5 ">
                <span className="text-gray-600">5</span>

                <span>الخلاصة</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-9 flex justify-between text-center">
            <div className="flex flex-col gap-3 items-center bg-black p-7 rounded-2xl ">
              <i className="fa-regular fa-clock text-orange-500 mb-1"></i>
              <p className="text-white text-sm font-bold">
                {" "}
                8 دقائق <br />
                للقراءة{" "}
              </p>
              <p className="text-gray-500 text-xs">مدة القراءة</p>
            </div>

            <div className="flex flex-col gap-1 items-center bg-black p-7 rounded-2xl ">
              <i className="fa-regular fa-calendar text-orange-500 mb-1"></i>
              <p className="text-white text-sm font-bold">10 يناير</p>
              <p className="text-gray-500 text-xs">تاريخ النشر</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-orange-900/40 to-gray-900/50 rounded-2xl p-5 text-center">
            <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <i className="fa-solid fa-envelope text-white"></i>
            </div>
            <p className="text-white font-bold mb-1">لا تفوت جديدنا</p>
            <p className="text-gray-400 text-xs mb-4">
              اشترك لتصلك أحدث المقالات
            </p>
            <Link
              to="/blog"
              className="bg-orange-600 text-white font-bold rounded-xl p-3"
            >
              تصفح المزيد
            </Link>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8">
          <div className="bg-gray-900/50 rounded-2xl p-4 text-center text-gray-300 italic">
            "تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية
            حول الإضاءة والتكوين."
          </div>

          <div>
            <h2 className="text-white font-bold text-2xl mb-3 flex items-center gap-2">
              <i className="fa-solid fa-camera text-orange-500"></i>
              لماذا الساعة الذهبية؟
            </h2>
            <p className="text-gray-400 leading-relaxed">
              الساعة الذهبية هي أفضل وقت لتصوير المناظر الطبيعية والبورتريه، حيث
              يمنح الضوء الدافئ لمسة ساحرة وجذابة.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-2xl mb-3 flex items-center gap-2">
              <i className="fa-solid fa-camera text-orange-500"></i>
              التحضير المسبق
            </h2>
            <p className="text-gray-400 leading-relaxed">
              خطط لوجستك التصويرية مسبقًا، واستخدم تطبيقات تحديد وقت الساعة
              الذهبية محليًا في موقعك، وصل قبل 30 دقيقة على الأقل لأخذ زاوية.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-2xl mb-3 flex items-center gap-2">
              <i className="fa-solid fa-camera text-orange-500"></i>
              إعدادات الكاميرا
            </h2>
            <p className="text-gray-400 leading-relaxed">
              استخدم ISO منخفضة للحصول على أقل ضوضاء ممكنة، فتحة العدسة على
              f/2.8-4 للبورتريهات مع خلفية ناعمة.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-2xl mb-3 flex items-center gap-2">
              <i className="fa-solid fa-camera text-orange-500"></i>
              التكوين الفني
            </h2>
            <p className="text-gray-400 leading-relaxed">
              ضع الشمس خلف موضوعك للحصول على الإضاءة الخلفية الساحرة، أو
              استخدمها كمصدر إضاءة رئيسي وإبراز التفاصيل.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-2xl mb-3 flex items-center gap-2">
              <i className="fa-solid fa-camera text-orange-500"></i>
              الخلاصة
            </h2>
            <p className="text-gray-400 leading-relaxed">
              الساعة الذهبية هي هدية للمصورين، استغلها جيدًا واحصل على صورة
              تُبقي الأثر جميلاً.
            </p>
          </div>

          {/* الوسوم */}
          <div className="bg-gray-900/50 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 w-8 h-8 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-tag text-sm"></i>
              </div>
              <span className="text-white font-bold">الوسوم</span>
            </div>
            <div className="flex gap-2">
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                الإضاءة
              </span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                الساعة الذهبية
              </span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                تصوير خارجي
              </span>
            </div>
          </div>

          {/* مشاركة المقال */}
          <div className="bg-gray-900/50 rounded-2xl p-4 flex items-center justify-between">
            <span className="text-white font-bold">مشاركة المقال</span>
            <div className="flex gap-3 text-gray-300 text-lg">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-solid fa-link"></i>
            </div>
          </div>

          {/* بطاقة الكاتب السفلية */}
          <div className="bg-gray-900/50 rounded-2xl p-4 flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="text-gray-500 text-xs mb-1">كاتب المقال</p>
              <p className="text-white font-bold">سالم أحمد</p>
              <p className="text-gray-400 text-sm">
                مصور محترف متخصص في تصوير المناظر الطبيعية والإضاءة الفوتوغرافية
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black pt-25 p-6 flex flex-col gap-6 ">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <div className="main-color flex  items-center justify-center border border-amber-700 bg-orange-600/50 p-2 rounded-2xl w-15 h-15">
              <i className="fa-solid fa-images  text-2xl"></i>
            </div>
            <div className="">
              <h2 className="text-white text-2xl font-bold ">
                {" "}
                مقالات قد تعجبك
              </h2>
              <p className="text-gray-500 text-s  ">
                استكشف المزيد من المحتوى المميز
              </p>
            </div>
          </div>
          <Link to="blog" className="text-orange-500 ">
            عرض الكل <i class="fa-solid fa-arrow-left-long"></i>
          </Link>
        </div>

        <div className="flex flex-wrap gap-6">
          <Link to="/Mastering" className="w-full lg:w-[32%] relative rounded-3xl overflow-hidden h-[300px] group">
            <img
              src={bgp}
              alt="تصوير الليل والنجوم"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <span className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full">
              إضاءة
            </span>
            <div className="absolute bottom-0 right-0 left-0 p-6 flex flex-col gap-3">
              <h2 className="text-white text-2xl font-bold">
                تصوير الليل والنجوم: دليلك لالتقاط سماء الليل
              </h2>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 text-sm">11 دقائق للقراءة</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-300 text-sm">خالد الفيصل</span>
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face"
                    alt="خالد الفيصل"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
