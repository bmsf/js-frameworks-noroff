import ProductList from '@/components/ProductList';

export default async function Home() {
	

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24 gap-10'>
			<h1 className='text-3xl'>Products</h1>
			<ProductList  />
		</main>
	);
}
