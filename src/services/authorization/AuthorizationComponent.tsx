import { useState } from 'react'

import TextField from '../../components/TextField'
import { useAuthHook } from './useAuthHook'

const AuthorizationComponent = () => {
  const [userId, setUserId] = useState('')
  const [userToken, setUserToken] = useState('')
  const { data, isLoading, isError } = useAuthHook({ userId, userToken })
  const onHandleIdChange = (value: string) => {
    setUserId(value)
  }
  const onHandleTokenChange = (value: string) => {
    setUserToken(value)
  }
  const handleSubmit = () => {
    console.log('User ID:', userId, 'User Token:', userToken)
    if (data) {
      console.log('Data from API:', data)
    }
  }
  return (
    <div>
      <TextField
        onChange={onHandleIdChange}
        onSubmit={handleSubmit}
        value={userId}
      />
      <TextField
        onChange={onHandleTokenChange}
        onSubmit={handleSubmit}
        value={userToken}
      />
      <button onClick={handleSubmit}>Создать чат</button >

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data!</p>}
    </div>
  )
}
export default AuthorizationComponent
