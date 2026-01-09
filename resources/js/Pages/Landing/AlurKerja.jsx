import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaMagnifyingGlass, FaCreditCard } from "react-icons/fa6";

/* ================= COMPONENT ================= */
const AlurKerja = () => {
    const flow = [
        {
            id: "01",
            title: "Login",
            desc: "Unveiling Our Commitment To Your Well-Being And Discover Excellence In Medical Care With Our Skilled Professionals",
            image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&w=400&q=60",
            highlight: false,
        },
        {
            id: "02",
            title: "Masukkan Gejala",
            desc: "Unveiling Our Commitment To Your Well-Being And Discover Excellence In Medical Care With Our Skilled Professionals",
            image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&w=400&q=60",
            highlight: true, // akan dapat gradient background
        },
        {
            id: "03",
            title: "Lihat Hasil",
            desc: "Unveiling Our Commitment To Your Well-Being And Discover Excellence In Medical Care With Our Skilled Professionals",
            image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&w=400&q=60",
            highlight: false,
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
                    Alur Kerja Sistem Deteksi
                </h2>
                <p className="hidden md:block mt-4 text-gray-600 w-1/2 text-center mx-auto text-lg md:text-xl">
                    Situri menyediakan skrining mandiri cepat. Cukup jawab
                    kuesioner gejala untuk mendapatkan analisis deteksi dini
                    kondisi Anda.
                </p>
            </motion.div>

            {/* INSIGHT CARDS */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
                {flow.map((s, i) => (
                    <div
                        key={i}
                        data-aos="flip-up"
                        data-aos-delay={s * 200} // jeda per-item
                    >
                        <div
                            className={`group flex flex-col md:flex-row justify-between items-center
              mb-8 rounded-2xl overflow-hidden shadow-md hover:shadow-lg
              transform transition duration-300
              hover:scale-105 bg-white
              hover:bg-gradient-to-r hover:from-[#61CE70] hover:to-[#00D084]`}
                        >
                            <div className="flex-1 p-6 md:p-10">
                                <p className="font-italic text-gray-400 mt-1 md:text-2xl text-2xl group-hover:text-white">
                                    {s.id}
                                </p>
                                <h2 className="font-zain text-xl md:text-2xl font-bold text-gray-800">
                                    {s.title}
                                </h2>
                                <p className="mt-3 text-gray-600 text-md md:text-xl leading-relaxed max-w-md">
                                    {s.desc}
                                </p>
                            </div>
                            <div className="md:w-1/3 w-full h-48 md:h-56 relative overflow-hidden rounded-2xl md:mr-3">
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlurKerja;
