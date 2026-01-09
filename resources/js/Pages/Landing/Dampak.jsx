import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaChevronDown,
    FaShieldHalved,
    FaUserDoctor,
    FaStar,
    FaHeadset,
} from "react-icons/fa6";

/* ================= COMPONENT ================= */
const Dampak = () => {
    const insights = [
        {
            icon: "🔬",
            title: "Klinis & Fisiologis",
            description:
                "TBC menyebabkan peradangan kronis yang dapat berujung pada fibrosis (jaringan parut) atau kavitas (lubang) di paru-paru.",
        },
        {
            icon: "⚡",
            title: "Komplikasi Organ Lain",
            description:
                "Tuberkulosis menyebabkan kerusakan tulang belakang yang bisa berujung pada kelumpuhan (Pott's disease).",
        },
        {
            icon: "🛡️",
            title: "Stigma Sosial",
            description:
                "Pasien sering dikucilkan oleh lingkungan atau bahkan keluarga karena ketakutan berlebihan terhadap penularan",
        },
        {
            icon: "👨‍⚕️",
            title: "Kecemasan & Depresi",
            description:
                "Durasi pengobatan yang lama (minimal 6 bulan) dengan efek samping obat yang tidak nyaman (mual, nyeri sendi) sering memicu depresi",
        },
    ];

    return (
        <div className="font-zain space-y-10">
            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: -25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h2 className="font-gatuzo mt-2 md:mt-4 text-3xl md:text-4xl lg:text-5xl font-black text-[#00d082]">
                    Dampak Penyakit Tuberkulosis
                </h2>
                <p className="hidden md:block mt-4 text-gray-600 w-1/2 text-center mx-auto text-lg md:text-xl">
                    Penyakit Tuberkulosis memiliki dampak yang signifikan
                    terhadap kesehatan individu dan masyarakat sekitar. Berikut
                    adalah beberapa dampak utama dari penyakit ini.
                </p>
            </motion.div>

            {/* INSIGHT CARDS */}
            <div className="px-8 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 items-stretch">
                    {insights.map((insight, index) => (
                        <div
                            key={index}
                            data-aos="flip-up"
                            data-aos-delay={index * 200 || 0}
                            className="h-full"
                        >
                            <div className="h-full flex flex-col justify-between bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl shadow-sm border-2 duration-300 border-blue-100 transform transition-transform duration-300 ease-out hover:scale-105 hover:border-[#61CE70] hover:shadow-xl hover:from-[#61CE70] hover:to-[#00D084]">
                                <div className="text-3xl mb-4">
                                    {insight.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                                        {insight.title}
                                    </h3>
                                    <p className="text-gray-600 text-md md:text-xl leading-relaxed">
                                        {insight.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dampak;
