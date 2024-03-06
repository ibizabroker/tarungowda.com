import Image from "next/image";
import { Projects, allProjects } from 'contentlayer/generated'
import MDXComponent from '@/components/MDXContent'
import NotFound from '@/app/not-found'
import { getProjectTagsData } from "@/utils/tags";
import Link from "next/link";

export default function ProjectPage({ params }: { params: Projects }) {
  const project = allProjects.find((project) => project.slug === params.slug)
  if (!project)
    return <NotFound />

  const tagsData = getProjectTagsData(project.tags);

  return (
    <div className='container project-container'>
      <div className="project-heading-head">
        <h1 className="project-heading">
          {project.title}
        </h1>
        <div className="project-links">
          {project.github? 
            <a
              href={project.github}
              rel="noreferrer noopener"
              target="_blank"
              className="button-primary project-github"
            >
              Github
            </a>
          :
            <></>
          }
          {project.website? 
            <a
              href={project.website}
              rel="noreferrer noopener"
              target="_blank"
              className="button-secondary project-website"
            >
              Website
            </a>
          :
            <></>
          }
        </div>
      </div>

      <div className="project-image">
        <Image
          className="project-cover"
          src={project.coverImage}
          alt={project.title}
          fill
          style={{objectFit: "contain"}}
          quality={100}
        />
      </div>
      <ul className='heading-tags'>
        {tagsData.map((tag) => {
          return (
            <li className='heading-tag' key={tag.name}>
              <Link href={tag.slug} className='heading-tag-link'>
                <span>#</span> {tag.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <article className='article'>
        <div className='user-content'>
          <MDXComponent mdx={project} />
        </div>
      </article>
    </div>
  )
}