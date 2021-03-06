import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <ul style={{listStyle: 'none'}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Productos</Link>
                </li>
                <li>
                    <Link to="/users">Usuarios</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;