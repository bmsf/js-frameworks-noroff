'use client';

import { useEffect, useState } from 'react';
import Product from '@/components/Product';
import SearchBar from './SearchBar';

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://api.noroff.dev/api/v1/online-shop'
				);
				const data = await response.json();
				setProducts(data);
				setFilteredProducts(data);
			} catch (error) {
				console.log('Error fetching data from API:', error);
			}
		};

		fetchData();
	}, []);

	const handleSearch = (results) => {
		setFilteredProducts(Array.isArray(results) ? results : []);
	};

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24 gap-10'>
			<SearchBar products={products} onSearch={handleSearch} />
			{filteredProducts &&
				filteredProducts.map((product) => (
					<Product
						key={product.id}
						price={product.price}
						title={product.title}
						imageUrl={product.imageUrl}
						id={product.id}
					/>
				))}
		</main>
	);
};

export default ProductList;
