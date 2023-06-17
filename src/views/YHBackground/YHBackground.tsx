import { useEffect, useRef, useState } from 'react'
import { NavItem } from './types'
import YHModuleCss from './YHBackground.module.scss'

import { HomeIcon } from '@heroicons/react/24/outline'
import { ArchiveBoxIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { IdentificationIcon } from '@heroicons/react/24/outline'
import { BarsArrowUpIcon } from '@heroicons/react/24/outline'
import { BarsArrowDownIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

import avatar from '../../assets/images/avatar.png'

import { NavLink } from 'react-router-dom'

import useTypeWriter from '../../hooks/useTypeWriter'

export default function YHBackground() {
  const [navList, setNavList] = useState<NavItem[]>([
    {
      text: '首页',
      icon: <HomeIcon className="h-5 w-5 text-gray-50" />,
      link: '/',
    },
    {
      text: '归档',
      icon: <ArchiveBoxIcon className="h-5 w-5 text-gray-50" />,
      link: '/archive',
    },
    {
      text: '留言板',
      icon: <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-50" />,
      link: '/message',
    },
    {
      text: '伙伴',
      icon: <UserGroupIcon className="h-5 w-5 text-gray-50" />,
      link: '/friends',
    },
    {
      text: '关于',
      icon: <SparklesIcon className="h-5 w-5 text-gray-50" />,
      link: '/about',
    },
    {
      text: '登录',
      icon: <IdentificationIcon className="h-5 w-5 text-gray-50" />,
    },
  ])
  const textRef = useRef(null)
  // 作者名
  const auther = '不许人间见白头'
  // 是否展开
  const [isShow, setIsShow] = useState(false)

  // 监听窗口大小
  useEffect(() => {
    // 如果窗口宽度大于768px，就不展开
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsShow(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize() // 初始化
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 打字机效果
  useTypeWriter({ textRef, auther })

  // menu按钮点击事件
  const menuHandle = () => {
    setIsShow(!isShow)
  }

  return (
    <div className={`${YHModuleCss['custom-container']} items-center mb-32`}>
      {/* 背景 */}
      <section className={YHModuleCss.wrapper}>
        <div id={YHModuleCss['#stars']}></div>
        <div id={YHModuleCss['#stars2']}></div>
        <div id={YHModuleCss['#stars3']}></div>
        {/* 标题大字 */}
        <div className={YHModuleCss.content}>
          <h1 ref={textRef}></h1>
        </div>
      </section>

      {/* 头部nav */}
      <div
        className={`${YHModuleCss['nav-container']} ${
          isShow ? YHModuleCss.show : ''
        }`}>
        <nav
          className={`${YHModuleCss.nav} container h-full flex justify-between items-center select-none xl:max-w-7xl`}>
          <ul className={`${YHModuleCss['nav-list']}`}>
            {navList.slice(0, navList.length - 1).map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${YHModuleCss['nav-item']} text-gray-50`}>
                  <NavLink
                    to={item.link ?? ''}
                    className={({ isActive, isPending }) =>
                      isActive ? YHModuleCss.active : isPending ? 'pending' : ''
                    }>
                    {item.icon}
                    <span>{item.text}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
          {/* 登录搜索 */}
          <ul className={YHModuleCss['nav-list']}>
            <li className={`${YHModuleCss['nav-item']} text-gray-50`}>
              <IdentificationIcon className="h-6 w-6 text-gray-50" />
              <span>登录</span>
            </li>
          </ul>
          {/* 适应手机尺寸 */}
          <div className={YHModuleCss['mobile-container']}>
            <button
              className={YHModuleCss['mobile-menu-btn']}
              onClick={menuHandle}>
              {isShow ? (
                <BarsArrowDownIcon className=" text-gray-50 ml-4" />
              ) : (
                <BarsArrowUpIcon className=" text-gray-50 ml-4" />
              )}
            </button>
            <ul className={YHModuleCss['mobile-nav-list']}>
              {navList.map((item, index) => {
                return (
                  <li
                    className={`${YHModuleCss['mobile-nav-item']} text-gray-50`}
                    key={index}>
                    {item.link ? (
                      <NavLink
                        to={item.link}
                        className={({ isActive, isPending }) =>
                          isActive
                            ? YHModuleCss.active
                            : isPending
                            ? 'pending'
                            : ''
                        }>
                        {item.icon}
                        <span>{item.text}</span>
                      </NavLink>
                    ) : (
                      <div>
                        {item.icon}
                        <span>{item.text}</span>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </div>

      {/* 个人介绍 */}
      <div
        className={`${YHModuleCss['user-info']} flex justify-center items-center py-10 text-gray-50 bg-slate-300 bg-opacity-60 rounded-lg w-8/12 absolute -bottom-24`}>
        <div className="flex flex-col justify-center items-center">
          <img
            src={avatar}
            alt="头像"
            className={`w-20 h-20 border-gray-500 rounded-full`}
          />
          <h1 className="text-blue-500 font-bold text-2xl font-sans">
            不许人间见白头
          </h1>
          <p className="text-sm text-gray-600">后端开发工程师</p>
        </div>
      </div>
    </div>
  )
}
