import { useParams } from 'react-router-dom'

import WriteMessage from '../services/chat/WriteMessage'

const ChatPage = () => {
  const { chatId } = useParams()

  return (
    <div>
      <h1>Чат с ID: {chatId}</h1>
      <WriteMessage />
    </div>
  )
}

export default ChatPage
