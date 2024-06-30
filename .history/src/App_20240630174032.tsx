import React from 'react';
import HomePage from './pages/Index';
import { BlogPostProvider } from './context/BlogPostContext';

const App: React.FC = () => {
    return (
        <BlogPostProvider>
            <HomePage />
        </BlogPostProvider>
    );
};

export default App;