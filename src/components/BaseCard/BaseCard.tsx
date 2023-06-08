import Styles from './BaseCard.module.scss'

export default function BaseCard({
  children,
  isPadding = true,
  isOverflow = true,
}: BaseCardProps) {
  // 获取class列表
  function getClassList() {
    const classList = [Styles['base-card']]
    if (isPadding) classList.push('p-4')
    if (isOverflow) classList.push('overflow-hidden')
    return classList.join(' ')
  }

  return <div className={getClassList()}>{children}</div>
}
