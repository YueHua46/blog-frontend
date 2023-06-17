import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiTwitterFill } from 'react-icons/ri'
import { BlogCardProps } from '../components/BlogCard/types'
import { IMessage } from '../views/Message/types'

// 博客列表数据
export const blogCards: BlogCardProps[] = [
  {
    id: 1,
    tags: ['React', 'TypeScript'],
    title: '如何在 React 中使用 TypeScript',
    subTitle: '学习如何在 React 中使用 TypeScript',
    createTime: '2022-01-01',
    views: 100,
    comments: 10,
    likes: 20,
    stars: 30,
    bgImg: 'https://picsum.photos/800/400?random=1',
  },
  {
    id: 2,
    tags: ['JavaScript'],
    title: '你可能不知道的 10 个 JavaScript 技巧',
    subTitle: '学习 10 个提升编码技巧的 JavaScript 小技巧',
    createTime: '2022-01-02',
    views: 200,
    comments: 20,
    likes: 40,
    stars: 50,
    bgImg: 'https://picsum.photos/800/400?random=2',
  },
  {
    id: 3,
    tags: ['React', 'CSS'],
    title: '如何使用 CSS Grid 和 Flexbox 创建响应式布局',
    subTitle: '学习如何使用 CSS Grid 和 Flexbox 创建响应式布局',
    createTime: '2022-01-03',
    views: 300,
    comments: 30,
    likes: 60,
    stars: 70,
    bgImg: 'https://picsum.photos/800/400?random=3',
  },
  {
    id: 4,
    tags: ['React', 'NextJs'],
    title: '如何使用 Next.js 构建服务器渲染的 React 应用',
    subTitle: '学习如何使用 Next.js 构建服务器渲染的 React 应用',
    createTime: '2022-01-04',
    views: 400,
    comments: 40,
    likes: 80,
    stars: 90,
    bgImg: 'https://picsum.photos/800/400?random=4',
  },
  {
    id: 5,
    tags: ['React', 'Redux'],
    title: '如何在 React 中使用 Redux',
    subTitle: '学习如何在 React 中使用 Redux',
    createTime: '2022-01-05',
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
  createTime: string
  likes: number
  replies?: IComment[]
}

// 评论数据
export const comments: IComment[] = [
  {
    id: 1,
    name: '约翰·史密斯',
    avatar: 'https://picsum.photos/800/400?random=7',
    content: '这是一条评论',
    createTime: '2022-01-01',
    likes: 10,
    replies: [
      {
        id: 2,
        name: '约翰·史密斯',
        avatar: 'https://picsum.photos/800/400?random=8',
        content: '这是一条回复',
        createTime: '2022-01-01',
        likes: 10,
      },
    ],
  },
  {
    id: 3,
    name: '约翰·史密斯',
    avatar: 'https://picsum.photos/800/400?random=9',
    content: '这是一条评论',
    createTime: '2022-01-01',
    likes: 10,
    replies: [
      {
        id: 4,
        name: '约翰·史密斯',
        avatar: 'https://picsum.photos/800/400?random=10',
        content: '这是一条回复',
        createTime: '2022-01-01',
        likes: 10,
      },
    ],
  },
  {
    id: 5,
    name: '约翰·史密斯',
    avatar: 'https://picsum.photos/800/400?random=11',
    content: '这是一条评论',
    createTime: '2022-01-01',
    likes: 10,
    replies: [
      {
        id: 6,
        name: '约翰·史密斯',
        avatar: 'https://picsum.photos/800/400?random=12',
        content: '这是一条回复',
        createTime: '2022-01-01',
        likes: 10,
      },
    ],
  },
]

// 归档分类
export const archiveClass = [
  {
    classId: 1,
    text: '所有',
    total: 10,
  },
  {
    classId: 2,
    text: '前端',
    total: 10,
  },
  {
    classId: 3,
    text: '后端',
    total: 10,
  },
  {
    classId: 4,
    text: '虚拟机',
    total: 10,
  },
  {
    classId: 5,
    text: '数据库',
    total: 10,
  },
  {
    classId: 6,
    text: '中间件',
    total: 10,
  },
  {
    classId: 7,
    text: '闲言碎语',
    total: 10,
  },
]
// 归档数据
export const archives = [
  {
    year: 2021,
    archiveList: [
      {
        title: '如何在 React 中使用 TypeScript',
        createTime: '01-01',
        link: '/article/1',
      },
      {
        title: '你可能不知道的 10 个 JavaScript 技巧',
        createTime: '01-02',
        link: '/article/2',
      },
      {
        title: '如何使用 CSS Grid 和 Flexbox 创建响应式布局',
        createTime: '01-03',
        link: '/article/3',
      },
      {
        title: '如何使用 Next.js 构建服务器渲染的 React 应用',
        createTime: '01-04',
        link: '/article/4',
      },
      {
        title: '如何在 React 中使用 Redux',
        createTime: '01-05',
        link: '/article/5',
      },
    ],
  },
  {
    year: 2020,
    archiveList: [
      {
        title: '如何在 React 中使用 TypeScript',
        createTime: '01-01',
        link: '/article/6',
      },
      {
        title: '你可能不知道的 10 个 JavaScript 技巧',
        createTime: '01-02',
        link: '/article/7',
      },
      {
        title: '如何使用 CSS Grid 和 Flexbox 创建响应式布局',
        createTime: '01-03',
        link: '/article/8',
      },
      {
        title: '如何使用 Next.js 构建服务器渲染的 React 应用',
        createTime: '01-04',
        link: '/article/9',
      },
      {
        title: '如何在 React 中使用 Redux',
        createTime: '01-05',
        link: '/article/10',
      },
    ],
  },
]

// 留言板数据 ---
export const myMessage = [
  '走过路过不要错过！交流、咨询、吐槽、感叹、勾搭都在这里，尽情畅谈！',
  '欢迎加博主微信进前端学习交流群，不定期会发送学习资料，共同进步哦！',
]
export const messageList: IMessage[] = [
  {
    name: '小明',
    // 在线头像
    avatar: 'https://api.multiavatar.com/1.png',
    // 时间
    date: '2021-08-01 16:00:00',
    content: '122141254',
  },
  {
    name: '小红',
    avatar: 'https://api.multiavatar.com/2.png',
    date: '2021-08-02 16:00:00',
    content: `# hello world \n 123`,
  },
  {
    name: '小刚',
    avatar: 'https://api.multiavatar.com/3.png',
    date: '2021-08-03 16:00:00',
    content: `
    # Hello World
    这是一条测试评论
    \`\`\`tsx
    const a = 1
    const b = 2
    function sum(a: number, b: number) {
      return a + b
    }
    \`\`\`
    ## Just For Fun
    `,
  },
]
