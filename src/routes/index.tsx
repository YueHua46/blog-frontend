import { createBrowserRouter } from 'react-router-dom'

// 路由组件
import App from '../App'
import Error from '../views/Error/Error'
import Home from '../views/Home/Home'
import Archive from '../views/Archive/Archive'
import Friends from '../views/Friends/Friends'
import Donate from '../views/Donate/Donate'
import About from '../views/About/About'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/archive',
        element: <Archive />,
      },
      {
        path: '/friends',
        element: <Friends />,
      },
      {
        path: '/donate',
        element: <Donate />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])
