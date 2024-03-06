import { allBlogs, allProjects } from "contentlayer/generated";
import { formatSlug } from "@/utils/slug";
import { compareDesc } from "date-fns";

// Sort Tags
const sortTags = (tags: string[]) => {
  return tags.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase()
      ? 1
      : b.toLowerCase() > a.toLowerCase()
      ? -1
      : 0
  );
};

// For Blogs
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

// For Projects
export const allProjectTags = Array.from(
  new Set(
    allProjects
      .sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
      })
      .map((project) => project.tags)
      .flat()
  )
);

export const getAllProjectTagSlugs = allProjectTags.map(
  (tag) => `/projects/tags/${formatSlug(tag)}`
);

export const allProjectTagsData = sortTags(allProjectTags).map((tag) => {
  const tagData = {
    name: tag,
    slug: formatSlug(tag),
  };

  return tagData;
});

export const generateProjectTagsData = (tags: string[]) => {
  return tags.map((tag) => {
    return {
      name: tag,
      slug: `/projects/tags/${formatSlug(tag)}`,
    };
  });
};

export const getProjectsByTag = (tag: string) => {
  return allProjects
    .filter((project) => {
      return project.tags.includes(tag);
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
};

export const getProjectTagsData = (tags: string[]) => {
  const sortedTags = sortTags(tags);
  const tagsData = generateProjectTagsData(sortedTags);

  return tagsData;
};

export const getProjectTagSlugLink = (tagSlug: string) => {
  return `/projects/tags/${tagSlug}`;
};