import React, { useState } from "react";
import { Head } from "@inertiajs/react";

import LandingLayout from "@/Layouts/LandingLayout";

import { FaTrashAlt, FaInfoCircle } from "react-icons/fa";

export default function Riwayat() {
    const [riwayat, setRiwayat] = useState([
        { id: 1, tanggal: "2025-01-12", hasil: "Aman" },
        { id: 2, tanggal: "2025-01-15", hasil: "Waspada" },
        { id: 3, tanggal: "2025-01-17", hasil: "Bahaya" },
        { id: 4, tanggal: "2025-01-18", hasil: "Aman" },
        { id: 5, tanggal: "2025-01-19", hasil: "Aman" },
    ]);

    const handleDelete = (id) => {
        setRiwayat(riwayat.filter((item) => item.id !== id));
    };

    const getColor = (status) => {
        switch (status) {
            case "Aman":
                return "text-green-600 bg-green-100";
            case "Waspada":
                return "text-yellow-600 bg-yellow-100";
            case "Bahaya":
                return "text-red-600 bg-red-100";
            default:
                return "text-gray-600 bg-gray-100";
        }
    };
    return (
        <>
            <Head title="Riwayat" />

            <section id="home" className="section-wrapper pt-10 mx-4 mb-10">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-md p-6 md:p-12">
                    <h1 className="font-gatuzo md:text-4xl text-3xl font-black text-[#00D084] mb-6 text-center leading-tight">
                        Riwayat Prediksi
                    </h1>

                    <div className="overflow-x-auto">
                        <table className="min-w-full rounded-xl overflow-hidden font-zain">
                            <thead className="bg-[#00D084]/10 ">
                                <tr>
                                    <th className=" px-4 py-3 text-left">No</th>
                                    <th className="px-4 py-3 text-left">
                                        Tanggal
                                    </th>
                                    <th className="px-4 py-3 text-left">
                                        Hasil Prediksi
                                    </th>
                                    <th className="px-4 py-3 text-center">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="font-zain">
                                {riwayat.length === 0 ? (
                                    <tr>
                                        <td
                                            colSpan="4"
                                            className="text-center py-6 text-gray-500 italic"
                                        >
                                            Belum ada riwayat prediksi
                                        </td>
                                    </tr>
                                ) : (
                                    riwayat.map((item, index) => (
                                        <tr
                                            key={item.id}
                                            className="border-b border-gray-300 px-4 py-3 hover:bg-gray-50"
                                        >
                                            <td className="px-4 py-3 ">
                                                {index + 1}
                                            </td>
                                            <td className="px-4 py-3">
                                                {item.tanggal}
                                            </td>
                                            <td className="px-4 py-3">
                                                <span
                                                    className={`px-3 py-1 rounded-xl text-sm font-semibold ${getColor(
                                                        item.hasil
                                                    )}`}
                                                >
                                                    {item.hasil}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-center space-x-2">
                                                <button className="px-3 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600">
                                                    <FaInfoCircle />
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(item.id)
                                                    }
                                                    className="px-3 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600"
                                                >
                                                    <FaTrashAlt />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

Riwayat.layout = (page) => <LandingLayout>{page}</LandingLayout>;
