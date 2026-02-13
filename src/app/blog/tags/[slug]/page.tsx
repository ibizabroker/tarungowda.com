import { Blog } from 'contentlayer/generated'
import { allBlogTagsData, getBlogsByTag } from "@/utils/tags";
import List from '@/components/Blog/List';
import TagsSidebar from '@/components/Blog/TagsSideBar';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tagData = allBlogTagsData.find((tag) => {
    return tag.slug === slug;
  });

  return {
    title: {
      absolute: `# ${tagData?.name} | Blog`
    },
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

export default async function TagsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tagData = allBlogTagsData.find((tag) => {
    return tag.slug === slug;
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