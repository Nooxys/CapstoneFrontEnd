import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomNavbar from './components/CustomNavbar'
import CustomFooter from './components/CustomFooter'
import LoginPage from './components/LoginPage'
import NotFound from './components/NotFound'
import RegisterPage from './components/RegisterPage'
import Homepage from './components/Homepage'
import AboutUs from './components/AboutUS'
import Contact from './components/Contact'
import Profile from './components/Profile'
import ChangePassword from './components/ChangePassword'
import Subscriptions from './components/Subscriptions'
import Trainers from './components/Trainers'
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
              <Route element={<Profile />} path="profile" />
              <Route element={<Subscriptions />} path="subscriptions" />
              <Route element={<ChangePassword />} path="password" />
              <Route element={<Trainers />} path="trainers" />
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
