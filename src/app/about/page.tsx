import { allAbouts } from 'contentlayer/generated';
import MDXComponent from '@/components/MDXContent';
import Toc from '@/components/Blog/TOC';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Tarun is a software developer who loves to explore new tech to solve real-world problems. He also writes technical blogs that are usually solutions, workarounds and sometimes just plain tales of tech woes he encountered along the way.',
  metadataBase: new URL(`https://tarungowda.com/about`),
  openGraph: {
    title: 'About',
    description: 'Tarun is a software developer who loves to explore new tech to solve real-world problems. He also writes technical blogs that are usually solutions, workarounds and sometimes just plain tales of tech woes he encountered along the way.',
    url: 'https://tarungowda.com/about',
  },
}

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