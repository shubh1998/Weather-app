import { TextField } from '@mui/material'

export const CustomTextField = ({
  name,
  label,
  placeholder,
  fullWidth,
  variant,
  defaultValue,
  type,
  disabled,
  required,
  size,
  multiline,
  rows,
  value,
  ...otherProps
}: {
  name?: string
  label?: string
  placeholder?: string
  fullWidth?: boolean
  variant?: 'filled' | 'outlined' | 'standard'
  defaultValue?: string
  type?: string
  disabled?: boolean
  required?: boolean
  size?: 'small' | 'medium'
  multiline?: boolean
  rows?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
  <TextField
    defaultValue={defaultValue}
    fullWidth={!!fullWidth}
    name={name}
    variant={variant}
    label={label}
    type={type}
    required={required}
    disabled={disabled}
    placeholder={placeholder}
    size={size}
    multiline={multiline}
    rows={rows}
    value={value}
    {...otherProps}
  />
)
