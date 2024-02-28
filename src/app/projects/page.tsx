import List from '@/components/Projects/List';
import { allProjects } from 'contentlayer/generated'

export default function Projects() {
  return (
    <div className="container projects-container">
      <List allProjects={allProjects} />
    </div>
  );
}