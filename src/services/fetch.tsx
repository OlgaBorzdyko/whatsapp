import { useQuery } from '@tanstack/react-query'
import AuthorizationComponent from './authorization/AuthorizationComponent'


const getUserStatusData = async (userId: string, userToken: string) => {
  const response = await fetch(
    `https://api.greenapi.com/waInstance${userId}/getSettings/${userToken}`
  )
  console.log(255255)

  if (!response.ok) {
    throw new Error('Failed to fetch')
  }
  return response.json()
}

const AuthorizationResponse = ({
  userId,
  userToken
}: {
  userId: string
  userToken: string
}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['getSettings', userId],
    queryFn: () => getUserStatusData(userId, userToken),
    enabled: !!userId && !!userToken
  })
  console.log(data, isLoading, error)
  return (
    <div>
      <p>Authorization Response</p>
      {isLoading && <AuthorizationComponent settings={data} />}
    </div>
  )
}

export default AuthorizationResponse
