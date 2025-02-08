import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { SendMessage } from './useSendMessageHook'

const WriteMessage = ({
  userId,
  userToken,
  chatId
}: {
  userId: string
  userToken: string
  chatId: string
}) => {
  const [messages, setMessages] = useState<string[]>([])
  const [message, setMessage] = useState('')

  const sendMessage = async () => {
    if (!message.trim()) return

    try {
      setMessages((prev) => [...prev, message])
      setMessage('')

      await SendMessage({
        chatId,
        message,
        userId,
        userToken
      })
    } catch (error) {
      console.error('Ошибка при отправке сообщения:', error)
    }
  }

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Напишите сообщение..."
        value={message}
      />
      <button onClick={sendMessage}>Отправить</button>
    </div>
  )
}

export default WriteMessage
