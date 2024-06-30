import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { fetchAllPosts, fetchPostById } from '../api';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface BlogPostContextType {
    posts: Post[];
    selectedPost: Post | null;
    selectPost: (id: number) => void;
}

const BlogPostContext = createContext<BlogPostContextType | undefined>(undefined);

export const BlogPostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    useEffect(() => {
        fetchAllPosts().then(setPosts);
    }, []);

    const selectPost = (id: number) => {
        fetchPostById(id).then(setSelectedPost);
    };

    return (
        <BlogPostContext.Provider value={{ posts, selectedPost, selectPost }}>
            {children}
        </BlogPostContext.Provider>
    );
};

export const useBlogPost = () => {
    const context = useContext(BlogPostContext);
    if (context !== undefined) { 
        return context;
    }
    throw new Error('not within a BlogPostProvider')
};
