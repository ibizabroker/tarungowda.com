import { Projects } from 'contentlayer/generated'
import { allProjectTagsData, getProjectsByTag } from "@/utils/tags";
import List from '@/components/Projects/List';
import { Metadata } from 'next';

export function generateMetadata({ params }: { params: any }): Metadata {
  const tagData = allProjectTagsData.find((tag) => {
    return tag.slug === params.slug;
  });

  return {
    title: {
      absolute: `# ${tagData?.name} | Projects`
    },
    metadataBase: new URL(`https://tarungowda.com/projects/tags/${tagData?.slug}`),
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

export default function TagsPage({ params }: { params: any }) {
  const tagData = allProjectTagsData.find((tag) => {
    return tag.slug === params.slug;
  });

  const tagName = tagData?.name
  let projects: Projects[] | null = null;

  if(tagName !== undefined){
    projects = getProjectsByTag(tagName);
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