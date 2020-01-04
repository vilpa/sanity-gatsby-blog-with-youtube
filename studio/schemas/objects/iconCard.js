export default {
  name: 'iconCard',
  type: 'object',
  title: 'Icon Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon Name',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {type: 'block'}
      ],
      options: {
        isHighlighted: true
      }
    }
  ]
}
