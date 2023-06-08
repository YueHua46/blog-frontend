export interface YHTagProps {
  children?: React.ReactNode
  // 语言颜色集
  language: keyof typeof LanguageColors
  // 是否为圆形
  circle?: boolean
  size?: 'small' | 'normal' | 'large'
  // 是否为空心
  plain?: boolean
  // 自定义主题色
  color?: string
}

export enum LanguageColors {
  JavaScript = '#f7df1e',
  TypeScript = '#007acc',
  Java = '#b07219',
  Python = '#3572A5',
  PHP = '#4F5D95',
  Ruby = '#701516',
  CSharp = '#178600',
  Swift = '#ffac45',
  Kotlin = '#F18E33',
  Go = '#00ADD8',
  C = '#A8B9CC',
  CPlusPlus = '#6295CB',
  Rust = '#dea584',
  Lua = '#fa1fa1',
  Perl = '#39457E',
  Haskell = '#5e5086',
  Scala = '#c22d40',
  Dart = '#0175c2',
  R = '#1A73E8',
  Swift_Plus_Plus = '#ffac45',
  Vue = '#41B883',
  React = '#61dafb',
  Angular = '#DD0031',
  Svelte = '#ff3e00',
  Flutter = '#02569B',
  Electron = '#47848F',
  Nodejs = '#026e00',
  CSS = '#563d7c',
  HTML = '#e34c26',
  Shell = '#89e051',
  Docker = '#384d54',
  NextJs = '#000000',
  NuxtJs = '#00C58E',
  NestJs = '#ea2845',
  Deno = '#000000',
  Redux = '#764abc',
}