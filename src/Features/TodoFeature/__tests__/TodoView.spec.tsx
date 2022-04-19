import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import TodoView from '../views/TodoView'
describe('Home page tests', () => {
  it('should add a todo item to the list', () => {
    const { getByA11yLabel, getAllByA11yLabel, getByText } = render(
      <TodoView />
    )

    const createTodoInputField = getByA11yLabel('todo-input')
    const createTodoSubmitButton = getByText('Create Todo')

    fireEvent.changeText(createTodoInputField, 'reminder of something')
    fireEvent.press(createTodoSubmitButton)

    const listOfTodos = getAllByA11yLabel('todo-item')

    expect(listOfTodos).toHaveLength(1)
  })
  it('should remove a todo item from the list of todo items', () => {
    const { getByA11yLabel, queryByText, getByText, getAllByText } = render(
      <TodoView />
    )

    const createTodoInputField = getByA11yLabel('todo-input')
    const createTodoSubmitButton = getByText('Create Todo')

    fireEvent.changeText(createTodoInputField, 'reminder of something')
    fireEvent.press(createTodoSubmitButton)

    const removeTodoButtons = getAllByText('Remove Todo')
    fireEvent.press(removeTodoButtons[0])

    expect(queryByText('reminder of something')).toBeNull()
  })
})
