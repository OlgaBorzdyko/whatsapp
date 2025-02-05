import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'

const getUserStatusData = async ({
  userId,
  userToken
}: {
  userId: string
  userToken: string
}) => {
  return await axios.get(
    `https://api.greenapi.com/waInstance${userId}/getSettings/${userToken}`
  )
}

export const useAuthHook = ({
  userId,
  userToken
}: {
  userId: string
  userToken: string
}) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['getSettings', userId],
    queryFn: () => getUserStatusData({ userId, userToken }),
    enabled: !!userId && !!userToken
  })
  useEffect(() => {
    if (isSuccess) console.log('Data fetched successfully', data)
  }, [isSuccess, data])
  useEffect(() => {
    if (!isError) console.log('Data fetching error')
  }, [isError])

  return { data, isLoading, isError }
}
