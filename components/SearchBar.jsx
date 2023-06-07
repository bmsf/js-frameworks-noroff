'use client';

import { useState } from 'react';

const SearchBar = ({ products, onSearch }) => {
	const [searchValue, setSearchValue] = useState('');

	const handleInputChange = (event) => {
		const searchValue = event.target.value.toLowerCase();
		const filteredProducts = products.filter((product) =>
			product.title.toLowerCase().includes(searchValue)
		);
		onSearch(filteredProducts);
		setSearchValue(event.target.value);
	};

	return (
		<div className='flex items-center'>
			<input
				type='text'
				placeholder='Search for products...'
				value={searchValue}
				onChange={handleInputChange}
				className='px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
		</div>
	);
};

export default SearchBar;
