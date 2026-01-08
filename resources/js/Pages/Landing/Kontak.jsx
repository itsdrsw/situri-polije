import React, { useState } from "react";
import { Head } from "@inertiajs/react";

import LandingLayout from "@/Layouts/LandingLayout";

export default function Kontak() {
    return (
        <>
            <Head title="Kontak" />

            <section id="home" className="section-wrapper pt-10 mx-4 mb-10">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-md p-6 md:p-12">
                    <div className="font-zain max-w-5xl mx-auto">
                        {/* HEADER */}
                        <div className="text-center mb-10">
                            <h1 className="font-gatuzo text-3xl md:text-4xl font-black text-[#00D084]">
                                Kontak Kami
                            </h1>
                            <p className="mt-4 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                                Hubungi kami untuk pertanyaan, saran, atau
                                bantuan terkait sistem deteksi dini Tuberkulosis
                                (TBC).
                            </p>
                        </div>

                        {/* INFO KONTAK - 3 KOLOM */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {/* EMAIL */}
                            <div className="group bg-gradient-to-br from-[#61CE70] to-[#00D084] backdrop-blur rounded-2xl p-6 shadow-sm text-center border-blue-100 transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:from-white/60">
                                <p className="font-bold text-lg md:text-xl text-white mb-1 transition-colors duration-300 group-hover:text-[#0D8A8C]">
                                    Email
                                </p>
                                <p className="text-gray-700">
                                    support@situri.id
                                </p>
                            </div>

                            {/* WHATSAPP */}
                            <div className="group bg-gradient-to-br from-[#61CE70] to-[#00D084] backdrop-blur rounded-2xl p-6 shadow-sm text-center border-blue-100 transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:from-white/60">
                                <p className="font-bold text-lg md:text-xl text-white mb-1 transition-colors duration-300 group-hover:text-[#0D8A8C]">
                                    WhatsApp
                                </p>
                                <p className="text-gray-700">
                                    +62 823-8942-2820
                                </p>
                            </div>

                            {/* ALAMAT */}
                            <div className="group bg-gradient-to-br from-[#61CE70] to-[#00D084] backdrop-blur rounded-2xl p-6 shadow-sm text-center border-blue-100 transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:from-white/60">
                                <p className="font-bold text-lg md:text-xl text-white mb-1 transition-colors duration-300 group-hover:text-[#0D8A8C]">
                                    Alamat
                                </p>

                                <p className="text-gray-700 transition-colors duration-300 group-hover:text-gray-800">
                                    Jl. Mastrip 04 Sumbersari, Jember, Jawa
                                    Timur
                                </p>
                            </div>
                        </div>

                        {/* FORM KIRIM PESAN */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm">
                            <h2 className="font-extrabold text-2xl text-[#0D8A8C] mb-6 text-center">
                                Kirim Pesan
                            </h2>

                            <form className="space-y-5">
                                <div>
                                    <label className="block text-base md:text-lg font-semibold text-gray-700 mb-1">
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Nama lengkap"
                                        className="w-full rounded-xl bg-gray-100 border-none focus:bg-transparent focus:border-none focus:ring-0 focus:shadow-[0_0_10px_2px_rgba(0,208,132,0.35)] focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-base md:text-lg font-semibold text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        className="w-full rounded-xl bg-gray-100 border-none focus:bg-transparent focus:border-none focus:ring-0 focus:shadow-[0_0_10px_2px_rgba(0,208,132,0.35)] focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-base md:text-lg font-semibold text-gray-700 mb-1">
                                        Pesan
                                    </label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tulis pesan Anda..."
                                        className="w-full rounded-xl bg-gray-100 border-none focus:bg-transparent focus:border-none focus:ring-0 focus:shadow-[0_0_10px_2px_rgba(0,208,132,0.35)] focus:outline-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#00D084] hover:bg-[#007F5B] text-white md:text-lg font-extrabold py-3 rounded-xl transition-all duration-300 shadow-md hover:scale-[1.10]"
                                >
                                    Kirim Pesan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

Kontak.layout = (page) => <LandingLayout>{page}</LandingLayout>;
