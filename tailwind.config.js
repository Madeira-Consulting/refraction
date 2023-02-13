/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "media",
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#46c6f1",
                dark1: "#1f1d2c",
                dark2: "#262837",
            },
            backgroundImage: {
                "hero-lg":
                    // "url(https://img.waz.de/img/tomorrowland/crop229597788/3963056873-w1200-cv1_1-q85/Tomorrowland-2020-Live.jpg?w=640&q=75)",
                    "url(https://impressprinters.com/wp-content/uploads/2017/10/blurred-background-1.jpg)",
                "hero-sm": "url('/storage/img/sys/sm-hero.jpg')",
            },
        },
    },
    plugins: [],
};
