import { TextField } from '@mui/material'
import PropTypes from 'prop-types'

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
  name?: string,
  label?: string,
  placeholder?: string,
  fullWidth?: boolean,
  variant?: 'filled' | 'outlined' | 'standard',
  defaultValue?: string,
  type?: string,
  disabled?: boolean,
  required?: boolean,
  size?: 'small' | 'medium',
  multiline?: boolean,
  rows?: string,
  value?: string
}) => (
  <TextField
    defaultValue={ defaultValue }
    fullWidth={ !!fullWidth }
    name={ name }
    variant={ variant }
    label={ label }
    type={ type }
    required={ required }
    disabled={ disabled }
    placeholder={ placeholder }
    size={ size }
    multiline={ multiline }
    rows={ rows }
    value={ value }
    {...otherProps}
  />
)

CustomTextField.defaultProps = {
  label: '',
  disabled: false,
  type: 'string',
  fullWidth: true,
  variant: 'outlined',
  required: false,
  defaultValue: '',
  placeholder: null,
  size: 'medium',
  multiline: false,
  rows: null,
  value: undefined,
  name: ''
}

CustomTextField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf([ 'filled', 'outlined', 'standard' ]),
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.oneOf([ 'small', 'medium' ]),
  multiline: PropTypes.bool,
  rows: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}
