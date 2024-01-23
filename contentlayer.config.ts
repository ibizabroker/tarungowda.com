import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import GithubSlugger from 'github-slugger';

interface Heading {
  level: "one" | "two" | "three";
  text: string | undefined;
  slug: string | undefined;
}

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
  },
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw, { wordsPerMinute: 238 }),
  },
  toc: {
    type: 'json',
    resolve:async (doc) => {
      const slugger = new GithubSlugger();
      const regEx = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;

      const headings = Array.from(doc.body.raw.matchAll(regEx)).map(( {groups} ) => {
        const flag = groups?.flag;
        const content = groups?.content;

        return {
          level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
          text: content,
          slug: content ? slugger.slug(content) : undefined
        }
      })

      return headings;
    }
  }
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

export default makeSource({ 
  contentDirPath: 'src/content', 
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode, 
        {
          theme: "github-dark",
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