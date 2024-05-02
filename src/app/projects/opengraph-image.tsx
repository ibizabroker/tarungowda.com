import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", 
          background: "#0b0f1a",
          color: "#a086f0",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            fontSize: "80px",
            lineHeight: "80px",
          }}
        >
          <img
            style={{ marginRight: "15px" }}
            width="100"
            height="100"
            src={"http://localhost:3000/logo.png"}
          />
          Projects
        </div>
        <p style={{ fontSize: "28px", textAlign: "center", color: "#94a3b8", padding: "10px 130px" }}>
          Some of the coding experiments which turned out to be good.
        </p>
      </div>
    ),
    {
      ...size,
    },
  );
}