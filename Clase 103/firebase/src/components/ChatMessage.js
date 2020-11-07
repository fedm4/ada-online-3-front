import React from 'react';
import '../scss/ChatMessage.scss';

const ChatMessage = ({message, uid}) => {
    return (
        <article className={`chat-message ${uid === message.uid ? 'user-message' : ''}`}>
            <figure className="user-pic-wrapper">
                <img src={message.photoUrl} alt="User" />
            </figure>
            <p>{message.message}</p>
        </article>
    )
};

export default ChatMessage;
