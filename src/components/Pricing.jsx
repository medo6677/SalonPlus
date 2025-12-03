import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaRocket, FaStar, FaCrown, FaGift } from 'react-icons/fa';

const WhatsAppModal = lazy(() => import('./WhatsAppModal'));

const Pricing = ({ onSubscribeClick }) => {
    const [selectedPlan, setSelectedPlan] = React.useState(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handlePlanClick = (plan) => {
        setSelectedPlan({
            name: plan.name,
            price: plan.price,
            duration: plan.duration,
            features: plan.features
        });
        setIsModalOpen(true);
    };
    const plans = [
        {
            id: 'monthly',
            name: 'الباقة الشهرية',
            price: '1000',
            duration: '30 يوم',
            subtitle: 'مناسبة للتجربة أو للمحلات الصغيرة',
            icon: <FaRocket />,
            features: [
                'تفعيل لمدة 30 يوم',
                'بدون أي مميزات إضافية',
                'دعم فني خلال فترة الاشتراك',
                'الوصول الكامل للمميزات الأساسية'
            ],
            color: 'from-blue-500 to-blue-600',
            highlighted: false
        },
        {
            id: 'quarterly',
            name: 'الباقة ربع السنوية',
            price: '2500',
            duration: '90 يوم',
            subtitle: 'لمن يريد استقرار أطول بدون مميزات إضافية',
            icon: <FaStar />,
            features: [
                'تفعيل لمدة 90 يوم',
                'بدون أي مميزات إضافية',
                'دعم فني كامل',
                'الوصول للمميزات الأساسية'
            ],
            color: 'from-purple-500 to-purple-600',
            highlighted: false
        },
        {
            id: 'semiannual',
            name: 'الباقة نصف السنوية',
            price: '5000',
            duration: '180 يوم',
            subtitle: 'باقة قوية بها مميزات إضافية مهمة',
            icon: <FaCrown />,
            badge: 'توفير 1000 جنيه',
            features: [
                'تفعيل لمدة 180 يوم',
                'توفير 1000 جنيه عن الشهري',
                'دعم فني أسرع',
                'إمكانية إضافة موظف إضافي',
                'تقارير موسّعة وتحليلية',
                'تخصيص مرن للخدمات والأسعار'
            ],
            color: 'from-gold-500 to-gold-600',
            highlighted: true
        },
        {
            id: 'annual',
            name: 'الباقة السنوية',
            price: '9000',
            duration: '365 يوم',
            subtitle: 'أفضل باقة – مميزات كاملة + VIP',
            icon: <FaCrown />,
            badge: 'توفير 3000 جنيه',
            features: [
                'تفعيل لمدة 365 يوم',
                'توفير 3000 جنيه عن الشهري',
                'دعم فني أولوي 24/7',
                'تقارير تحليلية احترافية',
                'تخصيص واجهة النظام لهوية المحل',
                'إضافة عدد أكبر من الموظفين',
                'خصم خاص على التجديد السنوي'
            ],
            color: 'from-gradient-to-r from-purple-600 to-pink-600',
            highlighted: true
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section id="pricing" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(234,179,8,0.1),transparent_50%)]"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block py-2 px-6 rounded-full bg-gold-500/20 border border-gold-500/50 text-gold-400 font-bold text-sm mb-4">
                        الباقات والأسعار
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        اختر <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">الباقة المناسبة</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
                        باقات مرنة تناسب جميع احتياجاتك – ابدأ مجاناً واختر الباقة التي تناسب حجم عملك
                    </p>
                </motion.div>

                {/* Free Trial Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto mb-20"
                >
                    <div className="relative bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-2xl md:rounded-3xl p-6 md:p-12 backdrop-blur-sm overflow-hidden group hover:border-green-500/50 transition-all duration-300">
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Gift Icon */}
                        <div className="absolute top-4 left-4 md:top-6 md:left-6 w-12 h-12 md:w-16 md:h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                            <FaGift className="text-2xl md:text-3xl text-green-400" />
                        </div>

                        <div className="relative z-10 text-center md:text-right pr-0 md:pr-20 pt-8 md:pt-0">
                            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 mt-4 leading-tight">
                                ابدأ مجانًا – بدون أي التزام
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
                                جرّب صالون بلس مجانًا لمدة <span className="text-green-400 font-bold">7 أيام</span> بدون بطاقة أو بيانات دفع.
                                <br className="hidden sm:block" />
                                وصول كامل للمميزات الأساسية وتجربة حقيقية للنظام.
                            </p>
                            <button
                                onClick={() => handlePlanClick({
                                    name: 'فترة تجريبية مجانية',
                                    price: '0',
                                    duration: '7 أيام',
                                    features: ['تجربة كاملة للنظام', 'بدون فيزا', 'دعم فني']
                                })}
                                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-base md:text-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 md:gap-3"
                            >
                                <FaGift className="text-lg md:text-xl" />
                                جرب الآن مجانًا
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Pricing Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden group ${plan.highlighted ? 'ring-2 ring-gold-500 shadow-2xl shadow-gold-500/20' : 'border border-gray-800'
                                }`}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black text-xs font-bold py-1.5 px-4 rounded-full z-10">
                                    {plan.badge}
                                </div>
                            )}

                            {/* Highlighted Glow */}
                            {plan.highlighted && (
                                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            )}

                            <div className="relative z-10 p-6">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-2xl text-white">{plan.icon}</span>
                                </div>

                                {/* Plan Name */}
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{plan.subtitle}</p>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-white">{plan.price}</span>
                                        <span className="text-gray-400">جنيه</span>
                                    </div>
                                    <p className="text-gold-400 font-medium mt-1">{plan.duration}</p>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                                                <FaCheck className="text-gold-500 text-xs" />
                                            </div>
                                            <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    onClick={() => handlePlanClick(plan)}
                                    className={`w-full font-bold py-3.5 rounded-xl transition-all duration-300 ${plan.highlighted
                                        ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:scale-105'
                                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40'
                                        }`}
                                >
                                    اشترك الآن
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 text-lg mb-4">
                        غير متأكد من الباقة المناسبة؟
                    </p>
                    <button
                        onClick={onSubscribeClick}
                        className="text-gold-400 font-bold hover:text-gold-300 transition-colors underline decoration-gold-500/50"
                    >
                        تحدث مع فريقنا للمساعدة
                    </button>
                </motion.div>
            </div>

            {/* WhatsApp Modal with Plan Details */}
            <Suspense fallback={null}>
                {isModalOpen && (
                    <WhatsAppModal
                        isOpen={isModalOpen}
                        onClose={() => {
                            setIsModalOpen(false);
                            setSelectedPlan(null);
                        }}
                        planDetails={selectedPlan}
                    />
                )}
            </Suspense>
        </section>
    );
};

export default Pricing;
