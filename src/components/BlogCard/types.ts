import { LanguageColors } from "../YHTag/types"

export interface BlogCardProps {
  children?: React.ReactNode
  id: number
  tags: (keyof typeof LanguageColors)[]
  title: string
  subTitle: string
  createTime: string
  views: number
  comments: number
  likes: number
  stars: number
  bgImg: string
}

export interface CommonCardProps {
  children: React.ReactNode
}