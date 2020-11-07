import React from 'react';
import '../scss/Header.scss';

const Header = ({signIn, user}) => {
    return (
        <header id="main-header">
            <h1>Chat</h1>
            {
                user ? 
                <button type="button" onClick={null}>Desconectar</button>
                :
                <button type="button" onClick={signIn}>Log In</button>
            }
        </header>
    )
};

export default Header;
