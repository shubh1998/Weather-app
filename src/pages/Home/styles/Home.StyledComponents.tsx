import styled from '@emotion/styled'
import { Card } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Center = styled.div({
    textAlign: 'center'
})

export const LocationDisplayIcon = styled(LocationOnIcon)({
  paddingTop: '4px'
})

export const StyledBoldFont = styled.span({
  fontSize: 21,
  fontWeight: 500, 
  marginBottom: 10
})

export const CardElement = styled(Card)<{cardBGColorProp: string}>(({cardBGColorProp})=>({
  "&&":{
    boxShadow: '0px 1px 3px 0px rgb(0 0 0 / 12%), 0px 1px 3px 0px rgb(0 0 0 / 12%), 0px 1px 3px 0px rgb(0 0 0 / 12%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
  },
  backgroundColor: cardBGColorProp,
}))