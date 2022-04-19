import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: black;
`
export const CreateTodoContainer = styled.View`
  align-items: center;
  padding-top: 16px;
`
export const CreateTodoInput = styled.TextInput`
  width: 90%;
  margin-top: 24px;
  background: #fff;
  font-size: 18px;
  padding-left: 18px;
  padding-right: 18px;
  border-radius: 10px;
`
export const CreateTodoButton = styled.TouchableOpacity`
  width: 30%;
  height: 40px;
  background: darkgoldenrod;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const TodoList = styled.View`
  align-items: center;
  margin-top: 18px;
`
