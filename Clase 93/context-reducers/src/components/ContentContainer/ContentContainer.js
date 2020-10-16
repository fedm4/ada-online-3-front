import React from "react";
import './ContentContainer.scss';

const ContentContainer = ({children}) => {
    return(
        <section className="content-container">
            {children}
        </section>
    )
};

export default ContentContainer;
