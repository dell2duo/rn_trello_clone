import styled from 'styled-components/native'
import { CustomTextProps } from '../../types/CustomText'

export const CustomText = styled.Text<CustomTextProps>`
  font-family: 'Ubuntu-Regular';
  font-size: ${props => props.fontSize ?? 16}px;
  font-weight: ${props => (props.bold ? 'bold' : '400')};
  color: ${props => props.color ?? props.theme.mainFontColor};
`
