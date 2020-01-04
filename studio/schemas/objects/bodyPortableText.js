import React from 'react'
import customEditor from './customEditor'
import FaImage from 'react-icons/lib/fa/image'
import FaFileImageO from 'react-icons/lib/fa/file-image-o'
import FaFilePdfO from 'react-icons/lib/fa/file-pdf-o'
import FaYoutubeSquare from 'react-icons/lib/fa/youtube-square'
import FaUser from 'react-icons/lib/fa/user'

export default {
  name: 'bodyPortableText',
  type: 'array',
  title: 'Post body',
  inputComponent: customEditor,
  of: [
    {
      type: 'block'
    },
    {
      type: 'authorReference',
      icon: () => (<FaUser />)
    },
    {
      type: 'mainImage',
      icon: () => (<FaFileImageO />)
    },
    {
      type: 'youtube',
      icon: () => (<FaYoutubeSquare />)
    },
    {
      type: 'imageGallery',
      icon: () => (<FaImage />)
    },
    {
      type: 'filesGallery',
      icon: () => (<FaFilePdfO />)
    }
  ]
}
