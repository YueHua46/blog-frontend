import './App.scss'
import { Outlet } from 'react-router-dom'
import YHBackground from './views/YHBackground/YHBackground'
import { useIdle } from 'react-use'
import { useEffect } from 'react'
import { useTitle, useFavicon } from './hooks'

function App() {
  // 判断用户是否处于空闲状态
  const isIdle = useIdle(3e3)
  useEffect(() => {
    if (isIdle) {
      useTitle('你去哪里了？')
      useFavicon('/idle.ico')
    } else {
      useTitle('欢迎回来！')
      useFavicon('/active.ico')
    }
  }, [isIdle])

  return (
    <>
      <YHBackground />
      <div className={`p-10`}>
        <Outlet />
      </div>
    </>
  )
}

export default App
