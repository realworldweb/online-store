import Image from 'next/image';

import Styles from '../../styles/modules/index/hero.module.css';

import SvgLoveLeaf from '../assets/svgs';

const Hero = () => {
	return (
		<div
			className={`d-flex mx-auto position-relative flex-column flex-md-row ${Styles.hero}`}
		>
			<div
				className={`d-flex position-relative flex-column text-dark fw-bold ${Styles.heroTextContainer}`}
			>
				<p
					className={`d-flex position-relative m-0 p-0 mt-5 text-white ${Styles.tagline}`}
				>
					<em className='px-3'>Ethically sourced natural Indgredients</em>
				</p>
				<p
					className={`d-flex position-relative fw-bolder ${Styles.taglineLower}`}
				>
					And just a little bit of love
				</p>
			</div>
			<div className={`position-relative ${Styles.heroImage}`}>
				<Image
					src='/slider-image3.webp'
					alt='made from Ethically sourced natural Indgredients And just a little bit of love'
					fill
				/>
				<p
					className={`d-flex position-absolute m-0 p-0 mb-3 fw-bold ${Styles.imageTagline}`}
				>
					<em className='px-3'>It's what were made of!</em>
				</p>
			</div>
		</div>
	);
};

export default Hero;
