import { BrowserRouter } from 'react-router-dom'
import CustomNavbar from './components/CustomNavbar'
import CustomFooter from './components/CustomFooter'
function App() {
  return (
    <>
      <BrowserRouter>
        <body>
          <header>
            <CustomNavbar />
          </header>

          <footer>
            <CustomFooter />
          </footer>
        </body>
      </BrowserRouter>
    </>
  )
}

export default App
