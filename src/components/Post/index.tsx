import PostComments from '../PostComments';
import styles from './Post.module.css';

import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <div className={styles.post}>
        <img className={styles['post-image']} src={imageUrl} />
        <p className={styles['post-text']}> {children} </p>
        <PostComments />
    </div>
);

export default Post;