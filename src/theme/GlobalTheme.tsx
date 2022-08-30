import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: hsl(217, 54%, 11%);
  }
`

export type TypeTheme = {
  theme: {
    colors: {
      softBlue: string,
      cyan: string,
      mainbg: string,
      cardbg: string,
      line: string,
      white: string
    }
  }
}

const theme = {
  colors: {
    softBlue: 'hsl(215, 51%, 70%)',
    cyan: 'hsl(178, 100%, 50%)',
    mainbg: 'hsl(217, 54%, 11%)',
    cardbg: 'hsl(216, 50%, 16%)',
    line: 'hsl(215, 32%, 27%)',
    white: 'hsl(0, 0%, 100%)'
  }
}

function GlobalThemeProvider({ children }: any) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  )
}

export default GlobalThemeProvider
