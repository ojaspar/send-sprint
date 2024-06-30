import React from 'react';
import { useBlogPost } from '../context/BlogPostContext';

const BlogPost: React.FC = () => {
    const { selectedPost } = useBlogPost();

    if (!selectedPost) return <div>Select a post to read</div>;

    return (
        <div>
            <h2 className="text-2xl">{selectedPost.title}</h2>
            <p>{selectedPost.body}</p>
        </div>
    );
};

export default BlogPost;