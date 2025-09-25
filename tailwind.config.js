module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        radiate: "radiate 2s ease-in-out infinite",
        "radiate-bg": "radiateBg 2s ease-in-out infinite",
        'radiate-gradient': 'radiateGradient 3s ease-in-out infinite',


      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        radiate: {
          "0%, 100%": { color: "#6366f1" },
          "50%": { color: "#9333ea" },
        },
        radiateBg: {
          "0%, 100%": { backgroundColor: "#6366f1" },
          "50%": { backgroundColor: "#9333ea" },
        },
        radiateGradient: {
      '0%, 100%': {
        backgroundImage: 'linear-gradient(to right, #6366f1, #9333ea)',
      },
      '50%': {
        backgroundImage: 'linear-gradient(to right, #9333ea, #6366f1)',
      },
    },


      },
    },
  },
  plugins: [],
};
