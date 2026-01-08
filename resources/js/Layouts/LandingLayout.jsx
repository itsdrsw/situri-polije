import React from "react";
import Header from "@/Pages/Landing/Header";
import Footer from "@/Pages/Landing/Footer";
import ScrollButton from "@/Pages/Landing/ScrollButton";

export default function LandingLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <ScrollButton />
            <Footer />
        </div>
    );
}
