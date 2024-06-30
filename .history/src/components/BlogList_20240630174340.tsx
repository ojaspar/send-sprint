import React from 'react';
import { useBlogPost } from '../context/BlogPostContext';

const BlogPostList: React.FC = () => {
    const { posts, selectPost } = useBlogPost();

    return (
         <div className="space-y-4">
            {posts.map(post => (
                <div 
                    key={post.id} 
                    className="cursor-pointer text-blue-500 p-2 hover:bg-blue-100 rounded transition duration-200 ease-in-out" 
                    onClick={() => selectPost(post.id)}
                >
                    {post.title}
                </div>
            ))}
        </div>
    );
};

export default BlogPostList;