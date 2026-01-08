export default function Footer() {
    return (
        <footer className="font-zain bg-[#115740] text-gray-700 py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col md:flex-row items-left gap-4">
                    <p className="text-white">
                        &copy; 2025 TBC Detection - Sistem Deteksi Dini TBC
                    </p>
                </div>

                <div className="flex space-x-4 text-white">
                    <a href="#" className="hover:underline">
                        Cookies
                    </a>
                    <a href="#" className="hover:underline">
                        Security
                    </a>
                    <a href="#" className="hover:underline">
                        Terms of Service
                    </a>
                    <a href="#" className="hover:underline">
                        Privacy Statement
                    </a>
                </div>
            </div>
        </footer>
    );
}
