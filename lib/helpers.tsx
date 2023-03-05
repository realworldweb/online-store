import { ReactElement } from 'react';
import { SvgStar } from '@/components/assets/svgs';

const removeProductNotes = (str: string) => {
	let end = false;
	return [...str]
		.reduce((acc: string[], val: string) => {
			if (val === '-' || end) {
				end = true;
				return acc;
			}

			acc.push(val);

			return acc;
		}, [])
		.join('');
};

const starRating = (rating: number) => {
	let half = rating % 1 === 0 ? false : true;

	const stars: ReactElement[] = Array.from({ length: 5 }, (v, i) => {
		if (Math.floor(rating) >= i + 1) {
			return <SvgStar width='1.6rem' height='1.6rem' fill='#ffcd3c' key={i} />;
		} else if (half) {
			half = false;

			return (
				<SvgStar width='1.6rem' height='1.6rem' key={i} />
			);
		}

		return <SvgStar width='1.6rem' height='1.6rem' fill='#fff' key={i} />;
	});

	return stars;
};

export { removeProductNotes, starRating };
