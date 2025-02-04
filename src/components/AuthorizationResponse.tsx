import { FC, useState } from 'react'

import AuthorizationPage from '../pages/AuthorizationPage'
import { getStatusData } from '../services/fetch'

const AuthorizationResponse: FC = () => {
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

export default AuthorizationResponse
