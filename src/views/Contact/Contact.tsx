import BaseCard from '../../components/BaseCard/BaseCard'
import Styles from './Contact.module.scss'
import { contact, comments, likes, blogCards } from '../../data'
import { useMemo } from 'react'
import heart from '../../assets/heart.svg'
import { FireIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  // 社交列表1
  const links1 = useMemo(() => {
    return contact.links.slice(0, Math.floor(contact.links.length / 2))
  }, [contact.links])
  // 社交列表2
  const links2 = useMemo(() => {
    return contact.links.slice(Math.floor(contact.links.length / 2))
  }, [contact.links])

  return (
    <div className={`${Styles['contact-container']}`}>
      {/* 联系人列表 */}
      <BaseCard isPadding={false}>
        <div className={Styles['contact']}>
          <div className={Styles['contact-bg']}>
            <img src={contact.bgImg} alt="" />
          </div>
          <h3 className={`${Styles['contact-name']} text-center`}>
            {contact.name}
          </h3>
          <article className={Styles['contact-list']}>
            <ul className={Styles['contact-links']}>
              {links1.map((link, idx) => {
                return (
                  <li className={Styles['contact-link']} key={idx}>
                    {link.icon}
                  </li>
                )
              })}
            </ul>
            <ul className={Styles['contact-links']}>
              {links2.map((link, idx) => {
                return (
                  <li className={Styles['contact-link']} key={idx}>
                    {link.icon}
                  </li>
                )
              })}
            </ul>
          </article>
        </div>
      </BaseCard>
      {/* 点赞数据 */}
      <BaseCard>
        <div className={Styles['likes']}>
          <h3 className={Styles['likes-title']}>{likes.title}</h3>
          <div className={Styles['likes-content']}>
            <div className={Styles['likes-heart']}>
              <img src={heart} alt="" />
            </div>
            <div className={Styles['likes-like-num']}>{likes.likes}</div>
          </div>
        </div>
      </BaseCard>
      {/* 评论列表 */}
      <BaseCard isOverflow={false}>
        <div className={Styles['comments']}>
          <h3 className={Styles['comments-title']}>最新评论</h3>
          <div className={Styles['comments-list']}>
            {comments.map((comment, idx) => {
              return (
                <div className={Styles['comments-item']} key={idx}>
                  {/* 头像 */}
                  <div className={Styles['comments-item-avatar']}>
                    <img src={comment.avatar} alt="" />
                  </div>
                  {/* 评论主体 */}
                  <div className={Styles['comments-item-content']}>
                    <div className={Styles['comments-item-content-name']}>
                      {comment.name}
                    </div>
                    <div className={Styles['comments-item-content-text']}>
                      {comment.content}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </BaseCard>
      {/* 博客热度 */}
      <BaseCard isOverflow={false}>
        <div className={Styles['hot']}>
          <h3 className={Styles['hot-title']}>博客热度</h3>
          <div className={Styles['hot-list']}>
            {blogCards.map((blogCard, idx) => {
              return (
                <div className={Styles['hot-item']} key={idx}>
                  <div className={Styles['hot-item-title']}>
                    {blogCard.title}
                  </div>
                  <div className={Styles['hot-item-views']}>
                    <FireIcon className="h-6 w-6 text-gray-500" />
                    <span className="text-gray-500">
                      {blogCard.views}次围观
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </BaseCard>
    </div>
  )
}
