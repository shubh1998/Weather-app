import { Fragment, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../components/layouts/NavBar';

const RouteValidator = ({hasNavbar, Component, path, ...otherProps }: {
    hasNavbar: boolean,
    Component: any,
    path?: string
}) => {
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
