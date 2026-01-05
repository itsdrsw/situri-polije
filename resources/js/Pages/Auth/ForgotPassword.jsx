import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { Head, useForm } from "@inertiajs/react";
import AlertFailed from "@/Components/AlertFailed";

export default function ForgotPassword({ status }) {
    const [alertMessage, setAlertMessage] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"), {
            onError: (errors) => {
                const msg =
                    errors.email ??
                    "Gagal mengirim email reset password. Periksa kembali email Anda.";

                setAlertMessage(msg);
            },
        });
    };

    return (
        <>
            <Head title="Forgot Password" />

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
                        Forgot Password
                    </h2>
                    <p className="font-zain text-lg text-center text-gray-500 mb-8">
                        Enter your email to receive a password reset link
                    </p>

                    {status && (
                        <div className="mb-4 text-center text-green-600 font-semibold">
                            {status}
                        </div>
                    )}

                    <form
                        onSubmit={submit}
                        className="font-zain text-lg space-y-5"
                    >
                        <input
                            type="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 focus:ring-2 focus:ring-[#00D084]"
                            required
                        />

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-[#00D084] hover:bg-[#007F5B] text-white font-extrabold py-3 rounded-xl shadow-lg"
                        >
                            Send Reset Link
                        </button>
                        <div className="font-zain text-right px-4 mb-6 mt-4 text-sm text-gray-600">
                            <Link
                                href={route("login")}
                                className="font-zain text-grey font-extrabold underline hover:text-[#007F5B] hover:decoration-[#007F5B] hover:decoration-2"
                            >
                                Back to Login
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
