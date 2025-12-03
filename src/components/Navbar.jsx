import React, { useState, useEffect, Suspense, lazy } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const WhatsAppModal = lazy(() => import('./WhatsAppModal'));

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'الرئيسية', href: '#hero' },
        { name: 'المشكلة', href: '#problem' },
        { name: 'الحل', href: '#solution' },
        { name: 'المميزات', href: '#features' },
        { name: 'لماذا نحن', href: '#why-us' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 bg-black shadow-lg ${scrolled ? 'py-2' : 'py-3'}`}>
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-lg md:text-2xl font-bold text-white flex items-center gap-2 z-50">
                        <span className="text-gold-500 text-2xl md:text-3xl">✂️</span>
                        <span className="tracking-wider">صالون <span className="text-gold-500">بلس</span></span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-white hover:text-gold-400 transition-colors font-medium text-lg relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold py-2 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            ابدأ الآن
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden z-50 w-8 h-8 flex items-center justify-center bg-gold-500 hover:bg-gold-600 rounded-lg transition-all duration-300 shadow-lg"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? (
                            <FaTimes className="text-black text-2xl" />
                        ) : (
                            <FaBars className="text-black text-2xl" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black z-40"
                    onClick={() => setIsOpen(false)}
                >
                    <div className="flex flex-col items-center justify-center h-full gap-6 px-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-white text-lg md:text-xl font-bold hover:text-gold-500 transition-all duration-300 hover:scale-110"
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setIsModalOpen(true);
                            }}
                            className="bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold py-3 px-8 rounded-full text-lg mt-6 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            ابدأ الآن
                        </button>
                    </div>
                </div>
            )}

            {/* WhatsApp Modal */}
            <Suspense fallback={null}>
                {isModalOpen && <WhatsAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
            </Suspense>
        </>
    );
};

export default Navbar;
