import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Head, useForm } from "@inertiajs/react";
import AlertFailed from "@/Components/AlertFailed";

export default function Login({ status }) {
    const [showPassword, setShowPassword] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onError: (errors) => {
                // Gabungkan semua error dari Laravel
                const msg =
                    errors.email ??
                    errors.password ??
                    "Login gagal! Periksa kembali data Anda.";

                setAlertMessage(msg);
            },
        });
    };

    return (
        <>
            <Head title="LOGIN" />
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
                    ></div>
                </div>

                <div className="absolute inset-0 backdrop-blur-3xl bg-white/20"></div>

                {/* Card */}
                <div className="relative z-40 w-[90%] max-w-xl bg-white/25 border border-white/30 rounded-3xl shadow-xl backdrop-blur-2xl p-10">
                    <h2 className="font-gatuzo text-4xl font-bold text-center text-gray-800 mb-2">
                        Welcome User
                    </h2>
                    <p className="font-zain text-lg text-center text-gray-500 mb-8">
                        Please enter your email and password
                    </p>

                    {/* Form Login */}
                    <form
                        onSubmit={submit}
                        className="font-zain font-regular text-lg space-y-5"
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white/70 border-transparent focus:ring-2 focus:ring-[#00D084]"
                            required
                        />
                        {/* {errors.email && (
                            <p className="text-red-600 text-sm">
                                {errors.email}
                            </p>
                        )} */}

                        {/* Password */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-xl bg-white/70 border-transparent focus:ring-2 focus:ring-[#00D084]"
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
                        {/* {errors.password && (
                            <p className="text-red-600 text-sm">
                                {errors.password}
                            </p>
                        )} */}

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-[#00D084] hover:bg-[#007F5B] text-white font-extrabold py-3 rounded-xl shadow-lg"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Forgot Password */}
                    <div className="font-zain text-right px-4 mb-6 mt-4 text-sm text-gray-600">
                        <Link
                            href={route("password.request")}
                            className="font-zain text-grey font-extrabold underline hover:text-[#007F5B] hover:decoration-[#007F5B] hover:decoration-2"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className="font-zain flex items-center my-6">
                        <hr className="flex-grow border-gray-400" />
                        <span className="mx-3 text-gray-600">or</span>
                        <hr className="flex-grow border-gray-400" />
                    </div>

                    {/* Google Login Redirect */}
                    <div className="flex justify-center">
                        <a
                            href="/auth/google"
                            className="p-3 border border-gray-300 rounded-full hover:bg-[#00D084]  duration-300"
                        >
                            <FcGoogle className="text-gray-600 text-xl" />
                        </a>
                    </div>

                    <div className="font-zain text-center mb-6 mt-6 text-base text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            href={route("register")}
                            className="font-zain text-grey font-extrabold hover:underline hover:decoration-2"
                        >
                            Register Here
                        </Link>
                    </div>

                    <footer className="font-zain mt-6 text-center text-gray-600 text-sm">
                        &copy; 2025 <b className="font-gatuzoRegular">Situri</b>
                    </footer>

                    {status && (
                        <div className="text-green-600 mt-4 text-center">
                            {status}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
