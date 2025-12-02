import React from 'react';
import { motion } from 'framer-motion';

const Mockups = () => {
    return (
        <section className="py-20 bg-gray-900 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        واجهة مستخدم <span className="text-gold-500">عصرية وسهلة</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        تصميم مريح للعين وسهل الاستخدام، يخليك تنجز شغلك أسرع وبدون تعقيد.
                    </p>
                </div>

                {/* Mockup Display */}
                <div className="relative mt-10 perspective-1000">
                    {/* Main Dashboard Mockup */}
                    <motion.div
                        initial={{ rotateX: 20, opacity: 0, y: 50 }}
                        whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="mx-auto max-w-5xl bg-gray-800 rounded-xl shadow-2xl border border-gray-700 overflow-hidden"
                    >
                        {/* Browser Bar */}
                        <div className="bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="ml-4 bg-gray-800 rounded-full px-4 py-1 text-xs text-gray-500 flex-1 text-center font-mono">
                                salon-plus.app/dashboard
                            </div>
                        </div>

                        {/* Dashboard UI Placeholder (CSS Art) */}
                        <div className="p-6 bg-gray-900 min-h-[500px] grid grid-cols-12 gap-6">
                            {/* Sidebar */}
                            <div className="col-span-2 hidden md:block space-y-4">
                                <div className="h-10 w-full bg-gray-800 rounded-lg"></div>
                                <div className="h-8 w-3/4 bg-gray-800/50 rounded-lg"></div>
                                <div className="h-8 w-full bg-gray-800/50 rounded-lg"></div>
                                <div className="h-8 w-5/6 bg-gray-800/50 rounded-lg"></div>
                                <div className="h-8 w-4/5 bg-gray-800/50 rounded-lg"></div>
                            </div>

                            {/* Main Content */}
                            <div className="col-span-12 md:col-span-10 space-y-6">
                                {/* Header Stats */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                                            <div className="h-4 w-1/2 bg-gray-700 rounded mb-2"></div>
                                            <div className="h-8 w-3/4 bg-gold-500/20 rounded"></div>
                                        </div>
                                    ))}
                                </div>

                                {/* Chart Area */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-64">
                                    <div className="col-span-2 bg-gray-800 rounded-xl border border-gray-700 p-4 flex items-end justify-between gap-2">
                                        {[40, 60, 45, 70, 50, 80, 65, 85, 75, 90].map((h, i) => (
                                            <div key={i} className="w-full bg-gradient-to-t from-blue-600 to-purple-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                    <div className="col-span-1 bg-gray-800 rounded-xl border border-gray-700 p-4 relative flex items-center justify-center">
                                        <div className="w-32 h-32 rounded-full border-8 border-gray-700 border-t-gold-500 border-r-gold-500 rotate-45"></div>
                                        <div className="absolute text-white font-bold">75%</div>
                                    </div>
                                </div>

                                {/* Table Area */}
                                <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 space-y-3">
                                    <div className="h-8 w-full bg-gray-700/50 rounded"></div>
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-12 w-full bg-gray-700/20 rounded flex items-center px-4 justify-between">
                                            <div className="w-1/4 h-4 bg-gray-600 rounded"></div>
                                            <div className="w-1/4 h-4 bg-gray-600 rounded"></div>
                                            <div className="w-1/4 h-4 bg-gray-600 rounded"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Mobile Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute -bottom-10 -right-10 md:right-10 w-48 md:w-64 h-96 bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden hidden md:block"
                    >
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-20"></div>
                        <div className="w-full h-full bg-gray-900 p-4 pt-10 space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                                <div className="w-20 h-4 bg-gray-800 rounded"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="aspect-square bg-gray-800 rounded-lg"></div>
                                ))}
                            </div>
                            <div className="h-20 bg-gold-500/20 rounded-xl mt-4"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Mockups;
