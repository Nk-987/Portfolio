import { ImageResponse } from "next/og";

export const alt =
  "Nitesh Kumar — Data Analyst | Business Intelligence | Full Stack Developer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0f19",
          color: "#ffffff",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#94a3b8",
            marginBottom: 24,
          }}
        >
          PORTFOLIO
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          Nitesh Kumar
        </div>

        <div
          style={{
            fontSize: 34,
            color: "#cbd5e1",
          }}
        >
          Data Analyst · Business Intelligence · Full Stack Developer
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 42,
            fontSize: 24,
            color: "#94a3b8",
          }}
        >
          SQL · Python · Power BI · React · Next.js · Node.js
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
