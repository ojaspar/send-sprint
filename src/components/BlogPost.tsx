import React from 'react';
import { useBlogPost } from '../context/BlogPostContext';

const BlogPost: React.FC = () => {
    const { selectedPost } = useBlogPost();

    if (!selectedPost) return <div>Select a post to read</div>;

    return (
         <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 capitalize">{selectedPost.title}</h2>
            <p className="text-gray-700">{selectedPost.body}</p>
        </div>
    );
};

export default BlogPost;