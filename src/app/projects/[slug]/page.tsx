import { Projects, allProjects } from 'contentlayer/generated'
import MDXComponent from '@/components/MDXContent'
import NotFound from '@/app/not-found'

export default function ProjectPage({ params }: { params: Projects }) {
  const project = allProjects.find((project) => project.slug === params.slug)
  if (!project)
    return <NotFound />

  return (
    <div className='container project-container'>
      <div className='project-content'>
        <main className='project-main'>
          <div className='project-container'>
            <article className='article'>
              <div className='user-content'>
                <MDXComponent mdx={project} />
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  )
}