export default {
  name: 'tagReference',
  type: 'object',
  title: 'Tag reference',
  fields: [
    {
      name: 'tag',
      type: 'reference',
      to: [
        {
          type: 'category'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'category.name'
    }
  }
}
