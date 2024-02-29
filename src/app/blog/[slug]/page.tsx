import { Blog, allBlogs } from 'contentlayer/generated'
import MDXComponent from '@/components/MDXContent'
import Toc from '@/components/Blog/TOC'
import NotFound from '@/app/not-found'
import Heading from '@/components/Blog/Heading'

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
              <Heading blog={blog} />
              <div className='user-content'>
                <MDXComponent mdx={blog} />
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