import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaTimesCircle, FaTimes } from "react-icons/fa";
import { PiInfoDuotone } from "react-icons/pi";

const AlertFailed = ({
    message = "Terjadi kesalahan!",
    onClose,
    position = "top-center",
    duration = 3000,
}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    let positionClasses = "";
    if (position === "top-right") positionClasses = "top-6 right-6";
    else if (position === "center")
        positionClasses = "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    else positionClasses = "top-6 left-1/2 -translate-x-1/2"; // default top-center

    const toast = (
        <div
            className={`fixed z-[999] ${positionClasses} w-[90%] max-w-md animate-fadeIn`}
        >
            <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm border bg-red-50/90 border-red-200 text-red-800">
                <div className="flex items-center gap-3">
                    <PiInfoDuotone className="text-red-500 dark:text-red-400 text-lg" />
                    <span className="text-sm sm:text-base font-medium">
                        {message}
                    </span>
                </div>
                <button
                    onClick={onClose}
                    className="text-red-500 dark:text-red-400 hover:opacity-80 transition"
                >
                    <FaTimes className="text-red-500 dark:text-red-400" />
                </button>
            </div>
        </div>
    );

    return createPortal(toast, document.body);
};

export default AlertFailed;
