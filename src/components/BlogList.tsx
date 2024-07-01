import React,{useCallback, useRef} from 'react';
import { useBlogPost } from '../context/BlogPostContext';

const BlogList: React.FC = () => {
   const { posts, selectPost, loadMorePosts, isLoading } = useBlogPost();
    const observer = useRef<IntersectionObserver | null>(null);

    const lastPostElementRef = useCallback((node: HTMLDivElement | null) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMorePosts();
            }
        });
        if (node) observer.current.observe(node);
    }, [loadMorePosts]);

     if (!posts.length && !isLoading) {
        return <div className="text-center py-4">No posts found.</div>;
    }

    return (
        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {posts.map((post, index) => (
                <div
                    key={post.id}
                    className="cursor-pointer capitalize text-blue-500 p-2 hover:bg-blue-100 rounded transition duration-200 ease-in-out"
                    onClick={() => selectPost(post.id)}
                    ref={posts.length === index + 1 ? lastPostElementRef : null}
                >
                    {post.title}
                </div>
            ))}

            {isLoading && <div className="text-center py-4">Loading...</div>}
        </div>
    );
};

export default BlogList;