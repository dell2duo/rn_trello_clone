import React from 'react'
import { View } from 'react-native'
import Text from '../../../Shared/components/Text'
import { Board } from '../../../Shared/types/Boards'
import { BoardCard, Container } from './styles/BoardsListStyles'

type BoardsListType = {
  boards: Board[]
}

const BoardsList: React.FC<BoardsListType> = ({ boards }) => {
  return (
    <Container>
      {boards.map(board => (
        <BoardCard activeOpacity={0.8} key={board.id}>
          <Text fontSize={24}>{board.name}</Text>
        </BoardCard>
      ))}
    </Container>
  )
}

export default BoardsList
