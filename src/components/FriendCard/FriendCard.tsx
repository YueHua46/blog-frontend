import Styles from './FriendCard.module.scss'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default function FriendCard({ friend }: IFriendCardProps) {
  function toFriendDetail() {
    window.open(friend.link, '_blank')
  }
  return (
    <div className={`${Styles.card}`}>
      <div className={`${Styles.additional}`}>
        <div className={`${Styles['user-card']}`}>
          <div className={`${Styles.level} ${Styles.center}`}>frontend</div>
          <div className={`${Styles.points} ${Styles.center}`}>friend</div>
          {/* 头像 */}
          <img src={friend.avatar} className={`${Styles.center}`} />
        </div>
      </div>
      <div className={`${Styles.general}`}>
        <h1>{friend.name}</h1>
        <p>{friend.description}</p>
        <div className={`${Styles.more} ${Styles['my-button']}`}>
          <PaperAirplaneIcon className="h-6 w-6 text-gray-50" />
          <span onClick={toFriendDetail}>
            TO {friend.name.toUpperCase()} BLOG
          </span>
        </div>
      </div>
    </div>
  )
}
