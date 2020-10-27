import React from 'react';
import {Link} from 'react-router-dom';
import './MainHeader.scss';

const MainHeader = () => {
    return (
        <header id="main-header">
            <h1>Router!</h1>
            <nav>
                <Link to="/">Index</Link>
                <Link to="/pagina2">Pagina 2</Link>
                <Link to="/todos">Todos</Link>
            </nav>
        </header>
    )
};

export default MainHeader;
