import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Plus } from 'react-native-feather'

import { Container } from './styles'

const AddButton: React.FC<TouchableOpacityProps> = props => {
  return (
    <Container onPress={props.onPress} testID={props.testID}>
      <Plus height={54} width={54} color={'#fff'} />
    </Container>
  )
}

export default AddButton
