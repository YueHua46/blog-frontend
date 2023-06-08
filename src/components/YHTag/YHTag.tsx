import Styles from './YHTag.module.scss'
import { LanguageColors, YHTagProps } from './types'

export default function YHTag({
  children,
  language,
  circle,
  plain,
  size,
  color,
}: YHTagProps) {
  // 获取class
  function getClass() {
    const baseClass = Styles['category-text']
    const circleClass = Styles['circle']
    const plainClass = Styles['plain']
    const sizeClass = Styles[size ?? 'normal']
    return `${baseClass} ${circle ? circleClass : ''} ${
      plain ? plainClass : ''
    } ${sizeClass}`
  }
  // 获取style
  function getStyle() {
    // 如果没有自定义颜色，style为默认主题
    if (!color)
      return {
        backgroundColor: LanguageColors[language] ?? '#409eff',
        borderColor: LanguageColors[language] ?? '#409eff',
      }
    // 如果有自定义颜色，且不是plain模式，则正常设置bgColor和borderColor
    if (color && !plain) {
      return {
        backgroundColor: color,
        borderColor: color,
      }
    } else {
      // 如果有自定义颜色，且是plain模式，则设置color和borderColor，但不设置bgColor
      return {
        color: color,
        borderColor: color,
      }
    }
  }
  return (
    <span className={getClass()} style={getStyle()}>
      {language}
    </span>
  )
}
