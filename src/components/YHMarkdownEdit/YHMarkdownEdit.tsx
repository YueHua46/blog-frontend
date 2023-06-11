import { useState } from 'react'
import Styles from './YHMarkdownEdit.module.scss'
import MDEditor, { commands, ICommand } from '@uiw/react-md-editor'

export default function YHMarkdownEdit({
  submitMdValue,
}: {
  submitMdValue: (v: string | undefined) => void
}) {
  const [mdValue, setMdValue] = useState(``)

  // 用于获取MDEditor的实例
  function changeMdValue(v: string | undefined) {
    setMdValue(v ?? '')
  }
  // 用于获取MDEditor的实例
  const help: ICommand = {
    name: 'help',
    keyCommand: 'help',
    buttonProps: {
      'aria-label': '获取Markdown帮助',
      title: '获取Markdown帮助',
    },
    icon: (
      <svg viewBox="0 0 16 16" width="12px" height="12px">
        <path
          d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm.9 13H7v-1.8h1.9V13Zm-.1-3.6v.5H7.1v-.6c.2-2.1 2-1.9 1.9-3.2.1-.7-.3-1.1-1-1.1-.8 0-1.2.7-1.2 1.6H5c0-1.7 1.2-3 2.9-3 2.3 0 3 1.4 3 2.3.1 2.3-1.9 2-2.1 3.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    execute: () => {
      window.open('https://www.markdownguide.org/basic-syntax/', '_blank')
    },
  }

  // 获取清空按钮的样式
  function getClearBtnClass() {
    const normalClass =
      'text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
    return normalClass
  }
  // 获取提交按钮的样式
  function getSubmitBtnClass() {
    const normalClass =
      'select-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
    const disabledClass =
      'select-none text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-center'
    if (mdValue) {
      return normalClass
    } else {
      return disabledClass
    }
  }
  // 清空输入框
  function clearValueHandle() {
    setMdValue('')
  }
  // 提交输入框
  function submitValueHandle() {
    console.log('submitValueHandle')
    submitMdValue(mdValue)
    clearValueHandle()
  }
  return (
    <div className={Styles['markdown-edit-container']}>
      <MDEditor
        value={mdValue}
        onChange={changeMdValue}
        commands={[...commands.getCommands(), help]}
      />

      <div className={Styles['markdown-edit-btns']}>
        <button
          type="button"
          className={getClearBtnClass()}
          onClick={clearValueHandle}>
          清除输入
        </button>
        <button
          type="button"
          className={getSubmitBtnClass()}
          disabled={!mdValue ? true : false}
          onClick={submitValueHandle}>
          发表评论
        </button>
      </div>
    </div>
  )
}
