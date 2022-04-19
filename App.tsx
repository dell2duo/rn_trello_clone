import React from 'react'
import { ThemeProvider } from 'styled-components/native'
import Routes from './src/routes'
import { dark } from './src/Shared/themes'

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
