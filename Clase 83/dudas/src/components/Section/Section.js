import React from 'react';
import './Section.css';

const Section = ({title, children}) => {

    return(
        <section className="section">
            <header>
                <h2>{title}</h2>
            </header>
            {children}
            <img src="https://i.pinimg.com/736x/7d/f0/7f/7df07f487fa52c55b4fe977926003365.jpg" />
        </section>
    );
};

export default Section;