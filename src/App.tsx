import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router'
import './App.css'
function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
