export default {
  name: 'filesGallery',
  type: 'object',
  title: 'Files Gallery',
  fields: [
    {
      name: 'files',
      type: 'array',
      title: 'Files',
      options: {
        editModel: 'popover'
      },
      of: [
        {
          name: 'pdfFile',
          type: 'file',
          title: 'File',
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
        }
      ]
    }
  ],
  preview: {
    select: {
      files: 'files'
    },
    prepare (value) {
      const f = value.files
      return {
        title: f.map(obj => obj.caption).join(' ; ')
      }
    }
  }
}
