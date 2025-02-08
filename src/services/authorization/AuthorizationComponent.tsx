import React from 'react'
import { useForm } from 'react-hook-form'

import TextField from '../../components/TextField'
import CreateChat from '../chat/CreateChat'
import {
  AuthorizationComponentWrapper,
  FillTheFields,
  FormWrapper,
  StyledTitle
} from './StyledAuthorizationComponent'

export interface FormDataProps {
  userId: string
  userToken: string
  userPhoneNumber: string
}

const AuthorizationComponent = () => {
  const {
    register,
    formState: { errors },
    watch
  } = useForm<FormDataProps>()

  const userId = watch('userId')
  const userToken = watch('userToken')
  const userPhoneNumber = watch('userPhoneNumber')

  return (
    <AuthorizationComponentWrapper>
      <StyledTitle>GREEN-API</StyledTitle>
      <FormWrapper>
        <FillTheFields>Заполните форму</FillTheFields>
        <TextField
          error={!!errors.userId}
          label="Введите ваш ID"
          register={register('userId', { required: 'Введите ID' })}
          style={{ gridArea: 'id' }}
        />
        <TextField
          error={!!errors.userToken}
          label="Введите ваш токен"
          register={register('userToken', { required: 'Введите токен' })}
          style={{ gridArea: 'token' }}
        />
        <TextField
          error={!!errors.userPhoneNumber}
          label="Введите номер собеседника"
          register={register('userPhoneNumber', { required: 'Введите номер' })}
          style={{ gridArea: 'phone' }}
        />
        <CreateChat
          userId={userId}
          userPhoneNumber={userPhoneNumber}
          userToken={userToken}
        />
        <div
          style={{
            gridArea: 'reg',
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            fontWeight: 'normal',
            fontSize: '14px',
            fontFamily: 'Roboto'
          }}
        >
          <p>Нет аккаунта?</p>
          <a
            href="https://console.green-api.com/registration"
            rel="noreferrer"
            style={{ color: '4CAE4FFF', textDecoration: 'none' }}
            target="_blank"
          >
            Зарегистрироваться
          </a>
        </div>
      </FormWrapper>
    </AuthorizationComponentWrapper>
  )
}

export default AuthorizationComponent
