import React from 'react';

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-purple-800 to-primary-900"></div>

            {/* Animated Background Circles */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" data-aos="zoom-in">
                    جاهز تنقل صالونك <br />
                    <span className="text-gold-500">لمستوى تاني؟</span>
                </h2>

                <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                    جرّب صالون بلس الآن وشوف الفرق بنفسك. إدارة أسهل، أرباح أكتر، وراحة بال.
                </p>
            </div>
        </section>
    );
};

export default CTA;
