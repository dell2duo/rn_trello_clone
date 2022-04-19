import React from 'react'
import { CustomTextProps } from '../../types/CustomText'

import { CustomText } from './styles'

const Text: React.FC<CustomTextProps> = props => {
  return <CustomText {...props}>{props.children}</CustomText>
}

export default Text
