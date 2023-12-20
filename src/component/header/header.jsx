import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon';

const header = () => {
    return (
        <nav className='nav-menu container'>
            <div className='logo'>
                <Link to='/'> NOMAD </Link>
            </div>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/Shop'> Shop </Link>
                </li>
            </ul>
            <CartIcon/>
        </nav>
    )
}

export default header;