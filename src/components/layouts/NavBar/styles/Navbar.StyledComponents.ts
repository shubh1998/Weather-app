import styled from '@emotion/styled'
import { Paper } from '@mui/material'
import { Link } from 'react-router-dom'

export const PaperStyled = styled(Paper)({
  marginBottom: '20px',
})

export const WhiteFontWithNoDecoration = styled(Link)({
  color: '#FFFFFF',
  textDecoration: 'none',
})
