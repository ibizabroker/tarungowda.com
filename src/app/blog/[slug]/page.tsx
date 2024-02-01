import { Blog, allBlogs } from 'contentlayer/generated'
import MDXComponent from '@/components/Blog/MDXContent'
import Toc from '@/components/Blog/TOC'
import NotFound from '@/app/not-found'

export default function BlogPage({ params }: { params: Blog }) {
  // console.log(allBlogs)
  // console.log(params.slug)
  const blog = allBlogs.find((blog) => blog.slug === params.slug)
  if (!blog)
    return <NotFound />

  return (
    <div className='container blog-container'>
      <div className='blog-content'>
        <main className='blog-main'>
          <div className='blog-container'>
            <article className='article'>
              <div className='user-content'>
                <MDXComponent blog={blog} />
              </div>
            </article>
          </div>
        </main>
        <aside className='sidebar'>
          <Toc />
        </aside>
      </div>
    </div>
  )
}