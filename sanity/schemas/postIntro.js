export default {
  name: 'postIntro',
  title: 'Introduction aux articles',
  type: 'document',
  fields: [
    {
      name: 'references',
      title: 'Introduction',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    
  ],

  
}
