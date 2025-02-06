import { useParams } from 'react-router-dom'

const ChatPage = () => {
  const { chatId } = useParams()

  return (
    <div>
      <h1>Чат с ID: {chatId}</h1>
    </div>
  )
}

export default ChatPage
