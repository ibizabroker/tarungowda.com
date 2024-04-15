import { Blog } from 'contentlayer/generated'
import { allBlogTagsData, getBlogsByTag } from "@/utils/tags";
import List from '@/components/Blog/List';
import TagsSidebar from '@/components/Blog/TagsSideBar';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export function generateMetadata({ params }: { params: any }): Metadata {
  const tagData = allBlogTagsData.find((tag) => {
    return tag.slug === params.slug;
  });

  return {
    title: {
      absolute: `# ${tagData?.name} | Blog`
    },
    metadataBase: new URL(`https://tarungowda.com/blog/tags/${tagData?.slug}`),
    description: `Blogs related for the tag - # ${tagData?.name}`,
    openGraph: {
      title: {
        absolute: `# ${tagData?.name} | Blog`
      },
      description: `Blogs related for the tag - # ${tagData?.name}`,
      url: `https://tarungowda.com/blog/tags/${tagData?.slug}`,
    },
  }
}

export default function TagsPage({ params }: { params: any }) {
  const tagData = allBlogTagsData.find((tag) => {
    return tag.slug === params.slug;
  });

  const tagName = tagData?.name
  let blogs: Blog[] | null = null;

  if (tagName !== undefined){
    blogs = getBlogsByTag(tagName);
  } else {
    notFound();
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