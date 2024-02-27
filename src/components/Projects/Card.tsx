import Image from "next/image";
import Link from "next/link";
import { Projects } from 'contentlayer/generated'

export default function Card({ project }: { project: Projects }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex items-center gap-x-4 dark:bg-dark-2 border border-solid dark:border-divider-1 p-4 rounded-lg"
    >
      <Image
        src={project.icon}
        width={60}
        height={60}
        alt={project.title}
        className="dark:bg-dark-1 rounded-md p-2"
      />
      <div>
        <h2 className="text-lg tracking-wide mb-1">{project.title}</h2>
        <div className="text-sm dark:text-primary-1 text-primary-2">
          {project.description}
        </div>
      </div>
    </Link>
  );
}