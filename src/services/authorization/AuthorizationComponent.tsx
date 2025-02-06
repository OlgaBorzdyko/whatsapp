import { useForm } from 'react-hook-form'

import TextField from '../../components/TextField'

interface FormDataProps {
  userId: string
  userToken: string
}

const AuthorizationComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataProps>()

  const onSubmit = (data: FormDataProps) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <button type="submit">Создать чат</button>
      </form>
    </div>
  )
}

export default AuthorizationComponent
