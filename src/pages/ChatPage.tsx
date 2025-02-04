import { FC, useState } from 'react'

import { getStatusData } from '../services/fetch'
import AuthorizationPage from './AuthorizationPage'

const ChatPage: FC = () => {
  const [response, setResponse] = useState<any>(null)

  const fetchData = async (userId: string, userToken: string) => {
    const data = await getStatusData(userId, userToken)
    setResponse(data)
  }
  return (
    <div>
      <div>{response}</div>
      <AuthorizationPage onSubmit={fetchData} />
    </div>
  )
}

export default ChatPage
