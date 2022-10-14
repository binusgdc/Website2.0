// /** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                primary_yellow: "#FFCA59",
                light_yellow: "#FFF1BF",
                txt_yellow: "#BD7635",
                primary_text: "#494949",
                "start-gradient": "#FFB341",
                "end-gradient": "#FFD644",
                alt_background: "#F9F9F9",
            },
        },
    },
    plugins: [],
}