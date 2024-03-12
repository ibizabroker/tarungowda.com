import { allAbouts } from 'contentlayer/generated';
import MDXComponent from '@/components/MDXContent';
import Toc from '@/components/Blog/TOC';

export default function AboutPage() {
  const about = allAbouts[0];

  return (
    <div className='container about-container'>
      <div className='blog-content'>
      <main className='blog-main'>
        <article className='article'>
          <div className='about-title'>{about.title}</div>
          <div className='user-content'>
            <MDXComponent mdx={about} />
          </div>
        </article>
      </main>
        <aside className='sidebar'>
          <Toc />
        </aside>
      </div> 
    </div>
  );
}