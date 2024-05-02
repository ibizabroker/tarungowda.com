import { Blog, allBlogs } from 'contentlayer/generated';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: Blog }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug)

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
            fontSize: "80px",
            lineHeight: "80px",
            padding: "0 90px",
          }}
        >
          <img
            style={{ marginBottom: "15px" }}
            width="100"
            height="100"
            src={"https://tarungowda.com/logo.png"}
          />
          {blog?.title}
          <div style={{ display: "flex", fontSize: "30px", marginTop: "25px" }}>
            {blog?.tags.map((tag: string) => {
              return (
                <li key={tag} style={{color: "#94a3b8", marginRight: "20px", padding: "6px", border: "#94a3b8 solid 1px", borderRadius: "25px"}}>
                  <span style={{marginRight: "5px"}}>#</span> {tag}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}