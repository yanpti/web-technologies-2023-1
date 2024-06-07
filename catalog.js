import { Catalog } from './src/components/catalog.js';

const renderPostItem = (item) => `
    <a  
        href="post.html?id=${item.id}"
        class="post-item"
    >
        <span class="post-item__title">
            ${item.title}
        </span>

        <span class="post-item__body">
            ${item.body}
        </span>
    </a>
`;

const getPostItems = async ({ limit, page }) => {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
		);
		const total = +response.headers.get('x-total-count');
		const items = await response.json();
		return { items, total };
	} catch (error) {
		console.log('Error:', error);
	}
};

const renderPhotoItem = (item) => `
    <a  
        href="photos/${item.id}"
        class="photo-item"
    >
        <span class="photo-item__title">
            ${item.title}
        </span>

        <img 
            src=${item.url}
            class="photo-item__image"
        >
    </a>
`;

const getPhotoItems = async ({ limit, page }) => {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`
		);
		const total = +response.headers.get('x-total-count');
		const items = await response.json();
		return { items, total };
	} catch (error) {
		console.log('Error:', error);
	}
};

const init = () => {
	const catalog = document.getElementById('catalog');
	new Catalog(catalog, {
		renderItem: renderPostItem,
		getItems: getPostItems,
	}).init();
};

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}