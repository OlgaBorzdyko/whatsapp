import { Grid, TextField } from '@mui/material'
import React, { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface TextFieldProps {
  label?: string
  error?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  register: UseFormRegisterReturn
}

export const TextFieldComponent: FC<TextFieldProps> = ({
  label,
  error,
  register
}) => (
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
export default TextFieldComponent

//onKeyDown={(e) => {
//       }}
//if (e.key === 'Enter') {
//           onSubmit()
//         }
