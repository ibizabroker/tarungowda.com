import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `content/**/*.md`,
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
  computedFields: {
    url: { 
      type: 'string', 
      resolve: (post) => `/blog/${post._raw.flattenedPath}` 
    },
  },
}))

export default makeSource({ 
  contentDirPath: 'src', 
  documentTypes: [Blog] 
})