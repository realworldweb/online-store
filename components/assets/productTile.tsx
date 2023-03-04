/*react*/
import { FC } from 'react';

/*next*/
import Link from 'next/link';
import Image from 'next/image';

/*context*/
import { useCart } from '@/context/cart';

/*styles*/
import Styles from '@/styles/modules/assets/productTile.module.css';
import ButtonStyles from '@/styles/modules/assets/button.module.css';

/*types*/
interface MyProps {
	product: any;
}

const ProductTile: FC<MyProps> = ({ product }) => {
	const { addItem } = useCart();

	return (
		<article
			className={`d-flex flex-column position-relative mx-auto mt-4 p-3 align-items-center ${Styles.productTile}`}
			tabIndex={0}
		>
			<Link href={`/products/${product.id}`} tabIndex={0}>
				<div>
					<Image
						width='250'
						height='150'
						src={
							product.thumbnail?.url ? product.thumbnail.url : '/no-image.png'
						}
						alt={
							product.thumbnail?.alt ? product.thumbnail.alt : 'presentation'
						}
					/>
				</div>
			</Link>
			<div className='position-relative w-100'>
				<h4 className='d-flex w-100 text-center justify-content-center'>
					<Link
						href={`/products/${product.id}`}
						className='text-decoration-none text-dark text-center'
						tabIndex={0}
					>
						{product.name.trim()}
					</Link>
				</h4>
				<span className='d-flex position-relative mx-auto fw-bold justify-content-center mb-3'>
					&pound;{parseFloat(String(product.price)).toFixed(2)}
				</span>
				<button
					onClick={() =>
						addItem({
							id: product.id,
							name: product.name,
							price: product.price,
							image: {
								url: product.thumbnail?.url ?? '/no-image.png',
								alt: product.thumbnail?.alt ?? product.name,
							},
							qty: 1,
						})
					}
					className={`btn d-block w-75 position-relative text-dark mx-auto ${ButtonStyles.gradientButtonSuccess}`}
				>
					Add to cart
				</button>
				<Link
					href={`/products/${product.id}`}
					className={`btn mt-1 w-75 d-block position-relative text-dark mx-auto ${ButtonStyles.gradientButtonDanger}`}
					tabIndex={0}
				>
					More info
				</Link>
			</div>
		</article>
	);
};

export default ProductTile;
