import List from '@/components/Blog/List';
import sortBlogsUsingDate from '@/utils/sortBlogs';
import { allBlogs } from 'contentlayer/generated'

export default function BlogShowcase() {
  const sortedBlogs = sortBlogsUsingDate(allBlogs);
  
  return (
    <div className='container blogshowcase-container'>
      <div className='blogshowcase-content'>
        <main className='blogshowcase-main'>
          <List sortedBlogs={sortedBlogs} />
        </main>
      </div>
    </div>
  );
}