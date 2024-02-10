import List from '@/components/Blog/List';
import TagsSidebar from '@/components/Blog/TagsSideBar';
import sortBlogsUsingDate from '@/utils/sortBlogs';
import { allBlogs } from 'contentlayer/generated'

export default function BlogShowcase() {
  const sortedBlogs = sortBlogsUsingDate(allBlogs);
  
  return (
    <div className='container blogshowcase-container'>
      <h1 className='blogshowcase-title'>
        All Blogs
      </h1>
      <div className='blogshowcase-content'>
        <main className='blogshowcase-main'>
          <List sortedBlogs={sortedBlogs} />
        </main>
        <TagsSidebar />
      </div>
    </div>
  );
}