import React from 'react';
import './Post.scss';

const Post = ({title, user, children}) => {
    return(
        <article className="post">
            <header className="post--header">
                <h2 className="post--header-title">{title}</h2>
            </header>
            <p className="post--content">{children}</p>
            <footer className="post--footer">
                {user.name}
                <button type="button" className="post--footer-button">Ir al Post</button>
            </footer>
        </article>
    );
};

export default Post;