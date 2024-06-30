import React from 'react';
import BlogPostList from '../components/BlogList';
import BlogPost from '../components/BlogPost';
import Search from '../components/Search';

const Index: React.FC = () => {
    return (
         <div className="container mx-auto p-4">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-center text-gray-800">Blog Posts</h1>
            </header>
            <Search />
            <div className="grid md:grid-cols-3 gap-4 h-[80vh]">
                <div className="md:col-span-1 p-4 bg-white shadow rounded-lg animate-slideIn">
                    <h2 className="text-2xl font-semibold mb-4">Posts</h2>
                    <div className="h-full">
                        <BlogPostList />
                    </div>
                </div>
                <div className="md:col-span-2 p-4 bg-white shadow rounded-lg animate-fadeIn h-full overflow-y-auto md:h-auto md:overflow-auto">
                    <BlogPost />
                </div>
            </div>
        </div>
    );
};

export default Index;
