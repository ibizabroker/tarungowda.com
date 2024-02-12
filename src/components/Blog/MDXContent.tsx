import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
  h1: ({ ...props }) => <h2 className='h1-level' {...props} />,
  h2: ({ ...props }) => <h2 className='h2-level' {...props} />,
  h3: ({ ...props }) => <h3 className='h3-level' {...props} />,
  h4: ({ ...props }) => <h4 className='h4-level' {...props} />,
  h5: ({ ...props }) => <h5 className='h5-level' {...props} />,
  h6: ({ ...props }) => <h2 className='h6-level' {...props} />
};

export default function MDXContent({ blog }: { blog: any }) {

  const MarkdownContent = useMDXComponent(blog.body.code)

  return (
    <div className='prose prose-lg max-w-max'>
      <MarkdownContent components={components} />
    </div>
  )
}