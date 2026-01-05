import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                gatuzo: ["Gatuzo", "sans-serif"],
                gatuzoRegular: ["Gatuzo Regular", "sans-serif"],
            },
            keyframes: {
                floatSlow: {
                    "0%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(40px)" },
                    "100%": { transform: "translateY(0px)" },
                },
                floatSlowReverse: {
                    "0%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-40px)" },
                    "100%": { transform: "translateY(0px)" },
                },
            },
            animation: {
                floatSlow: "floatSlow 12s ease-in-out infinite",
                floatSlowReverse: "floatSlowReverse 25s ease-in-out infinite",
            },
        },
    },

    plugins: [forms],
};
