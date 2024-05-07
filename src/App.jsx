import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomNavbar from './components/CustomNavbar'
import CustomFooter from './components/CustomFooter'
import LoginPage from './components/LoginPage'
import NotFound from './components/NotFound'
import RegisterPage from './components/RegisterPage'
function App() {
  return (
    <>
      <BrowserRouter>
        <body className="pageBody">
          <header>
            <CustomNavbar />
          </header>
          <Routes>
            <Route element={<LoginPage />} path="login" />
            <Route element={<RegisterPage />} path="register" />
            <Route element={<NotFound />} path="*" />
          </Routes>
          <footer>
            <CustomFooter />
          </footer>
        </body>
      </BrowserRouter>
    </>
  )
}

export default App
