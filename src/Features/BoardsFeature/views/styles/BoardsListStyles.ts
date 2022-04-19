import styled from 'styled-components/native'
import { generateRandomColor } from '../../util/RandomColorsGenerator'

export const Container = styled.View`
  flex: 1;
  margin-top: 16px;
`
export const BoardCard = styled.TouchableOpacity`
  padding-top: 16px;
  margin-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 16px;
  background-color: ${() => generateRandomColor()};
  border-radius: 8px;
  min-height: 120px;
`
