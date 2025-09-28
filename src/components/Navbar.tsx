import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
	return (
		<header className='flex justify-between items-center p-4'>
			<Link href='#'>
				<h5 className='font-mono'>ClearInvoice</h5>
			</Link>
			<nav>
				<ul className='flex items-center space-x-4'>
					<li>
						<Link href='#'>Home</Link>
					</li>
					<li>
						<Link href='#'>About</Link>
					</li>
					<li>
						<Link href='#'>Contact</Link>
					</li>
					<li>
						<Button>Sign in</Button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
