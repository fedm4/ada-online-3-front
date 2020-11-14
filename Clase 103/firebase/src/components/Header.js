import React from 'react';
import '../scss/Header.scss';

const Header = ({signIn, user, setUser}) => {

    const signOut = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <header id="main-header">
            <h1>Chat</h1>
            {
                user ? 
                <button type="button" onClick={signOut}>Desconectar</button>
                :
                <button type="button" onClick={signIn}>Log In</button>
            }
        </header>
    )
};

export default Header;
