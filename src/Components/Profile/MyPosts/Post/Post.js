import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {

    return (
        <div className={styles.item}>
            <span className={styles.postText}>{props.message}</span>
        </div>

    );
};

export default Post;