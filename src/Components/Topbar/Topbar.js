import React from 'react';
import classes from '../Topbar/Topbar.module.css';
import { Link, useLocation } from 'react-router-dom';
import { ROUTE_ENDPOINTS } from '../../Route';

const Topbar = (props) => {
    const currentLocation = useLocation().pathname;
    return (
        <div className={classes.Topbar}>
            <div className={classes.LeftMenu}>
                <div className={classes.LogoWrapper}>
                    <img src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png" alt="Logo" />
                    <p className={classes.BrandName}>Kafene</p>
                </div>
                <nav>
                    <Link className={[classes.MenuItems, currentLocation.includes('orders') ? classes.Active : null].join(' ')} to={ROUTE_ENDPOINTS.HOME_PAGE}>Orders</Link>
                    <Link className={[classes.MenuItems, currentLocation.includes('products') ? classes.Active : null].join(' ')} to={ROUTE_ENDPOINTS.PRODUCT_LIST}>Products</Link>
                    <Link className={[classes.MenuItems, currentLocation.includes('users') ? classes.Active : null].join(' ')} to={ROUTE_ENDPOINTS.USER_LIST}>Users</Link>
                </nav>
            </div>

            {
                props.loginStatus ? 
                <Link className={classes.MenuItems} onClick={props.onUserLoggedOut}>Logout</Link>
                :
                null
            }
        </div>
    );
}

export default Topbar;