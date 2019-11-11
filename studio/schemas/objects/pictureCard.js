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
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
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
