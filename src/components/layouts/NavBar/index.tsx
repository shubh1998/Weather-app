import { AppBar, Toolbar } from '@mui/material'
import { ReactNode } from 'react'

import { CustomTypography } from '../../ui-kit/Typography'
import { VerticalSpace } from '../../ui-kit/VerticalSpace'
import { Footer } from '../Footer'
import { PaperStyled, WhiteFontWithNoDecoration } from './styles/Navbar.StyledComponents'

export const Navbar = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <PaperStyled>
        <AppBar position="static">
          <Toolbar>
            <WhiteFontWithNoDecoration to={'/'}>
              <CustomTypography variant="h6" label="Weather App" />
            </WhiteFontWithNoDecoration>
          </Toolbar>
        </AppBar>
      </PaperStyled>
      {children}
      <VerticalSpace vSpace={1} />
      <Footer />
    </>
  )
}
