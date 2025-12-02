import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import solutionBg from '../assets/solution-bg.png';

const Solution = () => {
    return (
        <section id="solution" className="relative py-24 flex items-center overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60 z-10"></div>
                <img
                    src={solutionBg}
                    alt="Barber Solution"
                    className="w-full h-full object-cover fixed-bg"
                />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    <div className="w-full md:w-1/2" data-aos="fade-left">
                        <div className="inline-block py-1 px-3 rounded-full bg-gold-500/20 text-gold-400 font-bold mb-4 border border-gold-500/30">
                            الحل الذكي
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            صالون بلس.. <br />
                            <span className="text-gold-500">شريك نجاحك</span> في كل خطوة
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            صالون بلس هو نظام إدارة ذكي مصمم خصيصاً لصالونات الحلاقة لحل كل مشاكل الشغل اليومي، وتنظيم كل تفاصيل المحل بشكل كامل من الألف للياء.
                        </p>

                        <div className="space-y-4">
                            {[
                                "تنظيم المواعيد والحجوزات بدقة",
                                "إدارة المخزون والمنتجات بذكاء",
                                "تقارير مالية مفصلة لصافي الربح",
                                "قاعدة بيانات كاملة للعملاء"
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <FaCheckCircle className="text-gold-500 text-xl" />
                                    <span className="text-white text-lg">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <button className="mt-10 bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gold-500 transition-colors duration-300">
                            اكتشف المزيد
                        </button>
                    </div>

                    <div className="w-full md:w-1/2 relative" data-aos="fade-right">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                            {/* Placeholder for video/image if needed, or just use the background context */}
                            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-white/10">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-white font-bold text-xl">لوحة التحكم</div>
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                </div>
                                {/* Abstract UI Representation */}
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-1/3 h-24 bg-white/5 rounded-lg animate-pulse"></div>
                                        <div className="w-1/3 h-24 bg-white/5 rounded-lg animate-pulse delay-75"></div>
                                        <div className="w-1/3 h-24 bg-white/5 rounded-lg animate-pulse delay-150"></div>
                                    </div>
                                    <div className="h-40 bg-white/5 rounded-lg w-full animate-pulse delay-200"></div>
                                    <div className="flex gap-4">
                                        <div className="h-10 bg-gold-500/20 rounded w-1/2"></div>
                                        <div className="h-10 bg-blue-500/20 rounded w-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Solution;
