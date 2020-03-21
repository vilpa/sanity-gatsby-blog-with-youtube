export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'text',
      title: 'Sub Title'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'pictureCard'
        }
      ]
    },
    {
      name: 'address',
      title: 'Addresses',
      type: 'array',
      of: [
        {
          type: 'iconCard'
        }
      ]
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{ type: 'author' }]
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your site for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your site.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
	{
      name: 'facebook',
      type: 'string',
      title: 'Facebook'
    },
	{
      name: 'twitter',
      type: 'string',
      title: 'Twitter'
    },
	{
      name: 'timezone',
      type: 'string',
      title: 'Time Zone'
    },
  ]
}
