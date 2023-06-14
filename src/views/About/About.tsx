import MDEditor from '@uiw/react-md-editor'
import Contact from '../Contact/Contact'
import Styles from './About.module.scss'

export default function About() {
  const message = `
# 关于我
## 个人信息
- 姓名：不许人间见白头
- 学历：本科
- 学校：xxx大学
- 专业：软件工程
- 邮箱：xxx@gmail.com
- 主页：https://xxx.com
- Github：https://github.com/xxx
- 掘金：xxx
- CSDN：xxx
- BILIBILI：xxx
## 技能清单
- 熟悉 Java 编程，熟悉 Java 多线程编程，熟悉 Java 网络编程
- 熟悉 Spring、SpringMVC、SpringBoot、MyBatis 等主流框架
- 熟悉 MySQL、Redis 等数据库
- 熟悉 Zookeeper、Dubbo 等分布式技术
- 熟悉 Kafka、RabbitMQ 等消息中间件
- 熟悉 Nginx、Tomcat 等常用服务器
- 熟悉 Linux 常用命令
- 熟悉 Git、SVN 等版本控制工具
- 熟悉 Docker、Kubernetes 等容器技术
## 项目经历
### 项目一
- 项目描述
- 责任描述
### 项目二
- 项目描述
- 责任描述
## 获奖经历
- 2020 XXX大学校级三等奖学金
`
  return (
    <div className={`${Styles['about-container']} container`}>
      <div className={`${Styles['about-content']} flex-[6.5]`}>
        <MDEditor.Markdown source={message} className="p-8" />
      </div>
      <div className={`${Styles['about-contact']} flex-[3.5]`}>
        <Contact />
      </div>
    </div>
  )
}
