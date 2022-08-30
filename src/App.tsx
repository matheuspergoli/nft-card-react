import Card from "./components/Card"
import GlobalThemeProvider from "./theme/GlobalTheme"

function App() {

  return (
    <>
      <GlobalThemeProvider>
        <Card />        
      </GlobalThemeProvider>
    </>
  )
}

export default App
