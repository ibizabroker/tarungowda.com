import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
  },
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw, { wordsPerMinute: 238 }),
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { 
      type: 'string', 
      required: true 
    },
    date: { 
      type: 'date', 
      required: true 
    },
    description: {
      type: 'string',
      required: true
    },
    author: { 
      type: 'string', 
      required: true 
    },
    draft: {
      type: 'boolean',
      default: false
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true
    }
  },
  computedFields
}))

export const Projects = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: `projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { 
      type: 'string', 
      required: true 
    },
    description: {
      type: 'string',
      required: true
    },
    icon: {
      type: 'string',
      required: true
    },
    coverImage: {
      type: 'string',
      required: true
    },
    github: {
      type: 'string'
    },
    website: {
      type: 'string'
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true
    }
  },
  computedFields
}))

export default makeSource({ 
  contentDirPath: 'src/content', 
  documentTypes: [Blog, Projects],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode, 
        {
          theme: {
            dark: "slack-dark",
            light: "slack-ochin",
          },
          keepBackground: false,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ]
  }
})