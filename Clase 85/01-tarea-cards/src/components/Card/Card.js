import React, { useState } from 'react';
import './Card.scss';

const Card = ({background, title, body}) => {
    //props -> { background: '', children: null }

    const [displayContent, setDisplayContent] = useState(false);

    return (
        <article className={`card ${displayContent ? 'opened': ''}`}
            style={{backgroundImage: `url(${background})`}}
        >
            <div className="card-wrapper">
                <div className="card-wrapper-relative">
                    <header className="card-header">
                        Powerful Women
                        <h2>{ title }</h2>
                    </header>
                    <div className="card-content">
                        { body }
                    </div>
                    <footer className="card-footer">
                        <button
                            type="button"
                            className="card-open-button"
                            onClick={() => setDisplayContent(!displayContent)}
                        >
                            <span className="card-open-button-icon">+</span>
                        </button>
                    </footer>
                </div>
            </div>
        </article>
    )
};

export default Card;