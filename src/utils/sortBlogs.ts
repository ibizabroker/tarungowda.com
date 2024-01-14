import { compareDesc, parseISO } from "date-fns"

type Blog = {
  title: string,
  date: string,
  description: string,
  author: string,
  draft: boolean,
  tags: string[]
}

export default function sortBlogsUsingDate(blogs: Blog[]) {
  return blogs.sort((a: Blog, b: Blog) => 
    compareDesc(parseISO(a.date), parseISO(b.date))
  )
}