import { Projects } from 'contentlayer/generated'
import { allProjectTagsData, getProjectsByTag } from "@/utils/tags";
import List from '@/components/Projects/List';

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