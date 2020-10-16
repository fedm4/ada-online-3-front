import React from "react";
import './Modal.scss';

const Modal = ({title, children, close}) => {
    return (
        <React.Fragment>
            <div className="overlay"></div>
            <section className="modal">
                <header>
                    <h2>{title}</h2>
                    <button type="button" onClick={close}>X</button>
                </header>
                <article className="modal-content">
                    {children}
                </article>
            </section>
        </React.Fragment>
    )
};

export default Modal;
