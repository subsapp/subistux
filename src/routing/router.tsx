import { createBrowserRouter } from 'react-router-dom'
import Appearances from '../pages/Appearance'
import ErrorPage from '../pages/ErrorPage'
import MessageLayout from "../pages/Message/MessageLayout"
import { Homepage } from '../pages/Homepage'
import Messagepage from '../pages/Message/Messagepage'
import Layout from '../components/Layout'
import Trending from '../pages/Trending'
import SignIn from '../pages/auth/SignIn'
import Signup from '../pages/auth/Signup'
import Messages from '../pages/Message/Messages'
import SettingLayout from '../pages/settings/SettingLayout'
import {Appearance,Blocked,Delete,Notifications,Privacy,Profile,Purge,Subscribe,General,Security} from '../pages/settings/pages'
import Post from '../pages/posts/Post'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
        errorElement:<ErrorPage/>,
    children: [
      {
        path: '',
        element: <Homepage />,
        children: [
          {path:'',
            element:<Post/>
          },
          
        ]
      },

      {
        path: 'signup',
        element: <Signup />
      },{
        path: 'appearance',
        element: <Appearances />
      },

      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'settings',
        element: <SettingLayout />,
        children:[
          {  element: <General /> ,path:'/settings/general'},
          {  element: <Profile /> ,path:'/settings/profile'},
          {  element: <Appearance /> ,path:'/settings/appearance'},
          {  element: <Notifications /> ,path:'/settings/notifications'},
          {  element: <Privacy /> ,path:'privacy'},
          {  element: <Security /> ,path:'security'},
          { element: <Subscribe /> ,path:'/settings/subscription'},
          {  element: <Blocked /> ,path:'blocked-users'},
          {  element: <Purge /> ,path:'/settings/purge-content'},
          {  element: <Delete /> ,path:'/settings/delete-account'},
        ]
      },
      {
        path: 'trending',
        element: <Trending />
      },
      {
        path: 'messages',
        element: <MessageLayout />,
        children: [
          {
            path: '/messages/:id',
            element: <Messagepage />
          }
        ]
      },
      {
        path: 'messages',
        element: <MessageLayout />,
        children: [
          {
            path: '/messages/:id',
            element: <Messagepage />
          }
        ]
      },

    ]
  }
])

export default router
