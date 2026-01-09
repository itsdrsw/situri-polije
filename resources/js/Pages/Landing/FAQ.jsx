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
            question: "Apa itu Situri?",
            answer: "Situri adalah sebuah platform inovatif yang menggunakan teknologi AI untuk menganalisis data kesehatan dan memberikan deteksi dini risiko penyakit Tuberkulosis (TBC), membantu intervensi medis yang lebih cepat dan efektif.",
        },
        {
            question: "Siapa saja yang bisa menggunakan sistem ini?",
            answer: "Sistem ini dirancang untuk digunakan oleh tenaga medis profesional, fasilitas kesehatan, serta individu yang ingin melakukan skrining awal. Namun, hasil dari sistem ini tidak menggantikan diagnosis medis profesional.",
        },
        {
            question: "Apakah sistem ini sudah teruji secara klinis?",
            answer: "Ya, sistem kami telah melalui uji klinis yang ketat dan menunjukkan akurasi hingga 94% dalam mendeteksi tanda-tanda awal TBC. Kami terus memperbarui model AI kami dengan data terbaru untuk meningkatkan performa.",
        },
    ],
    Teknis: [
        {
            question: "Bagaimana cara kerja sistem deteksi ini?",
            answer: "Sistem kami menggunakan algoritma machine learning yang dilatih dengan ribuan data citra medis (seperti rontgen dada) dan data klinis lainnya. Algoritma ini dapat mengidentifikasi pola-pola yang sering dikaitkan dengan TBC.",
        },
        {
            question: "Apakah data saya aman?",
            answer: "Tentu. Kami menerapkan standar keamanan dan privasi data tertinggi. Semua data dienkripsi dan dianonimkan untuk melindungi privasi Anda. Kami patuh pada regulasi privasi data yang berlaku.",
        },
        {
            question: "Berapa lama waktu yang dibutuhkan untuk analisis?",
            answer: "Analisis biasanya memakan waktu 2-5 menit tergantung pada kompleksitas data dan beban server. Untuk citra medis seperti rontgen, analisis dapat diselesaikan dalam waktu kurang dari 3 menit.",
        },
    ],
    "Akun & Langganan": [
        {
            question: "Apakah layanan ini berbayar?",
            answer: "Tersedia versi gratis dan paket berlangganan untuk fasilitas kesehatan.",
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
                <h2 className="font-gatuzo mt-2 md:mt-4 text-3xl md:text-4xl lg:text-5xl font-black text-[#00d082]">
                    Pertanyaan yang Sering Diajukan
                </h2>
                <p className="mt-4 text-gray-600 text-lg md:text-xl">
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
                                <span className="font-bold text-lg text-gray-800">
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
                                        <div className="px-6 pb-6 text-gray-600 text-lg leading-relaxed">
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
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 mb-4">
                    <FaHeadset className="text-3xl text-white" />
                </div>

                <h3 className="text-3xl md:text-3xl font-extrabold">
                    Butuh Bantuan Lebih Lanjut?
                </h3>
                <p className="mt-2 opacity-90 font-bold md:text-lg">
                    Tim kami siap membantu Anda kapan saja
                </p>

                <motion.button
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-8 py-3 bg-white text-[#007F5B] font-extrabold text-lg md:text-xl rounded-full shadow-lg"
                >
                    Hubungi Kami
                </motion.button>
            </motion.div>
        </div>
    );
};

export default FAQ;
