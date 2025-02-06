import React from 'react'
import { useForm } from 'react-hook-form'

import TextField from '../../components/TextField'
import CreateChat from '../chat/CreateChat'

export interface FormDataProps {
  userId: string
  userToken: string
}

const AuthorizationComponent = () => {
  const {
    register,
    formState: { errors },
    watch
  } = useForm<FormDataProps>()


  const userId = watch('userId')
  const userToken = watch('userToken')

  return (
    <div>
      <form>
        <TextField
          error={!!errors.userId}
          label="Введите ваш ID"
          register={register('userId', { required: 'Введите ID' })}
        />

        <TextField
          error={!!errors.userToken}
          label="Введите ваш токен"
          register={register('userToken', { required: 'Введите токен' })}
        />
        <CreateChat userId={userId} userToken={userToken} />
      </form>
    </div>
  )
}

export default AuthorizationComponent
