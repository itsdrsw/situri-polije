import tbcVector from "../../assets/img/tbc_vektor.png";
import { router } from "@inertiajs/react";

const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row pt-10 pb-16 md:pt-24 md:pb-24 items-center gap-12">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left md:mx-8">
                <h1 className="font-gatuzo text-3xl md:text-5xl lg:text-6xl font-black text-[#00d082] mb-6 leading-tight">
                    Sistem Deteksi Dini Penyakit Tuberkulosis
                </h1>

                <p className="font-zain md:text-2xl text-[#0D8A8C] mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Deteksi lebih awal, hidup lebih sehat. <br />
                    Cegah TB sejak dini dengan Situri.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-zain">
                    <button
                        onClick={() => router.visit("/login")}
                        className="bg-[#00D084] text-white px-8 py-4 rounded-2xl hover:bg-[#007F5B] transition duration-200 font-bold text-lg md:text-xl shadow-lg hover:scale-105"
                    >
                        Mulai Deteksi Sekarang
                    </button>

                    <button className="border-2 border-[#00D084] text-[#00D084] px-8 py-4 rounded-2xl hover:bg-[#007F5B] hover:border-[#007F5B] hover:text-white transition duration-200 font-bold text-lg md:text-xl hover:scale-105">
                        Demonstrasi Sistem
                    </button>
                </div>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
                <div className="w-full max-w-md h-64 md:h-80 lg:h-96 flex items-center">
                    <img
                        src={tbcVector}
                        alt="Ilustrasi TB"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
