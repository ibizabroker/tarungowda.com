import PageHeading from '@/components/PageHeading';
import List from '@/components/Projects/List';
import { sortProjectsUsingDate } from '@/utils/sort';
import { allProjects } from 'contentlayer/generated'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description: "Welcome to my project gallery, where I've rounded up some of my favorite creations. From coding experiments to passion projects, these are the things that have kept me busy and excited over the years. Take a look around, if anything catches your eye feel free to contribute!",
  openGraph: {
    title: "Projects",
    description: "Welcome to my project gallery, where I've rounded up some of my favorite creations. From coding experiments to passion projects, these are the things that have kept me busy and excited over the years. Take a look around, if anything catches your eye feel free to contribute!",
    url: "https://tarungowda.com/projects",
  },
}

export default function Projects() {
  const sortedProjects = sortProjectsUsingDate(allProjects);

  return (
    <div className="container projects-container">
      <PageHeading 
        title="Projects"
        description="Welcome to my project gallery, where I've rounded up some of my favorite creations. From coding experiments to passion projects, these are the things that have kept me busy and excited over the years. Take a look around, if anything catches your eye feel free to contribute!"
      />
      <List sortedProjects={sortedProjects} />
    </div>
  );
}