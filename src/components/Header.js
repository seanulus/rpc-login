import React from 'react';
import SVGComponent from './SVGComponent';
import './Header.css';

export default function Header() {
	return (
		<header className='header-rpc'>
				<a href='/' className='logo'>
					<SVGComponent />
				</a>
				<button className='button-rpc'>Sign in</button>
		</header>
	)
}