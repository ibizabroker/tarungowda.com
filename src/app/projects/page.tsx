import List from '@/components/Projects/List';
import { allProjects } from 'contentlayer/generated'

export default function Projects() {
  return (
    <div className="container m-10 max-w-7xl mx-auto md:px-16 px-6">
      <List allProjects={allProjects} />
    </div>
  );
}