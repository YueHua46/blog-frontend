import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiTwitterFill } from 'react-icons/ri'
import { BlogCardProps } from '../../components/BlogCard/types'

export const blogCards: BlogCardProps[] = [
  {
    tags: ['React', 'TypeScript'],
    title: '如何在 React 中使用 TypeScript',
    subTitle: '学习如何在 React 中使用 TypeScript',
    createTile: '2022-01-01',
    views: 100,
    comments: 10,
    likes: 20,
    stars: 30,
    bgImg: 'https://picsum.photos/800/400?random=1',
  },
  {
    tags: ['JavaScript'],
    title: '你可能不知道的 10 个 JavaScript 技巧',
    subTitle: '学习 10 个提升编码技巧的 JavaScript 小技巧',
    createTile: '2022-01-02',
    views: 200,
    comments: 20,
    likes: 40,
    stars: 50,
    bgImg: 'https://picsum.photos/800/400?random=2',
  },
  {
    tags: ['React', 'CSS'],
    title: '如何使用 CSS Grid 和 Flexbox 创建响应式布局',
    subTitle: '学习如何使用 CSS Grid 和 Flexbox 创建响应式布局',
    createTile: '2022-01-03',
    views: 300,
    comments: 30,
    likes: 60,
    stars: 70,
    bgImg: 'https://picsum.photos/800/400?random=3',
  },
  {
    tags: ['React', 'NextJs'],
    title: '如何使用 Next.js 构建服务器渲染的 React 应用',
    subTitle: '学习如何使用 Next.js 构建服务器渲染的 React 应用',
    createTile: '2022-01-04',
    views: 400,
    comments: 40,
    likes: 80,
    stars: 90,
    bgImg: 'https://picsum.photos/800/400?random=4',
  },
  {
    tags: ['React', 'Redux'],
    title: '如何在 React 中使用 Redux',
    subTitle: '学习如何在 React 中使用 Redux',
    createTile: '2022-01-05',
    views: 500,
    comments: 50,
    likes: 100,
    stars: 120,
    bgImg: 'https://picsum.photos/800/400?random=5',
  },
]

// 个人社交链接
export const contact: Contact = {
  name: '约翰·史密斯',
  bgImg: 'https://picsum.photos/800/400?random=6',
  links: [
    {
      icon: <FaGithub />,
      link: 'https://gitee.com/johnsmith',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://www.zhipin.com/job_detail/xxxxxxxxx.html',
    },
    {
      icon: <RiTwitterFill />,
      link: 'https://weibo.com/johnsmith',
    },
  ],
}

// 点赞数据
export const likes = {
  title: 'Do You Like Me？',
  likes: 9999,
}

// 评论数据
interface IComment {
  id: number
  name: string
  avatar: string
  content: string
  createTile: string
  likes: number
  replies?: IComment[]
}

export const comments: IComment[] = [
  {
    id: 1,
    name: '约翰·史密斯',
    avatar: 'https://picsum.photos/800/400?random=7',
    content: '这是一条评论',
    createTile: '2022-01-01',
    likes: 10,
    replies: [
      {
        id: 2,
        name: '约翰·史密斯',
        avatar: 'https://picsum.photos/800/400?random=8',
        content: '这是一条回复',
        createTile: '2022-01-01',
        likes: 10,
      },
    ],
  },
  {
    id: 3,
    name: '约翰·史密斯',
    avatar: 'https://picsum.photos/800/400?random=9',
    content: '这是一条评论',
    createTile: '2022-01-01',
    likes: 10,
    replies: [
      {
        id: 4,
        name: '约翰·史密斯',
        avatar: 'https://picsum.photos/800/400?random=10',
        content: '这是一条回复',
        createTile: '2022-01-01',
        likes: 10,
      },
    ],
  },
  {
    id: 5,
    name: '约翰·史密斯',
    avatar: 'https://picsum.photos/800/400?random=11',
    content: '这是一条评论',
    createTile: '2022-01-01',
    likes: 10,
    replies: [
      {
        id: 6,
        name: '约翰·史密斯',
        avatar: 'https://picsum.photos/800/400?random=12',
        content: '这是一条回复',
        createTile: '2022-01-01',
        likes: 10,
      },
    ],
  },
]
