import YHMarkdownEdit from '../YHMarkdownEdit/YHMarkdownEdit'
import Styles from './YHMessage.module.scss'
import MDEditor from '@uiw/react-md-editor'
import { IYHMessageProps } from './types'

export default function YHMessage({
  messageList,
  children,
  submitMdValue,
}: IYHMessageProps) {
  return (
    <div className={`${Styles['message-content']}`}>
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
                  <span className={`${Styles['message-content-item-name']}`}>
                    {message.name}
                  </span>
                  <span className={`${Styles['message-content-item-date']}`}>
                    {message.date}
                  </span>
                </div>
                <div className={`${Styles['message-content-item-message']}`}>
                  <MDEditor.Markdown source={message.content} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
