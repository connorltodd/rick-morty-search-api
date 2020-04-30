import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="mx-auto" style={{ maxWidth: '300px' }}>
            <img className="header-img" src="https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png" alt="rick and morty logo" />
        </div>
    )
}

export default Header;