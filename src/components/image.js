/** Simple comp */

import React from 'react'
import { Image } from 'react-native'

const MyImage = () => {

  let pic = {
    uri: 'MyImage.pic'
  };

  return (
    <Image source={pic} style={{width:193, height:110}} />
  )
}

export default MyImage

