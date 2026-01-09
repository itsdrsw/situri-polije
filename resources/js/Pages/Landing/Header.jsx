import { useState } from "react";
import { Link, router, usePage } from "@inertiajs/react";

import Logo from "../../assets/img/logo-situri.png";
import {
    FaArrowRightToBracket,
    FaArrowRightFromBracket,
    FaBars,
} from "react-icons/fa6";

const Header = () => {
    const { props, url } = usePage();
    const isLoggedIn = !!props.auth?.user;

    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = isLoggedIn
        ? [
              { id: "home", label: "Home", path: "/" },
              { id: "deteksi", label: "Deteksi", path: "/deteksi" },
              { id: "riwayat", label: "Riwayat", path: "/riwayat" },
              { id: "kontak", label: "Kontak Kami", path: "/kontak" },
          ]
        : [
              { id: "home", label: "Home", path: "/" },
              { id: "kontak", label: "Kontak Kami", path: "/kontak" },
          ];

    const handleLogout = () => {
        router.post("/logout");
    };

    return (
        <header className="sticky top-5 z-50 px-4">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg px-8 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <img src={Logo} className="w-10 h-10" />
                    <span className="font-gatuzo text-2xl text-[#00D084] font-bold">
                        Situri
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-10 font-zain">
                    {navLinks.map((link) => {
                        const active = url === link.path;

                        return (
                            <Link
                                key={link.id}
                                href={link.path}
                                className={`relative font-semibold text-xl transition
                                    ${
                                        active
                                            ? "text-[#00D084]"
                                            : "text-gray-800 hover:text-[#00D084]"
                                    }`}
                            >
                                {link.label}
                                <span
                                    className={`absolute left-0 -bottom-1 h-[3px] bg-[#00D084] transition-all duration-300
                                    ${active ? "w-full" : "w-0 hover:w-full"}`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Auth Button */}
                <div className="hidden md:block">
                    {!isLoggedIn ? (
                        <button
                            onClick={() => router.visit("/login")}
                            className="flex items-center gap-2 bg-[#00D084] text-white px-5 py-2 rounded-2xl font-extrabold transition duration-200 hover:bg-[#007F5B] hover:scale-110"
                        >
                            Login <FaArrowRightToBracket />
                        </button>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-2xl font-extrabold transition duration-200 hover:bg-red-700 hover:scale-110"
                        >
                            Logout <FaArrowRightFromBracket />
                        </button>
                    )}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FaBars className="text-cyan" />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden mt-3 bg-white/80 rounded-2xl shadow-lg p-4 space-y-4 text-center font-zain">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.path}
                            className="block font-semibold text-lg"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {!isLoggedIn ? (
                        <button
                            onClick={() => router.visit("/login")}
                            className="bg-[#007F5B] text-white w-2/3 py-2 rounded-xl font-bold transition duration-200 hover:bg-[#007F5B] hover:scale-110"
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white w-2/3 py-2 rounded-xl font-bold transition duration-200 hover:bg-red-700 hover:scale-110"
                        >
                            Logout
                        </button>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;
