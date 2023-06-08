import YHTag from '../YHTag/YHTag'
import Styles from './BlogCard.module.scss'
import {
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  StarIcon,
  EyeIcon,
} from '@heroicons/react/24/outline'
import { BlogCardProps } from './types'

export default function BlogCard({
  children,
  tags,
  comments,
  createTile,
  likes,
  stars,
  subTitle,
  title,
  views,
  bgImg,
}: BlogCardProps) {
  // 统计数据
  const statistics = [
    {
      icon: <CalendarDaysIcon className="h-6 w-6 text-gray-500" />,
      text: createTile,
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-500" />,
      text: comments,
    },
    {
      icon: <HeartIcon className="h-6 w-6 text-gray-500" />,
      text: likes,
    },
    {
      icon: <StarIcon className="h-6 w-6 text-gray-500" />,
      text: stars,
    },
    {
      icon: <EyeIcon className="h-6 w-6 text-gray-500" />,
      text: views,
    },
  ]

  return (
    <div className={`${Styles['common-card']}`}>
      <section
        className={`${Styles['card-content']}`}
        style={{
          backgroundImage: `url(${bgImg})`,
        }}>
        <div className={Styles['content-mask']}>
          {/* tags */}
          <div className={Styles['category']}>
            {tags.map((tag, index) => {
              return <YHTag key={index} language={tag} circle plain />
            })}
          </div>
          <h1 className={Styles['custom-text-ellipsis']}>{title}</h1>
          <p>{subTitle}</p>
          {/* 统计数据 */}
          <ul className={Styles['post-detail-list']}>
            {statistics.map((item, index) => {
              return (
                <li className={Styles['post-detail']} key={index}>
                  {item.icon}
                  <span className={Styles['post-detail-text']}>
                    {item.text}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={Styles.horizontal}></div>
      </section>
    </div>
  )
}
