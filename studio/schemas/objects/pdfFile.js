export default {
  name: 'pdfFile',
  type: 'file',
  title: 'PDF',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      validation: Rule => Rule.error('You have to fill out the captipon text.').required(),
      options: {
        isHighlighted: true
      }
    }
  ],
  preview: {
    select: {
      subtitle: 'asset.originalFilename',
      title: 'caption'
    }
  }
}
