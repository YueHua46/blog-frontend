import './App.scss'
import { Outlet } from 'react-router-dom'
import YHBackground from './views/YHBackground/YHBackground'

function App() {
  return (
    <>
      <YHBackground />
      <Outlet />
    </>
  )
}

export default App
