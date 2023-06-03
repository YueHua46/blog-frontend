import { ReactElement } from "react"

export interface NavItem {
  text: string
  icon: ReactElement
  link?: string
}