import { useState, useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        // cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-8 right-8 z-50 bg-[#00D084] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-[#007F5B] transition-colors duration-300"
                >
                    <FaAnglesUp />
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
