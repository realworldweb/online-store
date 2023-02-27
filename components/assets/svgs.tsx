import { SVGProps } from 'react';

export function SvgTelephone(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 512 512'
			{...rest}
		>
			<path
				d='M415.9 335.5c-14.6-15-56.1-43.1-83.3-43.1-6.3 0-11.8 1.4-16.3 4.3-13.3 8.5-23.9 15.1-29 15.1-2.8 0-5.8-2.5-12.4-8.2l-1.1-1c-18.3-15.9-22.2-20-29.3-27.4l-1.8-1.9c-1.3-1.3-2.4-2.5-3.5-3.6-6.2-6.4-10.7-11-26.6-29l-.7-.8c-7.6-8.6-12.6-14.2-12.9-18.3-.3-4 3.2-10.5 12.1-22.6 10.8-14.6 11.2-32.6 1.3-53.5-7.9-16.5-20.8-32.3-32.2-46.2l-1-1.2c-9.8-12-21.2-18-33.9-18-14.1 0-25.8 7.6-32 11.6-.5.3-1 .7-1.5 1-13.9 8.8-24 20.9-27.8 33.2-5.7 18.5-9.5 42.5 17.8 92.4 23.6 43.2 45 72.2 79 107.1 32 32.8 46.2 43.4 78 66.4 35.4 25.6 69.4 40.3 93.2 40.3 22.1 0 39.5 0 64.3-29.9 26-31.4 15.2-50.6-.4-66.7z'
				fill={fill ? fill : 'currentColor'}
			/>
		</svg>
	);
}

export function SvgEmail(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 24 24'
			{...rest}
		>
			<path
				fill={fill ? fill : 'currentColor'}
				d='m4 8l8 5l8-5l-8-5l-8 5m18 0v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-.73.39-1.36.97-1.71L12 .64l9.03 5.65c.58.35.97.98.97 1.71Z'
			/>
		</svg>
	);
}

export function SvgBag(props: SVGProps<SVGSVGElement>) {
	const { width, height, fill, ...rest } = props;
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 256 256'
			{...rest}
		>
			<path
				fill={fill ? fill : 'currentColor'}
				d='M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-88 120a48 48 0 0 1-48-48a8 8 0 0 1 16 0a32 32 0 0 0 64 0a8 8 0 0 1 16 0a48 48 0 0 1-48 48ZM40 72V56h176v16Z'
			/>
		</svg>
	);
}
