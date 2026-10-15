import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import { Outlet } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'
import { signOut } from './utils/auth'

function App() {
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut()
    void navigate({ to: '/login' })
  }

  return (
    <>
      <Header onLogout={handleLogout} />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
