import { format, parseISO } from 'date-fns'
import { Blog, allBlogs } from 'contentlayer/generated'
import MDXComponent from '@/components/Blog/MDXContent'
import Toc from '@/components/Blog/TOC'

export default function BlogPage({ params }: { params: Blog }) {
  // console.log(allBlogs)
  // console.log(params.slug)
  const blog = allBlogs.find((blog) => blog.slug === params.slug)
  if (!blog) throw new Error(`blog not found for slug: ${params.slug}`)

  return (
    // <article className="mx-auto max-w-[1320px] py-8">
    //   <div className="mb-8 text-center">
    //     <time dateTime={blog.date} className="mb-1 text-xs">
    //       {format(parseISO(blog.date), 'LLLL d, yyyy')}
    //     </time>
    //     <h1 className="text-3xl font-bold">{blog.title}</h1>
    //   </div>

    //   <div className="mx-auto max-w-[75rem] px-4 flex-shrink-0 overflow-hidden lg:overflow-visible flex flex-row-reverse gap-8 xl:gap-24">
    //     <div className="sticky top-24 z-[901] w-64 xl:w-[272px] fm:relative fm:top-0">Table of Contents</div>
    //     <div className="min-w-0 flex-1 scroll-mt-[86px]">
    //       <MDXComponent blog={blog} />
    //     </div>
    //   </div>
    // </article>
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