import DefaultLayout from 'layouts/DefaultLayout'
import ChatPage from '../pages/ChatPage'

const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <ChatPage /> },
      { path: '*', element: <ChatPage /> }
    ]
  }
]

export default routes
