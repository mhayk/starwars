
import React from 'react';

// import { Container } from './styles';

function Navbar({ setPage }) {
    return (
        <nav>
            <button onClick={() => setPage('planets')}>Planets</button>
            <button onClick={() => setPage('people')}>People</button>
        </nav>
    );
}

export default Navbar;