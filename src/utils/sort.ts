import { Blog } from "contentlayer/generated"
import { compareDesc, parseISO } from "date-fns"

export function sortBlogsUsingDate(blogs: Blog[]) {
  return blogs.sort((a: Blog, b: Blog) => 
    compareDesc(parseISO(a.date), parseISO(b.date))
  )
}