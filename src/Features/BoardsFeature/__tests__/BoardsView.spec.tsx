import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import BoardsView from '../views/BoardsView'
import { ThemeProvider } from 'styled-components'
import { dark } from '../../../Shared/themes'

describe('BoardsView tests', () => {
  it('should create a new board', () => {
    const { getByTestId, getByA11yLabel, getByText, queryByText } = render(
      <ThemeProvider theme={dark}>
        <BoardsView />
      </ThemeProvider>
    )

    const addButton = getByTestId('add-board-button')
    fireEvent.press(addButton)
    const inputBoardName = getByA11yLabel('new-board-input')
    const createBoardButton = getByText('Create Board')
    fireEvent.changeText(inputBoardName, 'Test Board')
    fireEvent.press(createBoardButton)

    expect(queryByText('Create Board')).toBeNull()
    expect(queryByText('Test Board')).not.toBeNull()
  })
  it('should fail as user try to create a new board with empty name', () => {
    const { getByTestId, getByA11yLabel, getByText, queryByText } = render(
      <ThemeProvider theme={dark}>
        <BoardsView />
      </ThemeProvider>
    )

    const addButton = getByTestId('add-board-button')
    fireEvent.press(addButton)
    const inputBoardName = getByA11yLabel('new-board-input')
    const createBoardButton = getByText('Create Board')
    fireEvent.changeText(inputBoardName, '')
    fireEvent.press(createBoardButton)

    expect(queryByText('Create Board')).not.toBeNull()
  })
})
