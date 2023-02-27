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
								<div className={`d-flex flex-column flex-md-row`}>
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
							</div>{' '}
							{/*End Header Top Info*/}
						</div>
					</div>
				</div>
			</div>{' '}
			{/*Start Header Top*/}
			{/*Start Header Sticky*/}
			<div className='header-sticky-area home--3 d-none d-lg-block'>
				<div className='container-fluid p-lr-80'>
					<div className='row align-items-center'>
						{/*Start Header Logo*/}
						<div className='col-lg-2'>
							<div className='row'>
								<div className='col-md-12 col-xl-12 align-self-center'>
									<div className='top-absolute-sticky-logo d-none'>
										<a href='index.html' aria-label='search'>
											<img
												width='128'
												height='33'
												src='assets/img/logo_footer.webp'
												alt=''
											/>
										</a>
									</div>
									<div className='header-logo text-center header-logo__color--home-4'>
										<a href='index.html' aria-label='home'>
											<img
												width='128'
												height='33'
												src='assets/img/logo_footer.webp'
												alt=''
											/>
										</a>
									</div>
								</div>
							</div>
						</div>{' '}
						{/*End Header Logo*/}
						<div className='col-lg-9 d-lg-block d-none '>
							<nav className='header-menu position-relative'>
								<Link href='#'>Home</Link>
								<Link href='#'>Shop</Link>
								<Link href='#'>About</Link>
								<Link href='#'>Contact Us</Link>
							</nav>
						</div>
					</div>
				</div>
			</div>{' '}
			{/*End Header Sticky*/}
			{/*Start Header Sticky*/}
			<div className='header-mobile-area  home--4 d-block d-lg-none m-b-20'>
				<div className='container-fluid p-lr-80'>
					<div className='row align-items-center'>
						{/*Start Header Logo*/}
						<div className='col-12'>
							<div className='row'>
								<div className='col-md-12 col-xl-12 align-self-center'>
									<div className='top-absolute-sticky-logo'>
										<a href='index.html' aria-label='logo'>
											<img
												width='128'
												height='33'
												src='assets/img/logo_footer.webp'
												alt=''
											/>
										</a>
									</div>
									<div className='header-logo header-logo__color header-logo__color--home-4'>
										<a href='index.html' aria-label='logo'>
											<img
												width='128'
												height='33'
												src='assets/img/logo_footer.webp'
												alt=''
											/>
										</a>
									</div>
								</div>
							</div>
						</div>{' '}
						{/*End Header Logo*/}
					</div>
				</div>
			</div>{' '}
			{/*End Header Sticky*/}
		</>
	);
}

export default Header;
