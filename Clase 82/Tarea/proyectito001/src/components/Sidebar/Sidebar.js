import React, { useState } from 'react';
import './Sidebar.scss';

//comentado se ve de donde viene el destructuring del parametro del componente Sidebar.
const Sidebar = ({currentContent, setCurrentContent}) => { // (props) => {
    // const {currentContent, setCurrentContent} = props
    const changeContent = () =>{
        const newContent = currentContent === 1 ? 2 : 1;
        setCurrentContent(newContent);
    }

    return (
        <nav id="sidebar">
            <ul>
                <li>
                    <button style={{backgroundColor: currentContent===1 ? "cyan" : "crimson" }}
                        type="button"
                        onClick={changeContent}
                    >Switch Content</button>
                </li>
                <li>
                    <a href="https://www.google.com">Google</a>
                </li>
                <li>
                    <a href="https://www.instagram.com">Instagram</a>
                </li>
                <li>
                    <a href="https://www.facebook.com">Facebook</a>
                </li>
            </ul>
        </nav>
    )
};

export default Sidebar;
