import { Blog } from 'contentlayer/generated'
import { allTagsData, getPostsByTag } from "@/utils/tags";
import List from '@/components/Blog/List';

export default function TagsPage({ params }: { params: any }) {
  const tagData = allTagsData.find((tag) => {
    return tag.slug === params.slug;
  });

  const tagName = tagData?.name
  let blogs: Blog[] | null = null;

  if(tagName !== undefined){
    blogs = getPostsByTag(tagName);
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
      </div>
    </div>
  )
}