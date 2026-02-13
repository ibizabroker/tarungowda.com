import { Blog, allBlogs } from 'contentlayer/generated';
import MDXComponent from '@/components/MDXContent';
import Toc from '@/components/Blog/TOC';
import Heading from '@/components/Blog/Heading';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageView from '@/components/PageView';
import GiscusComments from '@/components/Giscus';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = allBlogs.find((blog) => blog.slug === slug)

  return {
    title: {
      absolute: `${blog?.title} | Blog`
    },
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

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = allBlogs.find((blog) => blog.slug === slug)
  if (!blog)
    return notFound();

  return (
    <div className='container blogshowcase-container'>
      <PageView slug={slug} category='blog' />
      <div className='blog-content'>
        <main className='blog-main'>
          <article className='article'>
            <Heading blog={blog} />
            <div className='user-content'>
              <MDXComponent mdx={blog} />
            </div>
          </article>
          <div className='comment-section'>
            <GiscusComments />
          </div>
        </main>
        <aside className='sidebar'>
          <Toc />
        </aside>
      </div>
    </div>
  )
}