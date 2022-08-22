import React from 'react';
import "./post.css";

interface Props {
    publishedAt: string,
    author: string,
    title: string
}

const Post: React.FC<Props> = ({publishedAt, author, title}) => {
    return (
        <div className='post-container'>
            <img
                className="iconmonstr-time-2"
                src="https://iconmonstr.com/time-2-svg/"
                srcSet="img/iconmonstr-time-2@2x.png 2x, img/iconmonstr-time-2@3x.png 3x"
                alt=''/>
            <p className='hours-ago-by-author'> {publishedAt} hours ago by {author} </p>
            <p className='event-driven-state-m'> {title} </p>
            <div className="fave-corner"></div>
        </div>
    );
}

export default Post;