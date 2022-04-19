import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import uuid from 'react-native-uuid'
import Text from '../../../Shared/components/Text'

import {
  Container,
  CreateTodoButton,
  CreateTodoContainer,
  CreateTodoInput,
  TodoList
} from './styles/TodoViewStyles'
import TodoItem from './TodoItem'

export type TodoItemType = {
  description: string
  id: string
}

const TodoView: React.FC = () => {
  const [todoInputValue, setTodoInputValue] = useState<string>('')
  const [listOfTodos, setListOfTodos] = useState<TodoItemType[]>(
    [] as TodoItemType[]
  )

  const addTodoItem = (todoDescription: string) => {
    if (!todoDescription) return

    const todoItem: TodoItemType = {
      description: todoDescription,
      id: uuid.v4().toString()
    }
    setListOfTodos(listOfTodos.concat(todoItem))
    setTodoInputValue('')
  }

  const removeTodo = (todoId: string) => {
    const filteredTodos = listOfTodos.filter(todo => todo.id !== todoId)
    setListOfTodos(filteredTodos)
  }

  return (
    <Container>
      <ScrollView>
        <CreateTodoContainer>
          <Text bold fontSize={30} color="#fff">
            My Todo List
          </Text>
          <CreateTodoInput
            value={todoInputValue}
            onChangeText={value => setTodoInputValue(value)}
            accessibilityLabel="todo-input"
            multiline={true}
            placeholder="Type Here"
          />
          <CreateTodoButton onPress={() => addTodoItem(todoInputValue)}>
            <Text fontSize={18} color="#fff" bold>
              Create Todo
            </Text>
          </CreateTodoButton>
        </CreateTodoContainer>

        <TodoList>
          {listOfTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
          ))}
        </TodoList>
      </ScrollView>
    </Container>
  )
}

export default TodoView
