import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: ${props => props.theme.primary};
  justify-content: center;
  align-items: center;
`
