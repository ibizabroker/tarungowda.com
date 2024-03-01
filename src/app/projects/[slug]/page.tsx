import Image from "next/image";
import { Projects, allProjects } from 'contentlayer/generated'
import MDXComponent from '@/components/MDXContent'
import NotFound from '@/app/not-found'

export default function ProjectPage({ params }: { params: Projects }) {
  const project = allProjects.find((project) => project.slug === params.slug)
  if (!project)
    return <NotFound />

  return (
    <div className='container project-container'>
      <div className="flex items-start justify-between mb-4">
        <h1 className="font-bold tracking-tight sm:text-5xl text-3xl mb-4 max-w-sm">
          {project.title}
        </h1>
        <div className="flex justify-end">
          {project.github? 
            <a
              href={project.github}
              rel="noreferrer noopener"
              target="_blank"
              className="button-primary rounded-md px-4 py-2"
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
              className="button-secondary rounded-md px-4 py-2 ml-4"
            >
              Website
            </a>
          :
            <></>
          }
        </div>
      </div>

      <div className="relative w-full h-40 pt-[52.5%]">
        <Image
          className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
          layout="fill"
          src={project.coverImage}
          alt={project.coverImage}
          quality={100}
        />
      </div>
      <article className='article'>
        <div className='user-content'>
          <MDXComponent mdx={project} />
        </div>
      </article>
    </div>
  )
}