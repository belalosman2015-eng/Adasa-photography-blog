import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <>
      <div className=" bg-black py-12">
        <div className=" flex flex-col items-center gap-5 m-auto w-1/2 my-6 ">
          <div className=" flex justify-evenly ">
            <Link className="text-gray-600 hover:text-white" to="/">
              الرئيسية
            </Link>

            <i className="fa-solid fa-angle-left text-gray-600 my-2 "></i>

            <h5 className="main-color">سياسة الخصوصية</h5>
          </div>

          <div className=" border-2 bg-amber-600/50 border-orange-500 w-14 h-14 rounded-2xl flex justify-center items-center p-9 ">
            <i className="fa-solid fa-lock main-color text-4xl "></i>
          </div>

          <h5 className="text-white text-5xl font-bold">سياسة الخصوصية</h5>

          <p className="text-gray-400">آخر تحديث: 15 يناير 2026</p>
        </div>

        <div className="w-3/4 m-auto flex flex-col gap-6 ">
          <div className="flex gap-3 border-2 border-amber-600 bg-amber-700/50 rounded-2xl p-5 ">
            <i className="fa-solid fa-shield main-color my-1 "></i>

            <div className="flex flex-col gap-2">
              <h5 className="main-color">خصوصيتك تهمنا</h5>
              <h6 className="text-amber-500">
                نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
              </h6>
            </div>
          </div>

          <div className="flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">1</h5>
            </div>

            <div className="flex flex-col ">
              <h5 className=" text-white text-2xl font-bold "> مقدمة </h5>
              <h6 className=" text-gray-400 ">
                <br /> مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية
                بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية
                ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة
                بك.
              </h6>
            </div>
          </div>

          <div className=" flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">2</h5>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className=" text-white text-2xl font-bold ">
                المعلومات التي نجمعها
              </h5>

              <ul className=" flex flex-col  gap-2 ">
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400">
                    {" "}
                    <span className="text-white">بيانات الهوية:</span> تشمل
                    الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400">
                    <span className="text-white">بيانات الاتصال :</span> تشمل
                    عنوان البريد الإلكتروني.
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400">
                    <span className="text-white"> البيانات التقنية:</span> تشمل
                    عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400">
                    <span className="text-white">بيانات الاستخدام:</span> تشمل
                    معلومات حول كيفية استخدامك لموقعنا وخدماتنا.
                  </h5>
                </li>
              </ul>
            </div>
          </div>

          <div className=" flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">3</h5>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className=" text-white text-2xl font-bold ">
                كيف نستخدم معلوماتك
              </h5>

              <ul className=" flex flex-col  gap-2 ">
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400">لتقديم خدمتنا والحفاظ عليها</h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400">
                    لإخطارك بالتغييرات في خدمتنا
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400"> لتقديم دعم العملاء</h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400">
                    لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400"> لمراقبة استخدام خدمتنا</h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400">
                    لاكتشاف ومنع ومعالجة المشاكل التقنية
                  </h5>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">4</h5>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className=" text-white text-2xl font-bold ">
                ملفات تعريف الارتباط
              </h5>
              <h6 className=" text-gray-400 ">
                نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط
                على موقعنا. يمكنك توجيه متصفحك لرفض جميع
                <br /> ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف
                ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن
                <br /> من استخدام بعض أجزاء موقعنا. بك.
              </h6>
            </div>
          </div>

          <div className="flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">5</h5>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className=" text-white text-2xl font-bold ">أمان البيانات</h5>
              <h6 className=" text-gray-400 ">
                نلقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو
                استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق <br />
                الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم
                حاجة عملية للمعرفة.
              </h6>
            </div>
          </div>

          <div className=" flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">6</h5>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className=" text-white text-2xl font-bold ">حقوقك </h5>

              <ul className=" flex flex-col  gap-2 ">
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400">
                    طلب الوصول إلى بياناتك الشخصية
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400">طلب تصحيح بياناتك الشخصية</h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400"> طلب مسح بياناتك الشخصية</h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400">
                    الاعتراض على معالجة بياناتك الشخصية
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400">
                    طلب تقييد معالجة بياناتك الشخصية
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i class="fa-solid fa-circle-check main-color "></i>
                  <h5 className="text-gray-400">الحق في سحب الموافقة</h5>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">7</h5>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className=" text-white text-2xl font-bold "> تواصل معنا</h5>
              <h6 className=" text-gray-400 ">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
              </h6>

              <a
                href="mailto:hello@adasah.com"
                className="flex items-center gap-2 text-orange-500 hover:text-orange-400 w-fit"
              >
                <i class="fa-regular fa-envelope"></i>
                <span>hello@adasah.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
