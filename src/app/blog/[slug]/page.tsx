import { format, parseISO } from 'date-fns'
import { Blog, allBlogs } from 'contentlayer/generated'

export default function BlogPage({ params }: { params: Blog }) {
  // console.log(allBlogs)
  // console.log(params.slug)
  const blog = allBlogs.find((blog) => blog.slug === params.slug)
  if (!blog) throw new Error(`blog not found for slug: ${params.slug}`)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={blog.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(blog.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{blog.title}</h1>
      </div>
      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: blog.body.html }} />
    </article>
  )
}