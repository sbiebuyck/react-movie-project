import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/_navigation.scss';

function NavBar() {
    return (
        <nav>
            <Link to="/"> Home Page </Link>
            <Link to="/critics"> Critics Page </Link>
            <Link to="/reviews"> Reviews Page </Link>

        </nav>
    );
};

export default NavBar;