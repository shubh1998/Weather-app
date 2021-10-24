import { Button } from '@mui/material'
import { ReactElement } from 'react'

export const CustomButton = ({
  type,
  variant,
  size,
  label,
  disabled,
  fullWidth,
  onClick,
  startIcon,
  endIcon,
  disableElevation,
  color,
}: {
  type?: 'submit' | 'button'
  variant?: 'contained' | 'outlined' | 'text'
  size?: 'large' | 'medium' | 'small'
  label?: string
  disabled?: boolean
  fullWidth?: boolean
  onClick?: () => void
  startIcon?: ReactElement
  endIcon?: ReactElement
  disableElevation?: boolean
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
}) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      fullWidth={fullWidth}
      variant={variant}
      onClick={onClick}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      disableElevation={disableElevation}
      color={color}
    >
      {label}
    </Button>
  )
}
