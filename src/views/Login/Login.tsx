import bgImg from '../../assets/images/login_bg.png'
import iphoneImg from '../../assets/images/iphone.png'
import emailImg from '../../assets/images/email.png'
import React, { useEffect, useMemo, useState, ChangeEvent } from 'react'

export default function Login() {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginTel, setLoginTel] = useState('')
  const [loginCode, setLoginCode] = useState('')
  const [count, setCount] = useState(60)
  const [getCodeStatus, setGetCodeStatus] = useState(true)
  const LoginMode = {
    emailMode: 'EmailMode',
    telMode: 'TelMode',
  }
  const [loginMode, setLoginMode] = useState(LoginMode.emailMode)

  function loginModeChange() {
    if (loginMode === LoginMode.emailMode) setLoginMode(LoginMode.telMode)
    if (loginMode === LoginMode.telMode) setLoginMode(LoginMode.emailMode)
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    console.log('name', name)
    switch (name) {
      case 'loginEmail':
        setLoginEmail(value)
        break
      case 'loginPassword':
        if (value.length > 16) return
        setLoginPassword(value)
        break
      case 'loginTel':
        if (value.length > 11) return
        setLoginTel(value)
        break
      case 'loginCode':
        if (value.length > 6) return
        setLoginCode(value)
        break
      default:
        break
    }
  }

  function getCode() {
    if (!getCodeStatus) return
    console.log('获取验证码')
    setGetCodeStatus(false)
    let countDown = 60
    const timer = setInterval(() => {
      setCount(prevCount => prevCount - 1)
      countDown -= 1
      if (countDown <= 0) {
        clearInterval(timer)
        setCount(60)
        setGetCodeStatus(true)
      }
    }, 1000)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (loginMode === LoginMode.emailMode) {
      console.log('Email 登录')
      console.log('登录邮箱:', loginEmail)
      console.log('登录密码:', loginPassword)
    } else if (loginMode === LoginMode.telMode) {
      console.log('手机号登录')
      console.log('手机号:', loginTel)
      console.log('验证码:', loginCode)
    }
  }

  useEffect(() => {
    setLoginEmail('')
    setLoginTel('')
    setLoginPassword('')
    setLoginCode('')
  }, [loginMode])

  const loginValue = useMemo(() => {
    return loginMode === LoginMode.emailMode ? loginEmail : loginTel
  }, [loginMode, loginEmail, loginTel])

  const loginAccountLabelValue = useMemo(() => {
    return loginMode === LoginMode.emailMode ? '账户邮箱' : '手机号'
  }, [loginMode])

  const loginAccountPlaceholder = useMemo(() => {
    return loginMode === LoginMode.emailMode ? '输入账户邮箱' : '输入手机号'
  }, [loginMode])

  const loginPwLabelValue = useMemo(() => {
    return loginMode === LoginMode.emailMode ? '密码' : '验证码'
  }, [loginMode])

  const loginPwType = useMemo(() => {
    return loginMode === LoginMode.emailMode ? 'password' : 'number'
  }, [loginMode])

  const loginPwLength = useMemo(() => {
    return loginMode === LoginMode.emailMode ? 16 : 6
  }, [loginMode])

  const loginPwPlaceholder = useMemo(() => {
    return loginMode === LoginMode.emailMode ? '输入密码' : '输入验证码'
  }, [loginMode])

  const loginImg = useMemo(() => {
    return loginMode === LoginMode.emailMode ? emailImg : iphoneImg
  }, [loginMode])

  const loginModeText = useMemo(() => {
    return loginMode === LoginMode.emailMode ? '手机验证码登陆' : '账户邮箱登陆'
  }, [loginMode])

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
          <form className="mt-6" onSubmit={handleSubmit}>
            {/* account */}
            <div>
              <label className="block text-gray-700">
                {loginAccountLabelValue}
              </label>
              <input
                type={loginMode === LoginMode.emailMode ? 'email' : 'tel'}
                name={
                  loginMode === LoginMode.emailMode ? 'loginEmail' : 'loginTel'
                }
                placeholder={loginAccountPlaceholder}
                value={loginValue}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autoFocus
                autoComplete="off"
                required
              />
            </div>

            {/* password */}
            <div className="mt-4 flex flex-col gap-2">
              <label className="block text-gray-700">{loginPwLabelValue}</label>
              <div className="flex gap-3 items-center justify-center">
                <input
                  type={loginPwType}
                  name={
                    loginMode === LoginMode.emailMode
                      ? 'loginPassword'
                      : 'loginCode'
                  }
                  maxLength={loginPwLength}
                  placeholder={loginPwPlaceholder}
                  onChange={handleInputChange}
                  value={
                    loginMode === LoginMode.emailMode
                      ? loginPassword
                      : loginCode
                  }
                  className="flex-[7] w-full px-4 py-3 rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
                {loginMode === LoginMode.telMode && (
                  <button
                    type="submit"
                    onClick={getCode}
                    disabled={!getCodeStatus}
                    className="flex-[3] disabled:cursor-not-allowed disabled:bg-indigo-400 w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3">
                    {getCodeStatus ? '获取验证码' : `${count}秒后重试`}
                  </button>
                )}
              </div>
            </div>

            {/* 忘记密码 */}
            <div className="text-right mt-2">
              <a
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
                忘记密码？
              </a>
            </div>

            {/* 登录 */}
            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
              登录
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            onClick={loginModeChange}>
            <div className="flex items-center justify-center">
              <img src={loginImg} className="w-6 h-6" alt="" />
              <span className="ml-4">{loginModeText}</span>
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
