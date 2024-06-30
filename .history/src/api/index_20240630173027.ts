export const fetchAllPosts = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	return response.json();
};

export const fetchPostById = async (id: number) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`,
	);
	return response.json();
};
