import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaChartLine, FaUsers, FaCut } from 'react-icons/fa';
import heroBg from '../assets/hero-bg.png';

// Lazy load modals
const WhatsAppModal = lazy(() => import('./WhatsAppModal'));
const VideoModal = lazy(() => import('./VideoModal'));

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    return (
        <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 md:pt-0">
            {/* Background Image/Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10"></div>
                <img
                    src={heroBg}
                    alt="Barbershop Background"
                    className="w-full h-full object-cover scale-105"
                    fetchPriority="high" // Prioritize loading this image
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 relative z-20 text-center flex flex-col items-center py-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-4 md:mb-6"
                >
                    <span className="inline-block py-1 px-3 md:px-4 rounded-full bg-gold-500/20 border border-gold-500/50 text-gold-400 font-bold text-xs md:text-sm mb-3 md:mb-4 backdrop-blur-sm">
                        #1 نظام إدارة صالونات الحلاقة
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-3 md:mb-4">
                        صالون <span className="text-gold-500">بلس</span> – النظام الذكي
                        <br className="hidden sm:block" />
                        <span className="block mt-1 md:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            لإدارة محلات الحلاقة
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-6 md:mb-10 leading-relaxed px-2"
                >
                    سيطرة كاملة على المبيعات، المخزون، العملاء، والمصاريف…
                    <br className="hidden sm:block" />
                    كل ده من مكان واحد وبأسهل طريقة.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full sm:w-auto px-4"
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold py-3 md:py-4 px-8 md:px-12 rounded-full text-base md:text-lg hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        ابدأ الآن مجاناً
                    </button>

                    <button
                        onClick={() => setIsVideoOpen(true)}
                        className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full text-base md:text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaPlay className="mr-1 text-xs" />
                        </span>
                        طلب عرض توضيحي
                    </button>
                </motion.div>

                {/* Stats / Floating Icons */}
                <div className="mt-8 md:mt-16 grid grid-cols-3 gap-3 md:gap-6 lg:gap-12 w-full max-w-4xl px-2">
                    <StatItem icon={<FaChartLine />} label="زيادة الأرباح" value="+30%" delay={0.6} />
                    <StatItem icon={<FaUsers />} label="عملاء سعداء" value="+500" delay={0.8} />
                    <StatItem icon={<FaCut />} label="حلاقة يومية" value="+50" delay={1.0} />
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 hidden md:block"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll-down"></div>
                </div>
            </motion.div>

            {/* WhatsApp Modal */}
            <Suspense fallback={null}>
                {isModalOpen && <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
            </Suspense>

            {/* Video Modal */}
            <Suspense fallback={null}>
                {isVideoOpen && (
                    <VideoModal
                        isOpen={isVideoOpen}
                        onClose={() => setIsVideoOpen(false)}
                        videoUrl="" // هنا حط لينك الفيديو بتاعك لما يبقى جاهز
                    />
                )}
            </Suspense>
        </section>
    );
};

const StatItem = ({ icon, label, value, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col items-center p-2 md:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
    >
        <div className="text-gold-400 text-xl md:text-3xl mb-1 md:mb-2">{icon}</div>
        <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white">{value}</div>
        <div className="text-gray-400 text-xs md:text-sm text-center">{label}</div>
    </motion.div>
);

export default Hero;
