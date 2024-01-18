import { useMDXComponent } from 'next-contentlayer/hooks'

export default function MDXContent({ blog }: { blog: any }) {

  const MarkdownContent = useMDXComponent(blog.body.code)

  return (
    <div className='prose prose-lg max-w-max'>
      <MarkdownContent />
    </div>
  )
}