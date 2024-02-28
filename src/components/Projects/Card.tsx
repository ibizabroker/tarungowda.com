import Image from "next/image";
import Link from "next/link";
import { Projects } from 'contentlayer/generated'

export default function Card({ project }: { project: Projects }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card"
    >
      <Image
        src={project.icon}
        width={60}
        height={60}
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