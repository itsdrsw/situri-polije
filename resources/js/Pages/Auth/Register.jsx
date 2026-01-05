import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { Head, useForm } from "@inertiajs/react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import AlertFailed from "@/Components/AlertFailed";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onError: (errors) => {
                const msg =
                    errors.name ??
                    errors.email ??
                    errors.password ??
                    "Registrasi gagal! Periksa kembali data.";

                setAlertMessage(msg);
            },
        });
    };

    return (
        <>
            <Head title="REGISTER" />

            {alertMessage && (
                <AlertFailed
                    message={alertMessage}
                    onClose={() => setAlertMessage(null)}
                    position="top-center"
                    duration={3000}
                />
            )}

            <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#f8fafc]">
                {/* Background */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `
                                radial-gradient(ellipse at bottom, #38a87fff 0%, #b3f1da 40%, transparent 80%),
                                radial-gradient(circle at top left, #80e8c2 0%, transparent 70%),
                                radial-gradient(circle at top right, #80e8c2 0%, transparent 70%)
                            `,
                        }}
                    />
                </div>

                <div className="absolute inset-0 backdrop-blur-3xl bg-white/20"></div>

                {/* Card */}
                <div className="relative z-40 w-[90%] max-w-xl bg-white/25 border border-white/30 rounded-3xl shadow-xl backdrop-blur-2xl p-10">
                    <h2 className="font-gatuzo text-4xl font-bold text-center text-gray-800 mb-2">
                        Create Account
                    </h2>
                    <p className="font-zain text-center text-gray-500 mb-8">
                        Enter your information to register
                    </p>

                    <form onSubmit={submit} className="font-zain space-y-5">
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:ring-2 focus:ring-[#00D084]"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:ring-2 focus:ring-[#00D084]"
                            required
                        />

                        {/* Password */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:ring-2 focus:ring-[#00D084]"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                {showPassword ? (
                                    <FaEyeSlash className="text-xl text-gray-600" />
                                ) : (
                                    <FaEye className="text-xl text-gray-600" />
                                )}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <input
                                type={showConfirm ? "text" : "password"}
                                placeholder="Confirm Password"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:ring-2 focus:ring-[#00D084]"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirm((prev) => !prev)}
                                className="absolute right-3 top-1/2 -translate-y-1/2"
                            >
                                {showConfirm ? (
                                    <FaEyeSlash className="text-xl text-gray-600" />
                                ) : (
                                    <FaEye className="text-xl text-gray-600" />
                                )}
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-[#00D084] hover:bg-[#007F5B] text-white font-semibold py-3 rounded-xl shadow-lg"
                        >
                            Register
                        </button>
                        <div className="font-zain text-center mb-6 mt-6 text-base text-gray-600">
                            Already have an account?{" "}
                            <Link
                                href={route("login")}
                                className="font-zain text-grey font-extrabold hover:underline hover:decoration-2"
                            >
                                Login Now
                            </Link>
                        </div>
                    </form>

                    <footer className="font-zain mt-6 text-center text-gray-600 text-sm">
                        &copy; 2025 <b className="font-gatuzoRegular">Situri</b>
                    </footer>
                </div>
            </div>
        </>
    );
}
