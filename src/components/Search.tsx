import React, { useState, useEffect } from 'react';
import { useBlogPost } from '../context/BlogPostContext';
import useDebounce  from '../hooks/useDebounce'
const Search: React.FC = () => {
    const { searchPosts } = useBlogPost();
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        searchPosts(debouncedQuery);
    }, [debouncedQuery, searchPosts]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search posts..."
                className="w-full p-2 border border-gray-300 rounded"
            />
        </div>
    );
};

export default Search;
