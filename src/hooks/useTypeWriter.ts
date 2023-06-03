import { useLayoutEffect } from "react"
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin' // 引入 Tex

gsap.registerPlugin(TextPlugin) // 注册 Text Plugin

interface TypeWriterProps {
  textRef: React.MutableRefObject<null>
  auther: string
}

// 打字机文字效果
export default ({
  textRef,
  auther
}: TypeWriterProps) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        duration: 2,
        text: {
          value: `Hello，${auther}`,
          speed: 0.5, // 延长每个字符之间的时间
        },
      })
    })

    return () => ctx.revert()
  }, [])
}
