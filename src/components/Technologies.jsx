import React from 'react';
import { FaReact, FaDatabase, FaCode, FaShieldAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiSupabase } from 'react-icons/si';

const Technologies = () => {
    const techs = [
        { icon: <FaReact />, name: "React", color: "text-blue-400" },
        { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600" },
        { icon: <SiSupabase />, name: "Supabase", color: "text-green-500" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-cyan-400" },
        { icon: <FaShieldAlt />, name: "High Security", color: "text-red-500" },
    ];

    return (
        <section className="py-16 bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-10">
                    مبني بأحدث التقنيات العالمية
                </h3>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                    {techs.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 group cursor-pointer"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <div className={`text-4xl md:text-5xl ${tech.color} opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                                {tech.icon}
                            </div>
                            <span className="text-gray-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
