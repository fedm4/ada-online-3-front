import React from 'react';
import './Header.scss';

const Header = ({cardIndex, setCardIndex}) => {
    return(
        <header className="main-header">
            <span>LOREM IPSUM</span>
            <h1>Powerful Women</h1>
            <p>Far from being damsels in distress, these warrior women are often the ones doing the rescuing, and kicking butt in the process.</p>
            <div>
                <button type="button" disabled={`${cardIndex === 0 ? 'disabled': ''}`} onClick={() => setCardIndex(cardIndex - 1)}>{'<'}</button>
                <button type="button" disabled={`${cardIndex === 2 ? 'disabled': ''}`} onClick={() => setCardIndex(cardIndex + 1)}>{'>'}</button>
            </div>
        </header>
    )
};

export default Header;

