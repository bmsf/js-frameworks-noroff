import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Cart = () => {
	const itemCount = 5;
	return (
		<div className='relative'>
			<ShoppingCartIcon className='h-8 w-6' />
			{itemCount > 0 && (
				<div className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2'>
					<div className='flex items-center justify-center h-6 w-6 rounded-full bg-red-500 text-white text-sm'>
						{itemCount}
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
