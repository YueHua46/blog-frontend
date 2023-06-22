import bgImg from '../../assets/images/login_bg.png'
import iphoneImg from '../../assets/images/iphone.png'
import emailImg from '../../assets/images/email.png'
import React, { useState } from 'react'

export default function Login() {
  // 登陆状态
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginTel, setLoginTel] = useState('')
  const [loginCode, setLoginCode] = useState('')
  // 当前登陆模式（邮箱或手机号登陆）
  enum LoginMode {
    emailMode = 'EmailMode',
    telMode = 'TelMode',
  }
  // 默认模式是email登陆
  const [loginMode, setLoginMode] = useState(LoginMode.emailMode)
  // 登陆模式切换
  function loginModeChange() {
    if (loginMode === LoginMode.emailMode) setLoginMode(LoginMode.telMode)
    if (loginMode === LoginMode.telMode) setLoginMode(LoginMode.emailMode)
  }

  // 邮箱value change事件
  function emailChange(v: React.FormEvent<HTMLInputElement>) {
    const value = v.currentTarget.value
    setLoginEmail(value)
  }
  // 手机号value change事件
  function telChange(v: React.FormEvent<HTMLInputElement>) {
    const value = v.currentTarget.value
    setLoginTel(value)
  }
  // 密码value change事件
  function pwChange(v: React.FormEvent<HTMLInputElement>) {
    const value = v.currentTarget.value
    setLoginPassword(value)
  }
  // 验证码 change事件
  function codeChange(v: React.FormEvent<HTMLInputElement>) {
    const value = v.currentTarget.value
    setLoginCode(value)
  }

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src={bgImg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            登录到您的账户
          </h1>
          <form className="mt-6" action="#">
            {/* 如果是email态就渲染email登陆态，否则是手机号登陆 */}
            <div>
              <label className="block text-gray-700">
                {loginMode === LoginMode.emailMode ? '账户邮箱' : '手机号'}
              </label>
              <input
                type="email"
                placeholder={
                  loginMode === LoginMode.emailMode
                    ? '输入账户邮箱'
                    : '输入手机号'
                }
                value={
                  loginMode === LoginMode.emailMode ? loginEmail : loginTel
                }
                onInput={
                  loginMode === LoginMode.emailMode ? emailChange : telChange
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete="on"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">
                {loginMode === LoginMode.emailMode ? '密码' : '验证码'}
              </label>
              <input
                type="password"
                name=""
                id=""
                placeholder={
                  loginMode === LoginMode.emailMode
                    ? '请输入密码'
                    : '请输入验证码'
                }
                onInput={
                  loginMode === LoginMode.emailMode ? pwChange : codeChange
                }
                value={
                  loginMode === LoginMode.emailMode ? loginPassword : loginCode
                }
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>

            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
                忘记密码？
              </a>
            </div>

            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
              登录
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div
              className="flex items-center justify-center"
              onClick={loginModeChange}>
              <img
                src={loginMode === LoginMode.emailMode ? iphoneImg : emailImg}
                className="w-6 h-6"
              />
              <span className="ml-4">
                {loginMode === LoginMode.emailMode
                  ? '手机验证码登陆'
                  : '账户邮箱登陆'}
              </span>
            </div>
          </button>

          <p className="mt-8">
            需要一个账户？
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-semibold">
              创建用户
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
