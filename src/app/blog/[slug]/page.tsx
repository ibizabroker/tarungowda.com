import { Blog, allBlogs } from 'contentlayer/generated'
import MDXComponent from '@/components/MDXContent'
import Toc from '@/components/Blog/TOC'
import NotFound from '@/app/not-found'
import Heading from '@/components/Blog/Heading'
import { Metadata } from 'next'

export function generateMetadata({params}: {params: Blog}): Metadata {
  const blog = allBlogs.find((blog) => blog.slug === params.slug)

  return {
    title: {
      absolute: `${blog?.title} | Blog`
    },
    metadataBase: new URL(`https://tarungowda.com/blog${blog?.slug}`),
    description: `${blog?.description}`,
    keywords: `${blog?.tags}`,
    creator: `${blog?.author}`,
    openGraph: {
      title: {
        absolute: `${blog?.title} | Blog`
      },
      description: `${blog?.description}`,
      url: `https://tarungowda.com/blog${blog?.slug}`,
    },
  }
}

export default function BlogPage({ params }: { params: Blog }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug)
  if (!blog)
    return <NotFound />

  return (
    <div className='container blogshowcase-container'>
      <div className='blog-content'>
        <main className='blog-main'>
            <article className='article'>
              <Heading blog={blog} />
              <div className='user-content'>
                <MDXComponent mdx={blog} />
              </div>
            </article>
        </main>
        <aside className='sidebar'>
          <Toc />
        </aside>
      </div>
    </div>
  )
}