import BlogCard from '../../components/BlogCard/BlogCard'
import Styles from './Home.module.scss'
import { blogCards } from '../../data'
import ScrollToTop from 'react-scroll-to-top'
import Contact from '../Contact/Contact'
import YHContainer from '../../components/YHContainer/YHContainer'

export default function Home() {
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
