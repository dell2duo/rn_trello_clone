import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
  opacity: 0.8;
`
export const Wrapper = styled.View`
  background-color: ${props => props.theme.tertiary};
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 8px;
  width: 80%;
`
export const Input = styled.TextInput`
  background-color: '#fff';
  height: 58px;
  width: auto;
  border-radius: 8px;
  margin-top: 12px;
  margin-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 22px;
`
export const Button = styled.TouchableOpacity`
  align-self: flex-end;
`
