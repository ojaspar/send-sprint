const POSTS_PER_PAGE = 10;

export const fetchAllPosts = async (page: number) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${POSTS_PER_PAGE}`,
	);
	return response.json();
};

export const fetchPostById = async (id: number) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`,
	);
	return response.json();
};
