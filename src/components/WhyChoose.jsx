import React from 'react';
import { FaCheck, FaStar } from 'react-icons/fa';

const WhyChoose = () => {
    const reasons = [
        "واجهة سهلة الاستخدام لا تحتاج لتدريب",
        "دعم فني متواجد 24/7 لحل أي مشكلة",
        "تحديثات دورية مجانية للنظام",
        "يعمل على أي جهاز (كمبيوتر، تابلت، موبايل)",
        "أمان عالي وحماية لبياناتك",
        "أسعار تنافسية وخطط مرنة"
    ];

    return (
        <section id="why-us" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Content */}
                    <div className="w-full md:w-1/2" data-aos="fade-right">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            لماذا تختار <span className="text-primary-600">صالون بلس</span>؟
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            لأننا نفهم احتياجاتك كصاحب صالون، صممنا نظام يجمع بين السهولة والقوة، عشان تركز في شغلك وإحنا نشيل عنك هم الإدارة.
                        </p>

                        <div className="space-y-4">
                            {reasons.map((reason, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-r-4 border-gold-500"
                                >
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <FaCheck />
                                    </div>
                                    <span className="text-gray-800 font-medium text-lg">{reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual/Image */}
                    <div className="w-full md:w-1/2" data-aos="fade-left">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-2xl transform rotate-3 opacity-20"></div>
                            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                                <div className="flex items-center justify-center mb-6">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <FaStar key={star} className="text-gold-500 text-2xl" />
                                        ))}
                                    </div>
                                </div>
                                <blockquote className="text-center text-gray-600 text-xl italic mb-6">
                                    "النظام ده غير حياتي! كنت تايه في الحسابات والمخزون، دلوقتي كل حاجة واضحة قدامي بضغطة زر. أنصح أي حلاق يستخدمه."
                                </blockquote>
                                <div className="text-center">
                                    <div className="font-bold text-gray-900 text-lg">أحمد محمد</div>
                                    <div className="text-gray-500">صاحب صالون "الأناقة"</div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-gold-500 text-black font-bold py-3 px-6 rounded-lg shadow-lg transform -rotate-6">
                                +1000 صالون يثق بنا
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
