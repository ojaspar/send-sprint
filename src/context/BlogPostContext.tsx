
import React, { createContext, useState, useContext, useEffect, ReactNode, useCallback } from 'react';
import { fetchAllPosts, fetchPostById } from '../api';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface BlogPostContextType {
    posts: Post[];
    selectedPost: Post | null;
    isLoading: boolean;
    selectPost: (id: number) => void;
    loadMorePosts: () => void;
    searchPosts: (query: string) => void;
}

const BlogPostContext = createContext<BlogPostContextType | undefined>(undefined);

export const BlogPostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchAndSetPosts = async () => {
            setIsLoading(true);
            const newPosts = await fetchAllPosts(page, searchQuery);
            setPosts(prevPosts => page === 1 ? newPosts : [...prevPosts, ...newPosts]);
            setIsLoading(false);
        };

        fetchAndSetPosts();
    }, [page, searchQuery]);

    const selectPost = (id: number) => {
        fetchPostById(id).then(setSelectedPost);
    };

    const loadMorePosts = useCallback(() => {
        setPage(prevPage => prevPage + 1);
    }, []);

    const searchPosts = useCallback((query: string) => {
        setSearchQuery(query);
        setPage(1); // Reset page to 1 for new search
    }, []);

    return (
        <BlogPostContext.Provider value={{ posts, selectedPost, selectPost, loadMorePosts, searchPosts, isLoading }}>
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