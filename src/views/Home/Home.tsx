import BlogCard from '../../components/BlogCard/BlogCard'
import Styles from './Home.module.scss'
import { blogCards as blogData } from '../../data'
import ScrollToTop from 'react-scroll-to-top'
import Contact from '../Contact/Contact'
import YHContainer from '../../components/YHContainer/YHContainer'
import { usePromise } from 'react-use'
import { useEffect, useState } from 'react'
import { BlogCardProps } from '../../components/BlogCard/types'

export default function Home() {
  const mounted = usePromise()
  const [blogCards, setBlogCards] = useState<BlogCardProps[]>([])

  useEffect(() => {
    // 模拟异步请求数据
    ;(async () => {
      const value = await mounted<BlogCardProps[]>(
        new Promise(resolve => {
          setTimeout(() => {
            resolve(blogData)
          }, 1000)
        })
      )
      setBlogCards(value)
    })()
  }, [])
  return (
    <YHContainer>
      <div className={`${Styles['blog-card']}`}>
        {/* 左边博客集 */}
        <div className={`${Styles['blog-card-list']} ${Styles['blog-card']}`}>
          {blogCards.map((blogCard, idx) => {
            return <BlogCard key={idx} {...blogCard} />
          })}
        </div>
        {/* 右边卡片集*/}
        <div
          className={`${Styles['blog-card-contact']} ${Styles['blog-card']}`}>
          {/* 联系卡片集 */}
          <Contact />
          {/* 回到顶部组件 */}
          <ScrollToTop className="flex justify-center items-center" />
        </div>
      </div>
    </YHContainer>
  )
}
