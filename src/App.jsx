import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomNavbar from './components/CustomNavbar'
import CustomFooter from './components/CustomFooter'
import LoginPage from './components/LoginPage'
import NotFound from './components/NotFound'
import RegisterPage from './components/RegisterPage'
import Homepage from './components/Homepage'
import AboutUs from './components/AboutUS'
import Contact from './components/Contact'
function App() {
  return (
    <>
      <BrowserRouter>
        <main className="flex-grow-1">
          <body className="pageBody">
            <header>
              <CustomNavbar />
            </header>
            <Routes>
              <Route element={<Homepage />} path="/" />
              <Route element={<LoginPage />} path="login" />
              <Route element={<RegisterPage />} path="register" />
              <Route element={<AboutUs />} path="about" />
              <Route element={<Contact />} path="contacts" />
              <Route element={<NotFound />} path="*" />
            </Routes>
            <footer>
              <CustomFooter />
            </footer>
          </body>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
