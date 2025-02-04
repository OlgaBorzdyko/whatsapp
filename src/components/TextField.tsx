import { Grid, TextField } from '@mui/material'
import { FC } from 'react'
interface TextFieldFilterProps {
  label?: string
  onChange(value: string): void
  onSubmit(): void
  value: string
}
export const TextFieldComponent: FC<TextFieldFilterProps> = ({
  label,
  onChange,
  onSubmit,
  value
}) => (
  <Grid item md={12} xs={12}>
    <TextField
      fullWidth
      label={label}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onSubmit()
        }
      }}
      size="small"
      value={value}
      variant="outlined"
    />
  </Grid>
)
export default TextFieldComponent
