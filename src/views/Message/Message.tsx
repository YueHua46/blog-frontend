import BaseCard from '../../components/BaseCard/BaseCard'
import Contact from '../Contact/Contact'
import Styles from './Message.module.scss'
import { myMessage } from '../../data'
import YHMarkdownEdit from '../../components/YHMarkdownEdit/YHMarkdownEdit'
import MDEditor from '@uiw/react-md-editor'
import { useEffect, useState } from 'react'

export default function Message() {
  const [messageList, setMessageList] = useState<Message[]>([
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
          <h2>发表留言</h2>
          <div className={`${Styles['message-content-publish']}`}>
            <YHMarkdownEdit submitMdValue={submitMdValue} />
          </div>
          <div className={`${Styles['message-content-list']}`}>
            {/* 留言统计 */}
            <div className={`${Styles['message-content-statistics']}`}>
              <span
                className={`${Styles['message-content-statistics-item']} text-xl`}>
                共收录{messageList.length}条留言
              </span>
            </div>
            {/* 留言列表 */}
            {messageList.map((message, idx) => {
              return (
                <div key={idx} className={`${Styles['message-content-item']}`}>
                  <div className={`${Styles['message-content-item-avatar']}`}>
                    <img src={message.avatar} alt="" />
                  </div>
                  <div className={`${Styles['message-content-item-content']}`}>
                    <div className={`${Styles['message-content-item-info']}`}>
                      <span
                        className={`${Styles['message-content-item-name']}`}>
                        {message.name}
                      </span>
                      <span
                        className={`${Styles['message-content-item-date']}`}>
                        {message.date}
                      </span>
                    </div>
                    <div
                      className={`${Styles['message-content-item-message']}`}>
                      <MDEditor.Markdown source={message.content} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </BaseCard>
      </div>
      {/* 右侧联系板块 */}
      <div className={`${Styles['message-contact']}`}>
        <Contact />
      </div>
    </div>
  )
}
