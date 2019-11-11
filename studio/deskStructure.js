import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'menu'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts')
        .child(
          S.documentList()
            .title('Tags')
            .menuItems(S.documentTypeList('category').getMenuItems())
            .filter('_type == $type')
            .params({ type: 'category' })
            .child(categoryId =>
              S.documentList()
                .title('Posts')
                .menuItems(S.documentTypeList('post').getMenuItems())
                .filter('_type == $type && $categoryId in categories[]._ref')
                .params({ type: 'post', categoryId })
            )
        ),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Tags')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Tags')),
      S.listItem()
        .title('Menu')
        .schemaType('menu')
        .child(S.documentTypeList('menu').title('Menu')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
