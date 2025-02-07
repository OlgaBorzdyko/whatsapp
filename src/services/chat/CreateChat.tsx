import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthHook } from '../authorization/useAuthHook'

const CreateChat = ({
  userId,
  userToken,
  userPhoneNumber
}: {
  userId: string
  userToken: string
  userPhoneNumber: string
}) => {
  const response = useAuthHook({ userId, userToken, userPhoneNumber })
  const navigate = useNavigate()
  const handleCreateChat = async () => {
    await response.refetch()
  }
  useEffect(() => {
    if (response.isSuccess) {
      const newChatId = `user${Math.floor(Math.random() * 10000)}`
      navigate(`/chat/${newChatId}`)
    } else if (response.isError) {
      console.error('Ошибка при авторизации')
    }
  }, [response.isSuccess, response.isError, navigate])

  return (
    <div>
      {response.isPending && <p>Загрузка...</p>}
      <button onClick={handleCreateChat} type="button">
        Создать чат
      </button>
    </div>
  )
}

export default CreateChat
