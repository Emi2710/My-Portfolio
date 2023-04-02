export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'references',
      title: 'Articles en suggestion',
      type: 'array',
      of: [{ type: 'reference', to: {type: 'post'}}],
    },
    {
      name: 'descriptionSeo',
      title: 'Description SEO',
      type: 'string',
      
    },
  ],

  
}
