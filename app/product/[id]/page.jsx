export const metadata = {
	title: 'Product page',
	description: 'Generated by create next app',
};

const ProductPage = async ({ params }) => {
	const response = await fetch(
		'https://api.noroff.dev/api/v1/online-shop/' + params.id
	);

	const data = await response.json();

	const { title, description, price, discountedPrice, imageUrl, rating } = data;

	const calculateDiscountedPrice = () => {
		if (discountedPrice && discountedPrice < price) {
			return discountedPrice;
		}
		return null;
	};

	const discountedPriceToShow = calculateDiscountedPrice();
	const discountAmount = price - discountedPrice;

	return (
		<div className='container mx-auto py-8'>
			<div className='flex flex-col md:flex-row'>
				<div className='md:w-1/2'>
					<img src={imageUrl} alt={title} className='w-full' />
				</div>
				<div className='md:w-1/2 md:pl-8'>
					<h2 className='text-2xl font-bold mb-4'>{title}</h2>
					<p className='text-gray-600 mb-4'>{description}</p>
					{discountedPriceToShow ? (
						<div className='flex items-center mb-4'>
							<span className='text-xl font-bold line-through text-gray-500 mr-2'>
								${price}
							</span>
							<span className='text-xl font-bold text-red-500'>
								${discountedPriceToShow}
							</span>
							<span className='text-sm text-gray-500 ml-2'>
								Save ${discountAmount}
							</span>
						</div>
					) : (
						<p className='text-xl font-bold mb-4'>${price}</p>
					)}
					<button className='bg-blue-500 text-white px-4 py-2 rounded'>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
