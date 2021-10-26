import { AppBar, Toolbar } from '@mui/material'
import { Footer } from 'components/layouts/Footer'
import { CustomTypography } from 'components/ui-kit/Typography'
import { VerticalSpace } from 'components/ui-kit/VerticalSpace'
import { ReactNode } from 'react'

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
