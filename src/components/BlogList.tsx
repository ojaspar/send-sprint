import React,{useCallback, useRef} from 'react';
import { useBlogPost } from '../context/BlogPostContext';

const BlogPostList: React.FC = () => {
    const { posts, selectPost, loadMorePosts } = useBlogPost();
    const observer = useRef<IntersectionObserver | null>(null);

    const lastPostElementRef = useCallback((node) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadMorePosts();
            }
        });
        if (node) observer.current.observe(node);
    }, [loadMorePosts]);

    return (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {posts.map((post, index) => (
                <div
                    key={post.id}
                    className="cursor-pointer text-blue-500 p-2 hover:bg-blue-100 rounded transition duration-200 ease-in-out"
                    onClick={() => selectPost(post.id)}
                    ref={posts.length === index + 1 ? lastPostElementRef : null}
                >
                    {post.title}
                </div>
            ))}
        </div>
    );
};

export default BlogPostList;