import customEditor from './customEditor'
export default {
  name: 'imageGallery',
  type: 'object',
  title: 'Image Gallery',
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
          ],
          options: { hotspot: true }
        }
      ]
    }
  ]
}
