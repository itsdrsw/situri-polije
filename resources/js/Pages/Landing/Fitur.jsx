import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaMagnifyingGlass, FaCreditCard } from "react-icons/fa6";

/* ================= COMPONENT ================= */
const Fitur = () => {
    const cards = [
        {
            icon: <FaBriefcase className="text-[#00D084] text-3xl" />,
            title: "Post a Job",
            description:
                "Create your free job posting today and start receiving competitive quotes from qualified professionals within just a few hours.",
        },
        {
            icon: <FaMagnifyingGlass className="text-green-500 text-3xl" />,
            title: "Hire Freelancer",
            description:
                "Create your free job posting today and start receiving competitive quotes from qualified professionals within just a few hours.",
        },
        {
            icon: <FaCreditCard className="text-green-500 text-3xl" />,
            title: "Make Secure Payment",
            description:
                "Create your free job posting today and start receiving competitive quotes from qualified professionals within just a few hours.",
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
                    Fitur Sistem Deteksi
                </h2>
                <p className="hidden md:block mt-4 text-gray-600 w-1/2 text-center mx-auto text-lg md:text-xl">
                    Situri menyediakan skrining mandiri cepat. Cukup jawab
                    kuesioner gejala untuk mendapatkan analisis deteksi dini
                    kondisi Anda.
                </p>
            </motion.div>

            {/* INSIGHT CARDS */}
            <div className="px-8 md:px-16 lg:px-24">
                <div className="max-w-full mx-auto grid md:grid-cols-3 gap-8 text-center">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            data-aos-delay={index * 200} // jeda per-item
                        >
                            <div className="relative bg-white shadow-sm mb-8 rounded-2xl p-12 transform transition-transform duration-300 ease-out hover:scale-105 hover:ring-4 hover:ring-[#00D084] hover:ring-offset-2 hover:ring-offset-white">
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-100 rounded-full p-3 shadow-sm">
                                    <span className="text-2xl">
                                        {card.icon}
                                    </span>
                                </div>
                                <h3 className="mt-6 text-xl md:text-2xl font-bold text-gray-800">
                                    {card.title}
                                </h3>
                                <p className=" text-justify text-gray-500 mt-3 text-lg md:text-xl leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Fitur;
