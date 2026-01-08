import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaChevronDown,
    FaShieldHalved,
    FaUserDoctor,
    FaStar,
    FaHeadset,
} from "react-icons/fa6";

/* ================= DATA ================= */
const faqData = {
    Umum: [
        {
            question: "Apa itu Sistem Deteksi Dini TBC?",
            answer: "Situri adalah platform berbasis teknologi yang membantu mendeteksi risiko Tuberkulosis secara dini guna mendukung penanganan medis yang lebih cepat.",
        },
        {
            question: "Siapa saja yang bisa menggunakan sistem ini?",
            answer: "Sistem ini dapat digunakan oleh masyarakat umum untuk skrining awal serta oleh tenaga medis sebagai alat bantu pendukung.",
        },
    ],
    Teknis: [
        {
            question: "Bagaimana cara kerja sistem deteksi ini?",
            answer: "Sistem menggunakan algoritma machine learning yang menganalisis data gejala dan faktor pendukung untuk mengidentifikasi potensi risiko TBC.",
        },
        {
            question: "Apakah data pengguna aman?",
            answer: "Ya. Data pengguna dijaga kerahasiaannya dan hanya digunakan untuk keperluan analisis sistem.",
        },
    ],
    "Akun & Langganan": [
        {
            question: "Apakah layanan ini berbayar?",
            answer: "Situri menyediakan versi gratis dan pengembangan layanan lanjutan untuk fasilitas kesehatan.",
        },
    ],
};

/* ============== ICON MAP ============== */
const categoryIcons = {
    Umum: FaUserDoctor,
    Teknis: FaShieldHalved,
    "Akun & Langganan": FaStar,
};

/* ============== MOTION VARIANTS ============== */
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

/* ================= COMPONENT ================= */
const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState("Umum");
    const [openAccordion, setOpenAccordion] = useState(null);

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
                <h2 className="font-gatuzo text-3xl md:text-4xl lg:text-5xl font-black text-[#00d082]">
                    Pertanyaan yang Sering Diajukan
                </h2>
                <p className="mt-4 text-[#0D8A8C] text-lg md:text-xl">
                    Informasi seputar sistem deteksi dini Tuberkulosis (Situri)
                </p>
            </motion.div>

            {/* CATEGORY */}
            <div className="flex flex-wrap justify-center gap-4">
                {Object.keys(faqData).map((category) => {
                    const Icon = categoryIcons[category];
                    const active = activeCategory === category;

                    return (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.07 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setActiveCategory(category);
                                setOpenAccordion(null);
                            }}
                            className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all
                                ${
                                    active
                                        ? "bg-[#00D084] text-white shadow-lg"
                                        : "bg-white/70 backdrop-blur text-gray-700 hover:bg-[#eafff5] shadow"
                                }`}
                        >
                            <Icon className="text-lg" />
                            {category}
                        </motion.button>
                    );
                })}
            </div>

            {/* FAQ LIST */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCategory}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0 }}
                    className="max-w-4xl mx-auto space-y-4"
                >
                    {faqData[activeCategory].map((faq, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            layout
                            className="bg-white/70 backdrop-blur rounded-2xl shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setOpenAccordion(
                                        openAccordion === index ? null : index
                                    )
                                }
                                className="w-full flex justify-between items-center p-5 text-left"
                            >
                                <span className="font-bold text-lg text-[#0D8A8C]">
                                    {faq.question}
                                </span>

                                <motion.div
                                    animate={{
                                        rotate:
                                            openAccordion === index ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="w-8 h-8 rounded-full bg-[#00D084] flex items-center justify-center"
                                >
                                    <FaChevronDown className="text-white" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openAccordion === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                        }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto space-y-4 bg-gradient-to-r from-[#007F5B] to-[#00D084] text-white rounded-3xl p-10 text-center shadow-xl"
            >
                <FaHeadset className="text-3xl mx-auto mb-4" />
                <h3 className="text-3xl md:text-3xl font-extrabold">
                    Butuh Bantuan Lebih Lanjut?
                </h3>
                <p className="mt-2 opacity-90 font-bold">
                    Tim kami siap membantu Anda kapan saja
                </p>

                <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-8 py-3 bg-white text-[#007F5B] font-extrabold text-lg rounded-full shadow-lg"
                >
                    Hubungi Kami
                </motion.button>
            </motion.div>
        </div>
    );
};

export default FAQ;
