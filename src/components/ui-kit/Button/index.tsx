import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import { ReactElement, ReactNode } from 'react'

const CustomButton = ({
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
  color
}: {
  type?: 'submit' | 'button',
  variant?: 'contained' | 'outlined' | 'text',
  size?: 'large' | 'medium' | 'small',
  label?: string,
  disabled?: boolean,
  fullWidth?: boolean,
  onClick?: () => void,
  startIcon?: ReactElement,
  endIcon?: ReactElement,
  disableElevation?: boolean,
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
}) => {
  return (
    <Button
      type={ type }
      disabled={ disabled }
      fullWidth={ fullWidth }
      variant={ variant }
      onClick={ onClick }
      size={ size }
      startIcon={ startIcon }
      endIcon={ endIcon }
      disableElevation={ disableElevation }
      color={ color }
    >
      { label }
    </Button>
  )
}
CustomButton.defaultProps = {
  variant: 'contained',
  size: 'medium',
  disabled: false,
  fullWidth: false,
  type: 'button',
  onClick: () => null,
  startIcon: null,
  endIcon: null,
  disableElevation: false,
}

CustomButton.propTypes = {
  variant: PropTypes.oneOf([ 'contained', 'outlined', 'text' ]),
  type: PropTypes.oneOf([ 'submit', 'button' ]),
  color: PropTypes.string,
  size: PropTypes.oneOf([ 'large', 'medium', 'small' ]),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  disableElevation: PropTypes.bool,
}

export default CustomButton
