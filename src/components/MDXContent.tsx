import { useMDXComponent } from 'next-contentlayer/hooks'
import Pre from './Blog/Pre';
import CodeHead from './Blog/CodeHead';

const components = {
  CodeHead,
  p: ({ ...props }) => <p className='p-tag' {...props} />,
  h1: ({ ...props }) => <h2 className='h1-level' {...props} />,
  h2: ({ ...props }) => <h2 className='h2-level' {...props} />,
  h3: ({ ...props }) => <h3 className='h3-level' {...props} />,
  h4: ({ ...props }) => <h4 className='h4-level' {...props} />,
  h5: ({ ...props }) => <h5 className='h5-level' {...props} />,
  h6: ({ ...props }) => <h2 className='h6-level' {...props} />,
  ul: ({ ...props }) => <ul className='unordered-list' {...props} />,
  ol: ({ ...props }) => <ol className='ordered-list' {...props} />,
  a: ({ ...props }) => <a className='a-tag' {...props} />,
  pre: Pre,
  code: ({ ...props }) => <code className='code' {...props} />,
  table: ({ ...props }) => <table className='table' {...props} />,
  thead: ({ ...props }) => <thead className='thead' {...props} />,
  tr: ({ ...props }) => <tr className='tr' {...props} />,
  th: ({ ...props }) => <th className='th' {...props} />,
  td: ({ ...props }) => <td className='td' {...props} />,
};

export default function MDXContent({ mdx }: { mdx: any }) {

  const MarkdownContent = useMDXComponent(mdx.body.code)

  return (
    <div className='prose prose-lg max-w-max
      blockquote-tag hr-tag
      prose-strong:dark:text-primary-1 prose-strong:text-primary-2'
    >
      <MarkdownContent components={components} />
    </div>
  )
}