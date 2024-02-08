import { allBlogs } from "contentlayer/generated";
import { formatSlug } from "@/utils/slug";
import { compareDesc } from "date-fns";

export const allTags = Array.from(
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

export const getAllTagSlugs = allTags.map(
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

export const allTagsData = sortTags(allTags).map((tag) => {
  const tagData = {
    name: tag,
    slug: formatSlug(tag),
  };

  return tagData;
});

export const generateTagsData = (tags: string[]) => {
  return tags.map((tag) => {
    return {
      name: tag,
      slug: `/blog/tags/${formatSlug(tag)}`,
    };
  });
};

export const getPostsByTag = (tag: string) => {
  return allBlogs
    .filter((blog) => !blog.draft)
    .filter((blog) => {
      return blog.tags.includes(tag);
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
};

export const getTagsData = (tags: string[]) => {
  const sortedTags = sortTags(tags);
  const tagsData = generateTagsData(sortedTags);

  return tagsData;
};

export const getTagSlugLink = (tagSlug: string) => {
  return `/blog/tags/${tagSlug}`;
};