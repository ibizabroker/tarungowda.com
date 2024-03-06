import List from '@/components/Projects/List';
import { sortProjectsUsingDate } from '@/utils/sort';
import { allProjects } from 'contentlayer/generated'

export default function Projects() {
  const sortedProjects = sortProjectsUsingDate(allProjects);

  return (
    <div className="container projects-container">
      <List sortedProjects={sortedProjects} />
    </div>
  );
}