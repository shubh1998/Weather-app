import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

export const CustomTypography = (
  {
  variant, align, label, noWrap, color
}: {
  variant?: "h1" | "h2" | "h3" | "h4"| "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline",
  align?: "inherit" | "left" | "center" | "right" | "justify",
  label?: string,
  noWrap?: boolean,
  color?: string
}) => {
  return (
    <Typography
      variant={ variant }
      align={ align }
      noWrap={ noWrap }
      color={ color }
    >
      { label }
    </Typography>
  )
}

CustomTypography.defaultProps = {
  variant: 'body1',
  display: 'initial',
  align: 'inherit',
  noWrap: false,
}

CustomTypography.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit' ]),
  display: PropTypes.oneOf([ 'initial', 'block', 'inline' ]),
  align: PropTypes.oneOf([ 'inherit', 'left', 'center', 'right', 'justify' ]),
  label: PropTypes.string.isRequired,
  noWrap: PropTypes.bool,
  color: PropTypes.string
}
