import { Typography } from '@mui/material'

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
