import { allAbouts } from 'contentlayer/generated';
import MDXComponent from '@/components/MDXContent';

export default function AboutPage() {
  return (
    <div className='container about-container'>
      <MDXComponent mdx={allAbouts[0]} /> 
    </div>
  );
}