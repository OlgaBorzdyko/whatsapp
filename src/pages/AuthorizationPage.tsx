import { Button } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TextFieldFilter from '../components/TextField'

const AuthorizationPage = ({
  onSubmit
}: {
  onSubmit?: (id: string, token: string) => void
}) => {
  const [userId, setUserId] = useState('')
  const [userToken, setUserToken] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(userId, userToken)
    }
    navigate('/chat')
  }

  return (
    <div>
      <TextFieldFilter
        label={userId}
        onChange={setUserId}
        onSubmit={handleSubmit}
        value={userId}
      />
      <TextFieldFilter
        label={userToken}
        onChange={setUserToken}
        onSubmit={handleSubmit}
        value={userToken}
      />
      <Button onClick={handleSubmit} type="submit">
        Создать чат
      </Button>
    </div>
  )
}
export default AuthorizationPage
