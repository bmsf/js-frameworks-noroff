import Link from 'next/link';
import Cart from './Cart';

const Navbar = () => {
	return (
		<header className='flex justify-between p-6'>
			<nav className='flex gap-6'>
				<Link href='/'>Home</Link>
				<Link href='/product'>Product</Link>
				<Link href='/contact'>Contact</Link>
			</nav>
			<Cart />
		</header>
	);
};

export default Navbar;
