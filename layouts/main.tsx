/*react*/
import { FC, ReactNode } from 'react';

/*next*/
import dynamic from 'next/dynamic';

/*components*/
import Header from '../components/layout/header';
const Footer = dynamic(() => import(/* webpackChunkName: "quotes" */ '../components/layout/footer'));

interface MyProps {
	children: ReactNode;
}

const headerOnly: FC<MyProps> = ({ children }) => {
	return (
		<div className='d-flex flex-column w-100 position-relative'>
				<Header />
			<main
				id='content'
				className={`d-flex flex-column w-100 position-relative`}
			>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default headerOnly;
