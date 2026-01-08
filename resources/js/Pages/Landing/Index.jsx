import React from "react";
import { Head } from "@inertiajs/react";

import LandingLayout from "@/Layouts/LandingLayout";

import Hero from "@/Pages/Landing/Hero";
import FAQ from "@/Pages/Landing/FAQ";

export default function Index() {
    return (
        <>
            <Head title="Home" />

            <section id="home" className="section-wrapper pt-10 mx-4">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-md p-6 md:p-12">
                    <Hero />
                </div>
            </section>

            <section id="faq" className="section-wrapper mt-6 mx-4 mb-10">
                <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-md p-6 md:p-12">
                    <FAQ />
                </div>
            </section>
        </>
    );
}

Index.layout = (page) => <LandingLayout>{page}</LandingLayout>;
