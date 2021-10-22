import { ComponentType, Fragment } from 'react';
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
            <Fragment>
                <Navbar>
                    <Component />
                </Navbar>
            </Fragment>
        );
    }
    return <Component />
}

export default RouteValidator
