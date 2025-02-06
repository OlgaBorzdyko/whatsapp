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
}: {
  userId: string
  userToken: string
}): Promise<UserStatusData> => {
  const response = await axios.get(
    `https://api.greenapi.com/waInstance${userId}/getSettings/${userToken}`
  )
  return response.data
}

export const useAuthHook = ({
  userId,
  userToken,
}: {
  userId: string
  userToken: string
}) => {
  const { data, isPending, isSuccess, isError, refetch } = useQuery({
    queryKey: ['getSettings', userId],
    queryFn: () => getUserStatusData({ userId, userToken }),
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
