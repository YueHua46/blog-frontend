import { LanguageColors } from "../YHTag/types"

export interface BlogCardProps {
  children?: React.ReactNode
  tags: (keyof typeof LanguageColors)[]
  title: string
  subTitle: string
  createTile: string
  views: number
  comments: number
  likes: number
  stars: number
  bgImg: string
}

export interface CommonCardProps {
  children: React.ReactNode
}