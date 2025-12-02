import React from 'react';
import { FaMoneyBillWave, FaClipboardList, FaBoxOpen, FaUserSlash, FaCalculator, FaExclamationTriangle } from 'react-icons/fa';

const Problem = () => {
    const problems = [
        {
            icon: <FaMoneyBillWave />,
            title: "ضياع المبيعات اليومية",
            desc: "صعوبة في تتبع الدخل اليومي بدقة مما يؤدي لخسائر غير مرئية."
        },
        {
            icon: <FaClipboardList />,
            title: "نسيان الأسعار والخدمات",
            desc: "عدم وجود قائمة أسعار موحدة قد يسبب تضارب في الحسابات."
        },
        {
            icon: <FaBoxOpen />,
            title: "نقص المنتجات فجأة",
            desc: "تتفاجأ بانتهاء كريمات أو أدوات مهمة في وقت الذروة."
        },
        {
            icon: <FaUserSlash />,
            title: "عدم وجود سجل للعملاء",
            desc: "لا تعرف عملاءك الدائمين ولا توجد طريقة للتواصل معهم للعروض."
        },
        {
            icon: <FaCalculator />,
            title: "مصاريف غير مسجلة",
            desc: "فواتير الكهرباء، الإيجار، والرواتب غير مخصومة من الربح بدقة."
        },
        {
            icon: <FaExclamationTriangle />,
            title: "فوضى وسوء تنظيم",
            desc: "صعوبة إدارة الورديات وحساب نسب الحلاقين بشكل عادل."
        }
    ];

    return (
        <section id="problem" className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        هل تواجه هذه <span className="text-red-600">المشاكل</span> في صالونك؟
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        الإدارة التقليدية والورقة والقلم تسبب الكثير من الفوضى وضياع الأرباح.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-red-500 group"
                        >
                            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-3xl text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
