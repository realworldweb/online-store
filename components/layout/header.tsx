/*react*/
import { useRef, useState, useEffect } from 'react';

/*next*/
import Link from 'next/link';

/*components*/
import Cart from './cart';

/*styles*/
import Styles from '../../styles/modules/layouts/components/header.module.css';

/*assets*/
import { SvgTelephone, SvgEmail } from '../../components/assets/svgs';

function Header() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded((prev) => (prev === true ? prev : true));
	}, [loaded]);

	return (
		<>
			{/*Start Header Top*/}
			<div className={Styles.headerTopArea}>
				<div className='container-fluid  p-lr-80'>
					<div className='row g-0'>
						<div className='col-lg-12'>
							{/*Start Header Top Info*/}
							<div
								className={`position-relative d-flex flex-column align-items-center mt-1  ${Styles.headerTopInfo}`}
							>
								<div
									className={`d-flex position-relative w-100 flex-column align-items-center justify-content-center flex-md-row ${Styles.headerContact}`}
								>
									<div className={Styles.headerPhone}>
										<SvgTelephone width='1rem' height='1rem' />
										&nbsp; Call Us : <span>+0123456789</span>
									</div>
									<div className={Styles.headerEmail}>
										<SvgEmail width='1rem' height='1rem' />
										&nbsp; Email :{' '}
										<a
											className='text-white text-decoration-none'
											href='https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=//demo@example.com'
											target='_blank'
										>
											demo@example.com
										</a>
									</div>
								</div>
								<Cart />
								<div className='d-flex position-relative w-100 d-block'>
									<div className='d-flex w-100 position-relative  mx-auto justify-content-between align-items-center'>
										<Link
											href='/'
											className={`d-flex justify-content-center fw-bold text-decoration-none ${Styles.headerLogo}`}
										>
											<em>Pretium</em>
										</Link>
										<nav className={`d-flex justify-content-between text-white position-relative ${Styles.headerNav}`}>
											<Link href='/'>Home</Link>
											<Link href='/products'>Products</Link>
										</nav>
									</div>
								</div>{' '}
							</div>
							{/*End Header Top Info*/}
						</div>
					</div>
				</div>
			</div>
			{/*End Header Top*/}

			{/*Start Header Sticky*/}

			{/*End Header Sticky*/}
		</>
	);
}

export default Header;
