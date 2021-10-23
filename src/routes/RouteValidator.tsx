import { ComponentType } from 'react';
import { Redirect } from 'react-router';
import { Navbar } from '../components/layouts/NavBar';

const RouteValidator = ({hasNavbar, Component, path}: {
    hasNavbar: boolean,
    Component: ComponentType,
    path?: string | undefined
}) => {
    if(path=='/') return <Redirect to='/weather' />
    if (hasNavbar) {
        return (
            <>
                <Navbar>
                    <Component />
                </Navbar>
            </>
        );
    }
    return <Component />
}

export default RouteValidator
