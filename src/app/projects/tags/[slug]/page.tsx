import { Projects } from 'contentlayer/generated'
import { allProjectTagsData, getProjectsByTag } from "@/utils/tags";
import List from '@/components/Projects/List';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tagData = allProjectTagsData.find((tag) => {
    return tag.slug === slug;
  });

  return {
    title: {
      absolute: `# ${tagData?.name} | Projects`
    },
    description: `Projects related for the tag - # ${tagData?.name}`,
    openGraph: {
      title: {
        absolute: `# ${tagData?.name} | Projects`
      },
      description: `Projects related for the tag - # ${tagData?.name}`,
      url: `https://tarungowda.com/projects/tags/${tagData?.slug}`,
    },
  }
}

export default async function TagsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tagData = allProjectTagsData.find((tag) => {
    return tag.slug === slug;
  });

  const tagName = tagData?.name
  let projects: Projects[] | null = null;

  if(tagName !== undefined){
    projects = getProjectsByTag(tagName);
  } else {
    notFound();
  }

  return (
    <div className='container tag-container'>
      <h1 className='tag-title'>
        # {tagData?.name}
      </h1>
      <div>
        <List sortedProjects={projects} />
      </div>
    </div>
  )
}