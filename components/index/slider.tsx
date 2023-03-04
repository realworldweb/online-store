import Styles from '@/Styles/modules/index/slider.module.css';
import Image from 'next/image';

const Slider = () => {
	return (
		<div className={`w-100 mx-auto ${Styles.sliderContainer}`}>
			<div className={` d-flex ${Styles.slider}`}>
				<Image
					src='https://res.cloudinary.com/lush/image/upload/f_auto,q_auto/v1535031873/lush_com/social.jpg'
					className={Styles.sliderImage}
					alt='pure products'
					width='1800'
					height='1200'
				priority />
				<Image
					src='/slider-image1.webp'
					className={Styles.sliderImage}
					alt='pure products'
					width='1800'
					height='1200'
				/>
				<Image
					src='/slider-image2.webp'
					className={Styles.sliderImage}
					alt='bubbling baths'
					width='1800'
					height='1200'
				/>
				<Image
					src='/slider-image3.webp'
					className={Styles.sliderImage}
					alt='bubbling baths'
					width='1800'
					height='1200'
				/>
			</div>
		</div>
	);
};

export default Slider;
