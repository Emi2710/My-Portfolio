export default {
  name: 'postIntro',
  title: 'Introduction aux articles',
  type: 'document',
  fields: [
    {
      name: 'intro',
      title: 'Introduction',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
    },
    
  ],

  
}
