import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TodoView from './Features/TodoFeature/views/TodoView'
import BoardsView from './Features/BoardsFeature/views/BoardsView'

const Stack = createNativeStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={BoardsView} />
        <Stack.Screen name="Board" component={TodoView} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
