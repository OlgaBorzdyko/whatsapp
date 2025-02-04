import DefaultLayout from 'layouts/DefaultLayout'
import { createBrowserRouter } from 'react-router-dom'
import AuthorizationResponse from "../components/AuthorizationResponse";

import ChatPage from '../pages/ChatPage'

const RoutesList = createBrowserRouter(
  [
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '/', element: <AuthorizationResponse /> },
        { path: '/chat', element: <ChatPage /> },

        { path: '*', element: <AuthorizationResponse /> }
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
