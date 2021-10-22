import { AppBar, Paper, Toolbar, Typography } from '@mui/material';
import styled from '@emotion/styled'
import { Footer } from '../Footer';
import { VerticalSpace } from '../../ui-kit/VerticalSpace';
import { ReactNode } from 'react';

export const Navbar = ({ children }:{ children?: ReactNode }) => {
    return (
        <>
            <PaperStyled>
                <AppBar position="static">
                    <Toolbar>
                        <a href="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                            <Typography variant="h6">
                                Weather App
                            </Typography>
                        </a>
                    </Toolbar>
                </AppBar>
            </PaperStyled>
                {children}
            <VerticalSpace vSpace={1}/>
            <Footer />
        </>
    );
}

const PaperStyled = styled(Paper)({
    marginBottom: '20px'
})