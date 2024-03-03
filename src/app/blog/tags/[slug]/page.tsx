import { Blog } from 'contentlayer/generated'
import { allBlogTagsData, getBlogsByTag } from "@/utils/tags";
import List from '@/components/Blog/List';
import TagsSidebar from '@/components/Blog/TagsSideBar';

export default function TagsPage({ params }: { params: any }) {
  const tagData = allBlogTagsData.find((tag) => {
    return tag.slug === params.slug;
  });

  const tagName = tagData?.name
  let blogs: Blog[] | null = null;

  if(tagName !== undefined){
    blogs = getBlogsByTag(tagName);
  }

  return (
    <div className='container tag-container'>
      <h1 className='tag-title'>
        # {tagData?.name}
      </h1>
      <div className='tag-content'>
        <main className='tag-main'>
          <List sortedBlogs={blogs} />
        </main>
        <TagsSidebar />
      </div>
    </div>
  )
}