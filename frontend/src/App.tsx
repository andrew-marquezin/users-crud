import { Route, Routes } from 'react-router'
import './App.css'
import UserForm from './pages/UserForm'
import Home from './pages/Home'
import UsersTable from './components/UsersTable'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/userForm" element={<UserForm />} />
        <Route path="/usersTable" element={<UsersTable />} />
      </Route>
    </Routes>
  )
}

export default App
