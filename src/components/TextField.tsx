import { Grid, TextField } from '@mui/material'
import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { FormDataProps } from '../services/authorization/AuthorizationComponent'

interface TextFieldProps {
  label?: string
  error?: boolean
  register: ReturnType<UseFormRegister<FormDataProps>>
  style?: React.CSSProperties
}

export const TextFieldComponent: FC<TextFieldProps> = ({
  label,
  error,
  register,
  style
}) => {
  return (
    <div style={style}>
      <TextField
        error={error}
        fullWidth
        label={label}
        {...register}
        size="small"
        variant="outlined"
      />
    </div>
  )
}
export default TextFieldComponent
