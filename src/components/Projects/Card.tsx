import Image from "next/image";
import Link from "next/link";
import { Projects } from 'contentlayer/generated'

export default function Card({ project }: { project: Projects }) {
  const base64data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNc0PahHgAGewKXqgTxrAAAAABJRU5ErkJggg==";
  
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card"
    >
      <Image
        src={project.icon}
        width={60}
        height={60}
        placeholder="blur"
        blurDataURL={base64data}
        alt={project.title}
        className="project-card-icon"
      />
      <div>
        <h2 className="project-card-title">{project.title}</h2>
        <div className="project-card-description">
          {project.description}
        </div>
      </div>
    </Link>
  );
}