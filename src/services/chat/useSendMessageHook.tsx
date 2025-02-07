import axios from 'axios'

export const SendMessage = async({chatId, message, userId, userToken}: { chatId: string,message: string, userId: string, userToken: string }) => {
    const sendMessageResponse = await axios.post(`https://api.greenapi.com/waInstance${userId}/sendMessage/${userToken}`,
        { chatId: chatId, message: message }
    )
    console.log(sendMessageResponse)
    return sendMessageResponse.data
}