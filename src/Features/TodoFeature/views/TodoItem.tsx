import React from 'react'
import Text from '../../../Shared/components/Text'

import { Container, RemoveTodoButton } from './styles/TodoItemStyles'
import { TodoItemType } from './TodoView'

type CustomProps = {
  removeTodo: Function
  todo: TodoItemType
}

const TodoItem: React.FC<CustomProps> = ({ removeTodo, todo }) => {
  return (
    <Container key={todo.id} accessibilityLabel="todo-item">
      <Text fontSize={18}>{todo.description}</Text>
      <RemoveTodoButton onPress={() => removeTodo(todo.id)}>
        <Text fontSize={12} color={'red'}>
          Remove Todo
        </Text>
      </RemoveTodoButton>
    </Container>
  )
}

export default TodoItem
