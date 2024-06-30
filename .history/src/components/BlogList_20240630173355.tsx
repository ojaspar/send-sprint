import React from 'react';
import { useBlogPost } from '../context/BlogPostContext';

const BlogPostList: React.FC = () => {
    const { posts, selectPost } = useBlogPost();

    return (
        <div>
            {posts.map(post => (
                <div 
                    key={post.id} 
                    className="cursor-pointer text-blue-500" 
                    onClick={() => selectPost(post.id)}
                >
                    {post.title}
                </div>
            ))}
        </div>
    );
};

export default BlogPostList;