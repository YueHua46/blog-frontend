import BaseCard from '../../components/BaseCard/BaseCard'
import FriendCard from '../../components/FriendCard/FriendCard'
import Contact from '../Contact/Contact'
import Styles from './Friends.module.scss'

export default function Friends() {
  const friends = [
    {
      id: 1,
      name: 'Yue Hua',
      avatar: 'https://s1.ax1x.com/2023/01/28/pSa9BDO.png',
      description: '大三在读，前端开发学习者',
      link: 'https://yuehua46.github.io',
    },
    {
      id: 2,
      name: 'Yue Hua',
      avatar: 'https://s1.ax1x.com/2023/01/28/pSa9BDO.png',
      description: '大三在读，前端开发学习者',
      link: 'https://yuehua46.github.io',
    },
    {
      id: 3,
      name: 'Yue Hua',
      avatar: 'https://s1.ax1x.com/2023/01/28/pSa9BDO.png',
      description: '大三在读，前端开发学习者',
      link: 'https://yuehua46.github.io',
    },
  ]
  return (
    <div className={`${Styles['friends-container']} flex gap-8`}>
      <div className={`flex-[6.5]`}>
        <BaseCard className={`${Styles['friends-content']}`}>
          <h2 className="font-bold text-xl text-gray-800">友链列表</h2>
          <div className={`${Styles['friends-list']}`}>
            {friends.map((friend, idx) => {
              return <FriendCard key={idx} friend={friend} />
            })}
          </div>
        </BaseCard>
      </div>
      <div className={`${Styles['friends-contact']} flex-[3.5]`}>
        <Contact />
      </div>
    </div>
  )
}
