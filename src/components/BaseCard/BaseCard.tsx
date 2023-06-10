import Styles from './BaseCard.module.scss'
import { twMerge } from 'tailwind-merge'

export default function BaseCard({
  children,
  isPadding = true,
  isOverflow = true,
  isHover = false,
  className = '',
}: BaseCardProps) {
  // 获取class列表
  function getClassList() {
    const classList = [Styles['base-card']]
    if (isPadding) classList.push('p-4')
    if (isOverflow) classList.push('overflow-hidden')
    if (isHover)
      classList.push(
        'transition duration-300 ease-in-out hover:shadow-md hover:scale-105 hover:cursor-pointer hover:duration-300'
      )
    if (className) classList.push(className)
    // 合并class并返回class列表
    return twMerge(classList)
  }
  return <div className={getClassList()}>{children}</div>
}
