import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'

export interface UserStatusData {
  idInstance: string
  apiTokenInstance: string
}

const getUserStatusData = async ({
  userId,
  userToken,
  userPhoneNumber
}: {
  userId: string
  userToken: string
  userPhoneNumber: string
}): Promise<UserStatusData | undefined> => {
  //const url = `https://api.greenapi.com/waInstance${userId}/checkWhatsapp/${userToken}`

  //const checkPhoneNumber = await axios.post(url, {
    //phoneNumber: userPhoneNumber
  //})
  //console.log('с номером', checkPhoneNumber.data)

  //if (!checkPhoneNumber.data.exists) {
    //console.error('Номер не зарегистрирован в WhatsApp')
    //return
  //}

  const settingsResponse = await axios.get(
    `https://api.greenapi.com/waInstance${userId}/getSettings/${userToken}`
  )

  return settingsResponse.data
}

export const useAuthHook = ({
  userId,
  userToken,
  userPhoneNumber
}: {
  userId: string
  userToken: string
  userPhoneNumber: string
}) => {
  const { data, isPending, isSuccess, isError, refetch } = useQuery({
    queryKey: ['getSettings', userId],
    queryFn: () => getUserStatusData({ userId, userToken, userPhoneNumber }),
    enabled: false
  })
  useEffect(() => {
    if (isSuccess) console.log('Data fetched successfully', data)
  }, [isSuccess, data])
  useEffect(() => {
    if (isError) console.log('Data fetching error')
  }, [isError])

  return { data, isPending, isError, isSuccess, refetch }
}
