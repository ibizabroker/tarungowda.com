import { allBlogs } from "contentlayer/generated";
import { formatSlug } from "@/utils/slug";
import { compareDesc } from "date-fns";

export const allBlogTags = Array.from(
  new Set(
    allBlogs
      .filter((blog) => !blog.draft)
      .sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
      })
      .map((blog) => blog.tags)
      .flat()
  )
);

export const getAllBlogTagSlugs = allBlogTags.map(
  (tag) => `/blog/tags/${formatSlug(tag)}`
);

const sortTags = (tags: string[]) => {
  return tags.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase()
      ? 1
      : b.toLowerCase() > a.toLowerCase()
      ? -1
      : 0
  );
};

export const allBlogTagsData = sortTags(allBlogTags).map((tag) => {
  const tagData = {
    name: tag,
    slug: formatSlug(tag),
  };

  return tagData;
});

export const generateBlogTagsData = (tags: string[]) => {
  return tags.map((tag) => {
    return {
      name: tag,
      slug: `/blog/tags/${formatSlug(tag)}`,
    };
  });
};

export const getBlogsByTag = (tag: string) => {
  return allBlogs
    .filter((blog) => !blog.draft)
    .filter((blog) => {
      return blog.tags.includes(tag);
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
};

export const getBlogTagsData = (tags: string[]) => {
  const sortedTags = sortTags(tags);
  const tagsData = generateBlogTagsData(sortedTags);

  return tagsData;
};

export const getBlogTagSlugLink = (tagSlug: string) => {
  return `/blog/tags/${tagSlug}`;
};