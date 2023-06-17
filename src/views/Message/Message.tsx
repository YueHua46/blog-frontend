import BaseCard from '../../components/BaseCard/BaseCard'
import Contact from '../Contact/Contact'
import Styles from './Message.module.scss'
import { myMessage } from '../../data'
import YHMessage from '../../components/YHMessage/YHMessage'
import { useEffect, useState } from 'react'
import { IMessage } from './types'

export default function Message() {
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
    <div className={`${Styles['message-container']} container mt-20`}>
      {/* 左侧留言版块 */}
      <div className={`${Styles['message-content']}`}>
        {/* 个人留言 */}
        <BaseCard className={`${Styles['message-my-message']}`}>
          <h2>留言板</h2>
          <ul className={`${Styles['message-my-list']}`}>
            {myMessage.map((message, idx) => {
              return (
                <li key={idx} className={`${Styles['message-my-item']}`}>
                  {message}
                </li>
              )
            })}
          </ul>
        </BaseCard>
        {/* 留言列表 */}
        <BaseCard className={`${Styles['message-content-card']}`}>
          <YHMessage messageList={messageList} submitMdValue={submitMdValue} />
        </BaseCard>
      </div>
      {/* 右侧联系板块 */}
      <div className={`${Styles['message-contact']}`}>
        <Contact />
      </div>
    </div>
  )
}
