export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "padding-default": "20px",
      },
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        primary: {
          0: "#FFFFFF",
          5: "#E2FEF7",
          10: "#C8FEF0",
          20: "#9FFFE6",
          30: "#6EFFD9",
          40: "#42FECD",
          50: "#21F5BE",
          60: "#12C395",
          70: "#0D9672",
          80: "#09664D",
          90: "#042F23",
          100: "#101010", 
        },
        secondary: {
          0: "#FFFFFF",
          5: "#E8ECFF",
          10: "#D3DBFF",
          20: "#ADBBFF",
          30: "#8096FF",
          40: "#5270FF",
          50: "#3457FD",
          60: "#2947D2",
          70: "#243CAE",
          80: "#162672",
          90: "#0B1339",
          100: "#020202", // (기존 Grayscale과 유사)
        },
        Grayscale: {
          0: "#FFFFFF",
          5: "#F6F6F6",
          10: "#F0F0F1",
          20: "#E3E4E5",
          30: "#D7D8D9",
          40: "#C6C7C8",
          50: "#9A9C9E",
          60: "#707374",
          70: "#525658",
          75: "#3E3F40",
          80: "#303033",
          90: "#1D1E1F",
          100: "#101010",
        },
      },
      fontSize: {
        graypoint: ["12px", "150%"],
      },
      fontWeight: {
        regular: "400",
      },
    },
  },
  plugins: [],
};
