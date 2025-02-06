import { Grid, TextField } from '@mui/material'
import React, { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { FormDataProps } from '../services/authorization/AuthorizationComponent'

interface TextFieldProps {
  label?: string
  error?: boolean
  register: ReturnType<UseFormRegister<FormDataProps>>
}

export const TextFieldComponent: FC<TextFieldProps> = ({
  label,
  error,
  register
}) => {
  return (
    <Grid item md={12} xs={12}>
      <TextField
        error={error}
        fullWidth
        label={label}
        {...register}
        size="small"
        variant="outlined"
      />
    </Grid>
  )
}
export default TextFieldComponent
