import BaseCard from '../../components/BaseCard/BaseCard'
import YHContainer from '../../components/YHContainer/YHContainer'
import { archiveClass, archives } from '../../data'
import Contact from '../Contact/Contact'
import Styles from './Archive.module.scss'

export default function Archive() {
  const toBlogHandle = (link: string) => {
    return () => {
      console.log('link', link)
      // 跳转到指定博客链接
    }
  }
  const toggleClassHandle = (classId: number) => {
    return () => {
      console.log('classId', classId)
      // 切换指定类型的博客
    }
  }
  return (
    <YHContainer>
      <div className={`${Styles['archive-container']}`}>
        {/* 左边归档集 */}
        <div className={`${Styles['archive-content-container']}`}>
          <BaseCard className={`${Styles['archive-content']} p-10`}>
            <h2>归档</h2>
            {/* 归档分类 */}
            <div className={`${Styles['archive-content-class']}`}>
              <h3>分类</h3>
              <ul className={`${Styles['archive-class-list']}`}>
                {archiveClass.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className={`${Styles['archive-class-item']}`}
                      onClick={toggleClassHandle(item.classId)}>
                      <span className={Styles['archive-class-item-type']}>
                        {item.text}
                      </span>
                      <span className={Styles['archive-class-item-total']}>
                        ({item.total})
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
            {/* 博客归档列表 */}
            <div className={`${Styles['archive-content-list']}`}>
              {/* 根据年份遍历数据 */}
              {archives.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className={`${Styles['archive-content-item']}`}>
                    <h3>{item.year}</h3>
                    {/* 具体年份的所有博客列表 */}
                    <ul className={`${Styles['archive-list']}`}>
                      {item.archiveList.map((archive, idx) => {
                        return (
                          <li key={idx} className={`${Styles['archive-item']}`}>
                            <span className={`${Styles['archive-item-date']}`}>
                              {archive.createTile}
                            </span>
                            <span
                              className={`${Styles['archive-item-title']}`}
                              onClick={toBlogHandle(archive.link)}>
                              {archive.title}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </BaseCard>
        </div>

        {/* 右边联系集 */}
        <div className={`${Styles['archive-contact']}`}>
          <Contact />
        </div>
      </div>
    </YHContainer>
  )
}
