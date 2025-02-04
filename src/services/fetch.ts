export const getStatusData = async (userId: string, userToken: string) => {
  try {
    const response = await fetch(
      `https://api.greenapi.com/waInstance${userId}/getSettings/${userToken}`
    )
    const data = await response.json()
    console.log('data', data)
  } catch (error) {
    console.error('error')
    return null
  }
}
