export default {
  name: 'menu',
  type: 'document',
  title: 'Menu Item',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'publishOrder',
      type: 'number',
      title: 'Publishing order',
      description: 'Set order number to display items'
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'string',
      options: {
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Apps', value: 'apps' },
          { title: 'Schedule', value: 'schedule' },
          { title: 'CloudDownload', value: 'cloudDownload' },
          { title: 'Description', value: 'description' },
          { title: 'Camera', value: 'camera' },
          { title: 'Directions', value: 'directions' },
          { title: 'DateRange', value: 'dateRange' },
          { title: 'LocalLibrary', value: 'localLibrary' }
        ], // <-- predefined values
        layout: 'dropdown' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }, { type: 'category' }]
        }
      ],
      title: 'Content'
    }
  ],
  orderings: [
    {
      name: 'numbItemAsc',
      title: 'Item number less–>more',
      by: [
        {
          field: 'publishOrder',
          direction: 'asc'
        }
      ]
    }
  ]
}
