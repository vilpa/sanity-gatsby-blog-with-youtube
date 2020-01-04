import FaPaperclip from 'react-icons/lib/fa/paperclip'

export default {
  name: 'imageGallery',
  type: 'object',
  title: 'Image Gallery',
  blockEditor: {
    icon: FaPaperclip
  },
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'mainImage',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true
              }
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
              validation: Rule =>
                Rule.error('You have to fill out the alternative text.').required(),
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      images: 'images'
    },
    prepare (value) {
      const f = value.images
      return {
        title: f.map(mainImage => mainImage.caption).join(' ; ')
      }
    }
  }
}
