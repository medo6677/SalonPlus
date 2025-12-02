import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info */}
                    <div>
                        <div className="text-2xl font-bold font-arabic text-white flex items-center gap-2 mb-6">
                            <span className="text-gold-500 text-3xl">✂️</span>
                            <span className="tracking-wider">صالون <span className="text-gold-500">بلس</span></span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            النظام الأذكى والأسهل لإدارة صالونات الحلاقة في الشرق الأوسط. صمم خصيصاً لتلبية احتياجاتك اليومية.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<FaFacebook />} href="https://www.facebook.com/maha.adel.9085790" />
                            <SocialIcon icon={<FaInstagram />} href="https://www.instagram.com/b7_r_0/" />
                            <SocialIcon icon={<FaWhatsapp />} href="https://wa.me/201222306014" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-gold-500">روابط سريعة</h3>
                        <ul className="space-y-3">
                            <FooterLink href="#hero" text="الرئيسية" />
                            <FooterLink href="#features" text="المميزات" />
                            <FooterLink href="#solution" text="عن النظام" />
                            <FooterLink href="#why-us" text="آراء العملاء" />
                            <FooterLink href="#" text="سياسة الخصوصية" />
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-gold-500">تواصل معنا</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <FaPhone className="text-gold-500" />
                                <span>1222306014 20+</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <FaEnvelope className="text-gold-500" />
                                <span>Mohamadahmad3669@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <FaMapMarkerAlt className="text-gold-500" />
                                <span>القليوبية | بنها</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-gold-500">النشرة البريدية</h3>
                        <p className="text-gray-400 mb-4">اشترك عشان يوصلك كل جديد عن إدارة الصالونات.</p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="بريدك الإلكتروني"
                                className="bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                            />
                            <button className="bg-gold-500 text-black font-bold py-3 rounded-lg hover:bg-gold-400 transition-colors">
                                اشترك الآن
                            </button>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} صالون بلس. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-black transition-all duration-300"
    >
        {icon}
    </a>
);

const FooterLink = ({ href, text }) => (
    <li>
        <a href={href} className="text-gray-400 hover:text-gold-500 transition-colors flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
            {text}
        </a>
    </li>
);

export default Footer;
