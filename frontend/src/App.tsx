import { Route, Routes } from 'react-router'
import './App.css'
import UserForm from './pages/UserForm'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userForm" element={<UserForm />} />
    </Routes>
  )
}

export default App
