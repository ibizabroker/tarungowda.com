import { Projects, allProjects } from 'contentlayer/generated';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: Projects }) {
  const project = allProjects.find((project) => project.slug === params.slug)

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
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
            flexDirection: "column",
            fontSize: "40px",
            lineHeight: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: "15px",
            }}
          >
            <img
              style={{ marginRight: "20px" }}
              width="50"
              height="50"
              src={"http://localhost:3000/logo.png"}
            />
            <span style={{ color: "#94a3b8" }}>Projects|</span>{project?.title}
          </div>
          <img 
            src={`http://localhost:3000/${project?.coverImage}`} 
            width="1000"
            height="525"
            style={{ borderRadius: "25px" }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}