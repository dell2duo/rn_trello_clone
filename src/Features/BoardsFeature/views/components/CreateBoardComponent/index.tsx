import React from 'react'
import {
  TextInputProps,
  TouchableOpacityProps,
  TouchableWithoutFeedback
} from 'react-native'
import { useTheme } from 'styled-components'
import Text from '../../../../../Shared/components/Text'

import { Button, Container, Input, Wrapper } from './styles'

type CustomProps = {
  onTapOutside: () => void
}

const CreateBoardComponent: React.FC<
  TextInputProps & TouchableOpacityProps & CustomProps
> = props => {
  const theme = useTheme()

  return (
    <TouchableWithoutFeedback onPress={props.onTapOutside}>
      <Container>
        <Wrapper>
          <Text fontSize={24}>Name your board:</Text>
          <Input
            style={{ backgroundColor: '#fff' }}
            accessibilityLabel="new-board-input"
            value={props.value}
            onChangeText={value => props.onChangeText!(value)}
          />
          <Button
            onPress={props.onPress}
            accessibilityLabel="create-board-button">
            <Text fontSize={20} color={theme.primary} bold>
              Create Board
            </Text>
          </Button>
        </Wrapper>
      </Container>
    </TouchableWithoutFeedback>
  )
}

export default CreateBoardComponent
