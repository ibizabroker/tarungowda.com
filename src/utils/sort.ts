import { Blog, Projects } from "contentlayer/generated"
import { compareDesc, parseISO } from "date-fns"

// For Blogs
export function sortBlogsUsingDate(blogs: Blog[]) {
  return blogs.sort((a: Blog, b: Blog) => 
    compareDesc(parseISO(a.date), parseISO(b.date))
  )
}

// For Projects
export function sortProjectsUsingDate(projects: Projects[]) {
  return projects.sort((a: Projects, b: Projects) => 
    compareDesc(parseISO(a.date), parseISO(b.date))
  )
}