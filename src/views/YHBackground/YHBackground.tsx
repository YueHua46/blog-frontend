import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { NavItem } from './types'
import YHModuleCss from './YHBackground.module.scss'

import { HomeIcon } from '@heroicons/react/24/outline'
import { ArchiveBoxIcon } from '@heroicons/react/24/outline'
import { CurrencyYenIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { IdentificationIcon } from '@heroicons/react/24/outline'
import { BarsArrowUpIcon } from '@heroicons/react/24/outline'
import { BarsArrowDownIcon } from '@heroicons/react/24/outline'

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
      text: '表白墙',
      icon: <CurrencyYenIcon className="h-5 w-5 text-gray-50" />,
      link: '/donate',
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
      icon: <IdentificationIcon className="h-6 w-6 text-gray-50" />,
    },
  ])

  const textRef = useRef(null)
  // 作者名
  const auther = '不许人间见白头'
  // 是否展开
  const [isShow, setIsShow] = useState(false)

  useTypeWriter({ textRef, auther })

  // menu按钮点击事件
  const menuHandle = () => {
    setIsShow(!isShow)
  }

  return (
    <div className={YHModuleCss.container}>
      {/* 头部nav */}
      <div
        className={`${YHModuleCss.nav__container} ${
          isShow ? YHModuleCss.show : ''
        }`}>
        <nav className={YHModuleCss.nav}>
          <ul className={YHModuleCss.ul}>
            {navList.slice(0, navList.length - 1).map((item, index) => {
              return (
                <li key={index} className={`${YHModuleCss.li} text-gray-50`}>
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
          <ul className={YHModuleCss.ul}>
            <li className={`${YHModuleCss.li} text-gray-50`}>
              <IdentificationIcon className="h-6 w-6 text-gray-50" />
              <span>登录</span>
            </li>
          </ul>
          {/* 适应手机尺寸 */}
          <div className={YHModuleCss.mobile__container}>
            <button
              className={YHModuleCss.mobile__menu__btn}
              onClick={menuHandle}>
              {isShow ? (
                <BarsArrowDownIcon className=" text-gray-50 ml-4" />
              ) : (
                <BarsArrowUpIcon className=" text-gray-50 ml-4" />
              )}
            </button>
            <ul className={YHModuleCss.mobile__ul}>
              {navList.map((item, index) => {
                return (
                  <li
                    className={`${YHModuleCss.mobile__li} text-gray-50`}
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

      {/* 主要content */}
      <div className={YHModuleCss.content}>
        <h1 ref={textRef}></h1>
      </div>
    </div>
  )
}
