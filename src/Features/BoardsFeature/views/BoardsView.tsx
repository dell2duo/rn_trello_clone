import React, { useState } from 'react'
import { Modal, View } from 'react-native'
import Text from '../../../Shared/components/Text'
import uuid from 'react-native-uuid'

import { ButtonContainer, Container, Header } from './styles/BoardsViewStyles'
import AddButton from '../../../Shared/components/AddButton'
import CreateBoardComponent from './components/CreateBoardComponent'
import { Board } from '../../../Shared/types/Boards'
import BoardsList from './BoardsList'

const BoardsView: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [newBoardName, setNewBoardName] = useState('')
  const [boards, setBoards] = useState<Board[]>([] as Board[])

  const openModal = () => {
    setModalIsOpen(true)
  }

  const createBoard = () => {
    if (newBoardName === '') return

    const newBoard = {
      name: newBoardName,
      id: uuid.v4().toString()
    }

    setBoards([...boards, newBoard])
    setModalIsOpen(false)
    setNewBoardName('')
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <Container>
      <Header>
        <Text fontSize={24}>My Boards</Text>
      </Header>

      <BoardsList boards={boards} />

      <ButtonContainer>
        <AddButton onPress={openModal} testID="add-board-button" />
      </ButtonContainer>

      <Modal transparent visible={modalIsOpen}>
        <CreateBoardComponent
          value={newBoardName}
          onChangeText={setNewBoardName}
          onPress={createBoard}
          onTapOutside={closeModal}
        />
      </Modal>
    </Container>
  )
}

export default BoardsView
