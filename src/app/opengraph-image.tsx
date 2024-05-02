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
          color: "#94a3b8",
          height: "100%",
          width: "100%",
        }}
      >
        <img
          style={{ marginRight: "15px" }}
          width="250"
          height="250"
          src={"https://tarungowda.com/logo.png"}
        />
        <span style={{fontSize: "90px", color: "#a086f0", marginBottom: "20px",}}>tarungowda.com</span>
        Unleashing endless possibilities through code exploration and innovation.
      </div>
    ),
    {
      ...size,
    },
  );
}