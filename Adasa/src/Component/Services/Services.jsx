import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <div className=" bg-black py-12">
        <div className=" flex flex-col items-center gap-5 m-auto w-1/2 my-6 ">
          <div className=" flex justify-evenly ">
            <Link className="text-gray-600 hover:text-white" to="/">
              الرئيسية
            </Link>

            <i className="fa-solid fa-angle-left text-gray-600 my-2 "></i>

            <h5 className="main-color"> شروط الخدمة</h5>
          </div>

          <div className=" border-2 bg-amber-600/50 border-orange-500 w-14 h-14 rounded-2xl flex justify-center items-center p-9 ">
            <i className="fa-solid fa-lock main-color text-4xl "></i>
          </div>

          <h5 className="text-white text-5xl font-bold"> شروط الخدمة </h5>

          <p className="text-gray-400">آخر تحديث: 15 يناير 2026</p>
        </div>

        <div className="w-3/4 m-auto flex flex-col gap-6 ">
          <div className="flex items-center gap-3 border-2 border-yellow-200/50 bg-amber-500/50 rounded-2xl p-5 ">
            <i className="fa-solid fa-triangle-exclamation text-yellow-300  "></i>

            <div className="flex flex-col gap-2">
              <h5 className="text-yellow-300"> إشعار مهم</h5>
              <h6 className="text-yellow-500">
                يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول أو
                استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.
              </h6>
            </div>
          </div>

          <div className="flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">1</h5>
            </div>

            <div className="flex flex-col gap-3 ">
              <h5 className=" text-white text-2xl font-bold ">
                الموافقة على الشروط
              </h5>
              <h6 className=" text-gray-400 ">
                بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة
                هذه وجميع القوانين واللوائح المعمول بها. إذا لم
                <br /> توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا
                الموقع أو الوصول إليه.
              </h6>
            </div>
          </div>

          <div className=" flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">2</h5>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className=" text-white text-2xl font-bold ">
                رخصة الاستخدام
              </h5>
              <p className="text-gray-500">
                يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي
                غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.
              </p>
              <h6 className="text-gray-300">بموجب هذا الترخيص لا يجوز لك:</h6>
              <ul className=" flex flex-col  gap-2 ">
                <li className="flex gap-2 items-center ">
                  <i className="fa-solid fa-xmark text-red-500 "></i>
                  <h5 className="text-gray-400">تعديل أو نسخ المواد</h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i className="fa-solid fa-xmark text-red-500 "></i>
                  <h5 className="text-gray-400">
                    استخدام المواد لأي غرض تجاري أو للعرض العام
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i className="fa-solid fa-xmark text-red-500 "></i>
                  <h5 className="text-gray-400">
                    محاولة فك أو عكس هندسة أي برنامج على الموقع
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i className="fa-solid fa-xmark text-red-500 "></i>
                  <h5 className="text-gray-400">
                    إزالة أي حقوق نشر أو علامات ملكية من المواد
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i className="fa-solid fa-xmark text-red-500 "></i>
                  <h5 className="text-gray-400">
                    نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر
                  </h5>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">3</h5>
            </div>

            <div className="flex flex-col gap-3 ">
              <h5 className=" text-white text-2xl font-bold ">
                إخلاء المسؤولية
              </h5>
              <h6 className=" text-gray-400 ">
                المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا
                يقدم أي ضمانات، صريحة أو ضمنية، ويخلي
                <br /> مسؤوليته من جميع الضمانات الأخرى.
              </h6>
            </div>
          </div>

          <div className="flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">4</h5>
            </div>

            <div className="flex flex-col gap-3 ">
              <h5 className=" text-white text-2xl font-bold ">القيود </h5>
              <h6 className=" text-gray-400 ">
                افي أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي
                أضرار ناتجة عن استخدام أو عدم القدرة على استخدام
                <br /> المواد على الموقع.
              </h6>
            </div>
          </div>

          <div className=" flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">5</h5>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className=" text-white text-2xl font-bold ">
                محتوى المستخدم
              </h5>
              <p className="text-gray-500">
                يإذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً
                غير حصري وعالمي ومجاني لاستخدام هذا المحتوى
                <br /> وإعادة إنتاجه وتعديله وتوزيعه.
              </p>
              <h6 className="text-gray-300">يجب ألا يكون محتواك:</h6>
              <ul className=" flex flex-col  gap-2 ">
                <li className="flex gap-2 items-center ">
                  <i className="fa-solid fa-xmark text-red-500 "></i>
                  <h5 className="text-gray-400">
                    أن يكون تشهيرياً أو فاحشاً أو مسيئاً
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i className="fa-solid fa-xmark text-red-500 "></i>
                  <h5 className="text-gray-400">
                    انتهاك حقوق الملكية الفكرية للآخرين
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i className="fa-solid fa-xmark text-red-500 "></i>
                  <h5 className="text-gray-400">
                    احتواء فيروسات أو أكواد ضارة
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i className="fa-solid fa-xmark text-red-500 "></i>
                  <h5 className="text-gray-400">
                    انتهاك أي قوانين أو لوائح معمول بها
                  </h5>
                </li>
                <li className="flex gap-2 items-center ">
                  <i className="fa-solid fa-xmark text-red-500 "></i>
                  <h5 className="text-gray-400">
                    الإعلان عن منتجات أو خدمات غير مصرح بها
                  </h5>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">6</h5>
            </div>

            <div className="flex flex-col gap-3 ">
              <h5 className=" text-white text-2xl font-bold ">التعديلات </h5>
              <h6 className=" text-gray-400 ">
                قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا
                الموقع، فإنك توافق على الالتزام بالنسخة الحالية <br />
                من شروط الخدمة.
              </h6>
            </div>
          </div>

          <div className="flex gap-3  p-5 ">
            <div className=" main-bg-color w-12 h-9 rounded-2xl flex justify-center items-center ">
              <h5 className="text-white font-bold  ">7</h5>
            </div>
            <div className="flex flex-col gap-6">
              <h5 className=" text-white text-2xl font-bold ">
                {" "}
                معلومات الاتصال
              </h5>
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
