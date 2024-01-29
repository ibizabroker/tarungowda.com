import sortBlogsUsingDate from '@/utils/sortBlogs';
import { allBlogs } from 'contentlayer/generated'

export default function BlogShowcase() {
  const sortedBlogs = sortBlogsUsingDate(allBlogs);
  console.log(sortedBlogs)
  
  return (
    <div className='container blogshowcase-container'>
      <div className='blogshowcase-content'>
        <main className='blogshowcase-main'>
          Blog showcase
        </main>
      </div>
    </div>
  );
}