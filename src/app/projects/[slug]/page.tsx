import { Projects, allProjects } from 'contentlayer/generated'
import MDXComponent from '@/components/MDXContent'
import { getProjectTagsData } from "@/utils/tags";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageView from "@/components/PageView";
import ProjectImage from "@/components/Projects/ProjectImage";

export function generateMetadata({ params }: { params: Projects }): Metadata {
  const project = allProjects.find((project) => project.slug === params.slug)

  return {
    title: {
      absolute: `${project?.title} | Projects`
    },
    description: `${project?.description}`,
    keywords: `${project?.tags}`,
    openGraph: {
      title: {
        absolute: `${project?.title} | Projects`
      },
      description: `${project?.description}`,
      url: `https://tarungowda.com/projects/${project?.slug}`,
    },
  }
}

export default function ProjectPage({ params }: { params: Projects }) {
  const project = allProjects.find((project) => project.slug === params.slug)
  if (!project)
    return notFound();

  const tagsData = getProjectTagsData(project.tags);

  return (
    <div className='container project-container'>
      <PageView slug={params.slug} category='projects' />
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
        <ProjectImage 
          src={project.coverImage}
          title={project.title}
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