import { useLoaderData } from 'react-router-dom'
import Styles from './BlogDetailed.module.scss'
import { BlogCardProps } from '../../components/BlogCard/types'
import MDEditor from '@uiw/react-md-editor'
import Contact from '../Contact/Contact'
import { useEffect, useState } from 'react'
import BaseCard from '../../components/BaseCard/BaseCard'
import { IMessage } from '../Message/types'
import YHMessage from '../../components/YHMessage/YHMessage'
import { ClockIcon } from '@heroicons/react/24/outline'
import { EyeIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/outline'

export default function BlogDetailed() {
  const data = useLoaderData() as BlogCardProps
  const [content, setContent] = useState('')
  import('./template.md').then(res => {
    console.log('res', res)
    fetch(res.default)
      .then(response => response.text())
      .then(text => {
        setContent(text)
      })
  })
  // 消息列表
  const [messageList, setMessageList] = useState<IMessage[]>([
    {
      name: '小明',
      // 在线头像
      avatar: 'https://api.multiavatar.com/1.png',
      // 时间
      date: '2021-08-01 16:00:00',
      content: '114514',
    },
    {
      name: '小红',
      avatar: 'https://api.multiavatar.com/2.png',
      date: '2021-08-02 16:00:00',
      content: `# hello world \n 123`,
    },
  ])
  // 提交留言
  function submitMdValue(v: string | undefined) {
    console.log(v)
    setMessageList([
      ...messageList,
      {
        name: 'Larry',
        // 在线头像
        avatar: `https://api.multiavatar.com/${messageList.length}.png`,
        date: '2021-08-12 16:00:00',
        content: v ?? '',
      },
    ])
  }
  // 初始化
  useEffect(() => {
    setMessageList([...messageList])
  }, [])

  return (
    <div
      className={`${Styles['blog-detailed-container']} container flex gap-8 max-md:flex-col`}>
      <div className={`${Styles['blog-detailed-content']} flex-[6.5]`}>
        {/* 固定悬浮标签 */}
        <div
          className={`${Styles['blog-detailed-fixed']} absolute top-10 left-[-15px] max-lg:hidden`}>
          前端
        </div>
        <BaseCard>
          {/* 博客头部信息 */}
          <div
            className={`${Styles['blog-content-header']} flex flex-col items-center gap-3 mt-8 mb-20`}>
            {/* 博客标题 */}
            <div className="blog-header-title">
              <h1 className="text-3xl font-bold text-center">{data.title}</h1>
            </div>
            {/* 博客数据 */}
            <div className="blog-header-data flex gap-3 flex-wrap">
              {/* 创建时间 */}
              <div className="blog-header-createTime flex items-center">
                <ClockIcon className="h-5 w-5 text-gray-800" />
                <span className="text-gray-800">{data.createTime}</span>
              </div>
              {/* 围观次数 */}
              <div className="blog-header-views flex items-center">
                <EyeIcon className="h-5 w-5 text-gray-800" />
                <span className="text-gray-800">{data.views}次围观</span>
              </div>
              {/* 评论次数 */}
              <div className="blog-header-comments flex items-center">
                <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-800" />
                <span className="text-gray-800">{data.comments}条评论</span>
              </div>
              {/* 点赞次数 */}
              <div className="blog-header-likes flex items-center">
                <HeartIcon className="h-5 w-5 text-gray-800" />
                <span className="text-gray-800">{data.likes}个赞</span>
              </div>
              {/* 收藏次数 */}
              <div className="blog-header-collections flex items-center">
                <StarIcon className="h-5 w-5 text-gray-800" />
                <span className="text-gray-800">{data.stars}次收藏</span>
              </div>
            </div>
          </div>
          {/* 博客内容 */}
          <MDEditor.Markdown source={content} />
          {/* 博客底部区域 */}
          <div className={`${Styles['blog-content-footer']}`}>
            {/* 点赞 */}
            <div className="blog-footer-like">
              <HeartIcon className="h-5 w-5 text-gray-800" />
            </div>
            {/* 收藏 */}
            <div className="blog-footer-star"></div>
          </div>
          {/* 博客评论区 */}
          <YHMessage messageList={messageList} submitMdValue={submitMdValue} />
        </BaseCard>
      </div>
      <div className={`${Styles['blog-detailed-contact']} flex-[3.5]`}>
        <Contact />
      </div>
    </div>
  )
}
