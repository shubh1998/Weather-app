import styled from '@emotion/styled'
import { Card } from '@mui/material'

export const DisplayFlex = styled.div({
  display: 'flex',
})

export const Center = styled.div({
  textAlign: 'center',
})

export const CardElement = styled(Card)({
  '&&': {
    boxShadow:
      '0px 1px 3px 0px rgb(0 0 0 / 12%), 0px 1px 3px 0px rgb(0 0 0 / 12%), 0px 1px 3px 0px rgb(0 0 0 / 12%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
})
