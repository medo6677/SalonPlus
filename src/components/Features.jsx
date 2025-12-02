import React from 'react';
import { FaCashRegister, FaUsers, FaBoxes, FaFileInvoiceDollar, FaChartPie, FaFilePdf, FaCloudUploadAlt } from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            icon: <FaCashRegister />,
            title: "POS سريع وسهل",
            desc: "نظام نقطة بيع متطور يدعم اللمس، الباركود، والفواتير السريعة."
        },
        {
            icon: <FaUsers />,
            title: "إدارة العملاء",
            desc: "سجل كامل لبيانات العملاء مع منع تكرار أرقام الهاتف وحفظ تاريخ الزيارات."
        },
        {
            icon: <FaBoxes />,
            title: "إدارة المخزون",
            desc: "تتبع دقيق للمنتجات مع تنبيهات ذكية قبل نفاد الكمية."
        },
        {
            icon: <FaFileInvoiceDollar />,
            title: "إدارة المصاريف",
            desc: "تسجيل كل المصروفات لحساب صافي الربح بدقة متناهية."
        },
        {
            icon: <FaChartPie />,
            title: "تقارير ورسوم بيانية",
            desc: "لوحة تحكم شاملة تعرض أداء الصالون والمبيعات بشكل مرئي."
        },
        {
            icon: <FaFilePdf />,
            title: "فواتير PDF احترافية",
            desc: "إصدار فواتير إلكترونية ومشاركتها مع العملاء عبر واتساب."
        },
        {
            icon: <FaCloudUploadAlt />,
            title: "نسخ احتياطي واستعادة",
            desc: "حماية بياناتك مع نظام نسخ احتياطي لضمان عدم ضياع المعلومات."
        }
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-gold-600 font-bold tracking-wider uppercase text-sm">مميزات النظام</span>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                        كل ما تحتاجه لإدارة <span className="text-primary-600">احترافية</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-primary-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                            className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gold-500/30 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gold-500/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:bg-gold-500/10"></div>

                            <div className="w-14 h-14 bg-white shadow-md rounded-lg flex items-center justify-center text-2xl text-primary-600 mb-4 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
