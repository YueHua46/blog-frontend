import './App.scss'
import { Outlet } from 'react-router-dom'
import YHBackground from './views/YHBackground/YHBackground'
import { useIdle } from 'react-use'
import { useEffect } from 'react'
import { setTitle, setFavicon, changeMarkdownMode } from './utils/helpers'

function App() {
  // 判断用户是否处于空闲状态
  const isIdle = useIdle(3e3)
  useEffect(() => {
    if (isIdle) {
      setTitle('你去哪里了？😔')
      setFavicon('/idle.ico')
    } else {
      setTitle('欢迎回来！😊')
      setFavicon('/active.ico')
    }
  }, [isIdle])

  useEffect(() => {
    changeMarkdownMode('light')
  }, [])

  return (
    <>
      <YHBackground />
      <Outlet />
    </>
  )
}

export default App
