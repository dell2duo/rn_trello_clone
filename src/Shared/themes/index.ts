import { DefaultTheme } from 'styled-components/native'

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string
    secondary: string
    tertiary: string
    mainFontColor: string
  }
}

const dark = {
  primary: '#E40066',
  secondary: '#C6C5B9',
  tertiary: '#373737',
  mainFontColor: '#FFF'
}

export { dark }
