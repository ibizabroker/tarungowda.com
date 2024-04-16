import { allBlogTagsData, allProjectTagsData } from "@/utils/tags";
import { allBlogs, allProjects } from "contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  let blogs = allBlogs.map((blog) => ({
    url: `https://tarungowda.com/blog/${blog.slug}`,
    lastModified: blog.date,
  }));

  let blogTags = allBlogTagsData.map((tag) => ({
    url: `https://tarungowda.com/blog/tags/${tag.name}`,
    lastModified: new Date(),
  }));

  let projects = allProjects.map((project) => ({
    url: `https://tarungowda.com/projects/${project.slug}`,
    lastModified: project.date,
  }));

  let projectTags = allProjectTagsData.map((tag) => ({
    url: `https://tarungowda.com/projects/tags/${tag.name}`,
    lastModified: new Date(),
  }));

  let routes = ['', '/blog', '/blog/tags', '/projects', '/projects/tags', '/about'].map((route) => ({
    url: `https://tarungowda.com${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...blogs, ...blogTags, ...projects, ...projectTags];
}