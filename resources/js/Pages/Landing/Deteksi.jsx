import React, { useState, useRef } from "react";
import { Head } from "@inertiajs/react";

import LandingLayout from "@/Layouts/LandingLayout";

import {
    FaCircleCheck,
    FaCircleExclamation,
    FaTriangleExclamation,
} from "react-icons/fa6";

export default function Deteksi() {
    const hasilRef = useRef(null);

    const questions = [
        {
            id: "keringat_dingin",
            label: "Apakah Anda mengalami keringat dingin?",
        },
        {
            id: "batuk_dahak",
            label: "Apakah Anda batuk berdahak?",
        },
        {
            id: "sesak_napas",
            label: "Apakah Anda mengalami sesak napas?",
        },
    ];

    const [answers, setAnswers] = useState({});
    const [prediction, setPrediction] = useState(null);

    const handleChange = (id, value) => {
        setAnswers((prev) => ({ ...prev, [id]: value }));
    };

    const clearAll = () => {
        setAnswers({});
        setPrediction(null);
    };

    const calculatePrediction = (answers) => {
        const yesCount = Object.values(answers).filter(
            (v) => v === "yes"
        ).length;

        if (yesCount >= 3) return "Bahaya";
        if (yesCount === 2) return "Waspada";
        return "Aman";
    };

    const handlePredict = () => {
        if (Object.keys(answers).length !== questions.length) {
            alert("Harap jawab semua pertanyaan terlebih dahulu.");
            return;
        }

        const status = calculatePrediction(answers);

        const messages = {
            Aman: "Gejala TBC tidak terdeteksi. Tetap jaga kesehatan Anda.",
            Waspada:
                "Terdapat beberapa gejala TBC. Disarankan melakukan pemeriksaan lebih lanjut.",
            Bahaya: "Gejala kuat mengarah ke TBC. Segera konsultasi ke tenaga medis.",
        };

        setPrediction({
            status,
            message: messages[status],
        });

        setTimeout(() => {
            hasilRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 200);
    };

    const getColor = (status) => {
        switch (status) {
            case "Aman":
                return "bg-green-50 border-green-400 text-green-700";
            case "Waspada":
                return "bg-yellow-50 border-yellow-400 text-yellow-700";
            case "Bahaya":
                return "bg-red-50 border-red-400 text-red-700";
            default:
                return "";
        }
    };
    return (
        <>
            <Head title="Deteksi" />

            <section id="home" className="section-wrapper pt-10 mx-4 mb-10">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-md p-6 md:p-12">
                    <div className="container mx-auto px-4">
                        {/* Header */}
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="font-gatuzo md:text-4xl text-3xl font-black text-[#00D084] mb-4">
                                Form Pertanyaan
                            </h2>
                            <p className="font-zain text-gray-600 md:text-xl">
                                Silakan jawab pertanyaan berikut dengan jujur
                                atau sesuai yang Anda rasakan.
                            </p>
                        </div>

                        {/* Form */}
                        <div className="font-zain max-w-3xl mx-auto">
                            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl transition">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        Pertanyaan
                                    </h3>
                                    <button
                                        onClick={clearAll}
                                        className="text-red-600 bg-red-100 px-4 py-2 rounded-xl text-sm font-semibold"
                                    >
                                        Clear All
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    {questions.map((q) => (
                                        <div
                                            key={q.id}
                                            className="flex justify-between items-center"
                                        >
                                            <span className="text-gray-700 md:text-lg">
                                                {q.label}
                                            </span>

                                            <div className="flex gap-6">
                                                <label className="flex items-center gap-1">
                                                    <input
                                                        type="radio"
                                                        name={q.id}
                                                        checked={
                                                            answers[q.id] ===
                                                            "yes"
                                                        }
                                                        onChange={() =>
                                                            handleChange(
                                                                q.id,
                                                                "yes"
                                                            )
                                                        }
                                                        className="appearance-auto accent-red-400 scale-110"
                                                    />
                                                    Ya
                                                </label>

                                                <label className="flex items-center gap-1">
                                                    <input
                                                        type="radio"
                                                        name={q.id}
                                                        checked={
                                                            answers[q.id] ===
                                                            "no"
                                                        }
                                                        onChange={() =>
                                                            handleChange(
                                                                q.id,
                                                                "no"
                                                            )
                                                        }
                                                        className="appearance-auto accent-green-500 scale-110"
                                                    />
                                                    Tidak
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Button */}
                            <div className="text-center mt-6">
                                <button
                                    onClick={handlePredict}
                                    className="bg-[#00D084] text-white px-10 py-3 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#007F5B] hover:scale-110 transition"
                                >
                                    Prediksi
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Result */}
                    {prediction && (
                        <div
                            ref={hasilRef}
                            className={`max-w-4xl mx-auto mt-10 p-8 font-zain rounded-2xl border shadow-lg transition ${getColor(
                                prediction.status
                            )}`}
                        >
                            <div className="flex gap-4 items-cente font-zain">
                                <div className="text-5xl ">
                                    {prediction.status === "Aman" && (
                                        <FaCircleCheck className="text-green-600" />
                                    )}
                                    {prediction.status === "Waspada" && (
                                        <FaCircleExclamation className="text-yellow-500" />
                                    )}
                                    {prediction.status === "Bahaya" && (
                                        <FaTriangleExclamation className="text-red-600" />
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-3xl font-extrabold mb-1">
                                        {prediction.status}
                                    </h3>
                                    <p className="text-gray-700 md:text-lg">
                                        {prediction.message}
                                    </p>
                                </div>
                            </div>

                            {/* Detail */}
                            <div className="mt-6">
                                <h4 className="font-semibold text-lg mb-2">
                                    Detail Jawaban
                                </h4>
                                <table className="w-full">
                                    <tbody>
                                        {questions.map((q) => (
                                            <tr
                                                key={q.id}
                                                className="border-b border-gray-200"
                                            >
                                                <td className="py-2 text-gray-700">
                                                    {q.label}
                                                </td>
                                                <td className="py-2 text-center capitalize">
                                                    {answers[q.id] === "yes"
                                                        ? "Ya"
                                                        : "Tidak"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

Deteksi.layout = (page) => <LandingLayout>{page}</LandingLayout>;
