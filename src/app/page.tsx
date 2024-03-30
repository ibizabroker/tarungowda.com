import BlogList from "@/components/Blog/List";
import ProjectList from "@/components/Projects/List";
import { sortBlogsUsingDate, sortProjectsUsingDate } from "@/utils/sort";
import { allBlogs, allProjects } from "contentlayer/generated";
import Image from "next/image";

function Home() {
  const sortedBlogs = sortBlogsUsingDate(allBlogs);
  const sortedProjects = sortProjectsUsingDate(allProjects);
  
  return (
    <div className="container m-10 mt-24 max-w-[1264px] mx-auto md:px-16 px-6">
      <div className="flex lg:flex-row flex-col xl:items-center items-start gap-x-12 gap-y-12 mb-10">
        <div className="max-w-3xl">
          <h1 className="font-medium tracking-tight sm:text-5xl text-4xl mb-6 lg:leading-[3.7rem]">
            Hello! I'm Tarun.
          </h1>
          <p>Your everyday software developer exploring new tech to solve real-world problems. On this website I share some insights through technical blogs and projects that usually automates or solves the challenges I have faced in the past.</p>
        </div>
        <Image
          className="rounded-2xl lg:w-[570px] w-full"
          src="/static/projects/coverImage/ez-split.png"
          alt="Tarun Gowda"
          width={570}
          height={200}
          quality={100}
        />
      </div>
      <div className="my-2">
        <h2 className="font-medium tracking-tight sm:text-4xl text-3xl mb-6 lg:leading-[3.7rem]">Recent Blogs</h2>
        <BlogList sortedBlogs={sortedBlogs.slice(0, 3)} className="flex xl:w-[calc(50%_-227px)] md:w-[calc(50%_-24px)] w-[calc(100%_-32px)] mr-5 mt-12" />
      </div>
      <div className="mt-4">
        <h2 className="font-medium tracking-tight sm:text-4xl text-2xl mb-6 lg:leading-[3.7rem]">Recent Projects</h2>
        <ProjectList sortedProjects={sortedProjects.slice(0, 3)} />
      </div>
    </div>
  )
}

export default Home