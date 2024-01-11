import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files'

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `${doc._raw.sourceFileName.replace(/\.md$/, '')}`,
  },
};


export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blog/*.md`,
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
  documentTypes: [Blog] 
})