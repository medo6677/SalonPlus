import React, { useState } from 'react';
import { FaTimes, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppModal = ({ isOpen, onClose, planDetails = null }) => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    // Update message when plan details change
    React.useEffect(() => {
        if (planDetails) {
            const planMessage = `مرحباً، أنا مهتم بالاشتراك في:\n\n📦 ${planDetails.name}\n💰 السعر: ${planDetails.price} جنيه\n⏱️ المدة: ${planDetails.duration}\n\n${planDetails.features ? planDetails.features.map(f => `✓ ${f}`).join('\n') : ''}\n\nأرجو التواصل معي للاشتراك.`;
            setMessage(planMessage);
        } else {
            setMessage('');
        }
    }, [planDetails]);

    const sendToWhatsApp = () => {
        if (!message.trim()) {
            alert('من فضلك اكتب رسالتك أولاً');
            return;
        }

        const phoneNumber = '201222306014';
        const fullMessage = name
            ? `مرحباً، أنا ${name}\n\n${message}`
            : message;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
        window.open(whatsappUrl, '_blank');

        // Reset and close
        setMessage('');
        setName('');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                >
                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-md"
                    >
                        <div className="bg-gradient-to-br from-gray-900 to-black border border-gold-500/30 rounded-2xl shadow-2xl overflow-hidden">
                            {/* Header */}
                            <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-6 relative">
                                <button
                                    onClick={onClose}
                                    className="absolute left-4 top-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
                                >
                                    <FaTimes />
                                </button>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <FaWhatsapp className="text-3xl text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-black">
                                            {planDetails ? 'تفاصيل الباقة' : 'تواصل معنا'}
                                        </h2>
                                        <p className="text-black/70 text-sm">
                                            {planDetails ? 'أكمل بياناتك للاشتراك' : 'سنرد عليك في أقرب وقت'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-6 space-y-4">
                                {/* Name Input */}
                                <div>
                                    <label className="block text-white font-medium mb-2">
                                        الاسم (اختياري)
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="اكتب اسمك..."
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                                    />
                                </div>

                                {/* Message Input */}
                                <div>
                                    <label className="block text-white font-medium mb-2">
                                        رسالتك <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="اكتب رسالتك هنا... مثلاً: عايز أعرف أكتر عن صالون بلس"
                                        rows="5"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                                    />
                                </div>

                                {/* Send Button */}
                                <button
                                    onClick={sendToWhatsApp}
                                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105"
                                >
                                    <FaWhatsapp className="text-2xl" />
                                    <span>إرسال عبر واتساب</span>
                                </button>

                                <p className="text-gray-400 text-center text-sm">
                                    بالضغط على الزر، سيتم فتح واتساب مع رسالتك
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppModal;
