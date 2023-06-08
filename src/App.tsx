import './App.scss'
import { Outlet } from 'react-router-dom'
import YHBackground from './views/YHBackground/YHBackground'

function App() {
  return (
    <>
      <YHBackground />
      <div className={`bg-gray-300 p-10`}>
        <Outlet />
      </div>
    </>
  )
}

export default App
