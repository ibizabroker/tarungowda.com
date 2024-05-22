import BlogList from "@/components/Blog/List";
import ProjectList from "@/components/Projects/List";
import { sortBlogsUsingDate, sortProjectsUsingDate } from "@/utils/sort";
import { allBlogs, allProjects } from "contentlayer/generated";
import Image from "next/image";

function Home() {
  const sortedBlogs = sortBlogsUsingDate(allBlogs);
  const sortedProjects = sortProjectsUsingDate(allProjects);
  
  return (
    <div className="container home-container">
      <div className="home-intro-container">
        <div>
          <h1 className="home-intro-heading">
            Hello! I'm Tarun.
          </h1>
          <p>Your everyday software developer exploring new tech to solve real-world problems. On this website I share some insights through technical blogs and projects that usually automates or solves the challenges I have faced in the past.</p>
        </div>
        <div className="home-image-div">
          <Image
            className="home-intro-image"
            src="/static/home/tarungowda.png"
            alt="Tarun Gowda"
            width={3840}
            height={2160}
            sizes="(min-width: 1340px) 647px, (min-width: 1040px) 47.5vw, (min-width: 780px) calc(100vw - 128px), calc(100vw - 48px)"
            priority
            quality={60}
          />
        </div>
      </div>
      <div className="home-recent-works">
        <h2 className="home-recent-works-heading">Recent Blogs</h2>
        <BlogList sortedBlogs={sortedBlogs.slice(0, 3)} className="home-blog-list" />
      </div>
      <div className="home-recent-works">
        <h2 className="home-recent-works-heading">Recent Projects</h2>
        <ProjectList sortedProjects={sortedProjects.slice(0, 3)} />
      </div>
    </div>
  )
}

export default Home