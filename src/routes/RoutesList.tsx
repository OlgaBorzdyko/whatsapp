import DefaultLayout from 'layouts/DefaultLayout'
import { createBrowserRouter } from 'react-router-dom'

import ChatPage from '../pages/ChatPage'
import AuthorizationPage from '../pages/AuthorizationPage'

const RoutesList = createBrowserRouter(
  [
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <AuthorizationPage /> },
        { path: '/chat', element: <ChatPage /> },

        { path: '*', element: <AuthorizationPage /> }
      ]
    }
  ],
  {
    future: {
      v7_relativeSplatPath: true
    }
  }
)
export default RoutesList
