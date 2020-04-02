export default {
  name: 'pictureCard',
  type: 'object',
  title: 'Picture Card',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'disabled',
      type: 'boolean',
      title: 'Disabled'
    },
    {
      name: 'link',
      type: 'string',
      title: 'External Link'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'youtube'
        }
      ],
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'title'
    }
  }
}
